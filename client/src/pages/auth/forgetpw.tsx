import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import myImage from "../../assets/samuel-kwabena-ansong-cs4icPeWFJY-unsplash.jpg";
import bgImage from "../../assets/samuel-kwabena-ansong-cs4icPeWFJY-unsplash.jpg";

// password recovery form using Zod
const passwordRecoverySchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type PasswordRecoveryFormData = z.infer<typeof passwordRecoverySchema>;
const PasswordRecoveryForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(120);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordRecoveryFormData>({
    resolver: zodResolver(passwordRecoverySchema),
  });

  //! I use the comment down below so that we will not get the error _data is defined but never used error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: PasswordRecoveryFormData) => {
    try {
      setLoading(true);
      setError("");

      // password recovery logic here
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);

      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        navigate("/login");
      }, 120000);
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate("/login");
  };
  const handleNewAccount = () => {
    navigate("/register");
  };

  return (
    <>
      <div
        className="flex justify-center items-center w-screen h-screen "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gray-50 rounded-lg pl-2  pr-6 mb-4 w-full max-w-3xl  flex flex-col md:flex-row sm:flex-row">
          <div
            className="md:w-1/2  sm:w-1/3 bg-cover bg-center hidden md:block sm:block mr-8 rounded-lg py-4 ml-none mb-2  mt-2 pt-4 pb-4"
            style={{ backgroundImage: `url(${myImage})` }}
          ></div>

          <div className="flex-1 ">
            <div className="flex-1 flex justify-between items-center ">
              <h2 className="font-bold mb-4 ">Forget Password</h2>
              <h2 className="font-bold mb-4 ">
                filix<span className="text-blue-500">pharma</span>
              </h2>
            </div>

            {success ? (
              <div className="text-green-500 mb-4">
                Password reset instructions have been sent to your email. You
                will receive an Email in {timer} seconds.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 ">
                  <label htmlFor="email" className="block font-medium mb-2 ">
                    Email Address
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    id="email"
                    type="email"
                    className={`border rounded-md py-2 px-3 w-full ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-green-600 text-white font-medium py-2 px-4 w-full rounded-md transition-colors  ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Send Reset Link"}
                </button>

                {error && <div className="text-red-500 mt-4">{error}</div>}
                <div className="flex mt-3">
                  <hr className="w-1/2 mt-2 border-dashed"></hr>
                  <p className="text-center">Or</p>
                  <hr className="w-1/2 mt-2 border-dashed"></hr>
                </div>

                <div className="mt-2 text-center flex">
                  <p className="text-left">I Remembered The Password? </p>
                  <button
                    type="button"
                    className="text-blue-500 hover:text-green-600 font-medium ml-2"
                    onClick={handleForgotPassword}
                  >
                    login
                  </button>
                </div>
                <div className="mt-4 mb-2 text-center flex">
                  <p className="text-center">New Account?</p>
                  <button
                    type="button"
                    className="text-blue-500 hover:text-green-600 font-medium ml-2 "
                    onClick={handleNewAccount}
                  >
                    Register Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoveryForm;
