import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/wp1931665-pharmacy-wallpapers.jpg";
import bgImage from "../../assets/wp1931665-pharmacy-wallpapers.jpg";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: PasswordRecoveryFormData) => {
    try {
      setLoading(true);
      setError("");
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
    navigate("/registration");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "blur(5px)",
          zIndex: 0,
        }}
      ></div>
      <div className="bg-gray-50 rounded-lg p-4 md:p-6 w-full max-w-3xl flex flex-col md:flex-row items-center z-10 relative">
        {/* Image on larger screens */}
        <div
          className="w-full md:w-1/2 h-48 md:h-auto bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="flex-1 w-full md:ml-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Forget Password</h2>
            <h2 className="font-bold text-lg">
              filix<span className="text-blue-500">pharma</span>
            </h2>
          </div>

          {success ? (
            <div className="text-green-500 mb-4">
              Password reset instructions have been sent to your email. You will
              receive an Email in {timer} seconds.
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
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
                className={`bg-blue-500 hover:text-blue-700 text-white font-medium py-2 px-4 w-full rounded-md transition-colors ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Send Reset Link"}
              </button>

              {error && <div className="text-red-500 mt-4">{error}</div>}
              <div className="flex items-center my-4">
                <hr className="w-1/2 border-dashed" />
                <p className="text-center mx-2">Or</p>
                <hr className="w-1/2 border-dashed" />
              </div>

              <div className="mt-4 text-center flex justify-center">
                <p className="text-left">I Remembered The Password? </p>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 font-medium ml-2"
                  onClick={handleForgotPassword}
                >
                  login
                </button>
              </div>
              <div className="mt-4 mb-2 text-center flex justify-center">
                <p className="text-left">New Account?</p>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 font-medium ml-2"
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
  );
};

export default PasswordRecoveryForm;
