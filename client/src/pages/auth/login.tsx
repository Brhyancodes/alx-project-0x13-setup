import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/debbal-bg.jpg';
import photo from '../../assets/debbal-logo.jpg';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { FieldError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  //! I use the comment down below so that we will not get the error _data is defined but never used error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: LoginFormData) => {
    navigate("/dashboard");
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "rgba(4, 1, 4, 1)",
      }}
    >
      <div className="bg-gray-50 rounded-xl w-full max-w-xl p-2 flex flex-col lg:flex-row mx-4 sm:mx-0">
        <div
          className="lg:w-1/2 bg-cover bg-center hidden lg:block mr-8 rounded-xl ml-none mb-2 mt-2 pt-4 pb-4"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className="lg:w-1/2 pt-6 pb-8 px-4 sm:px-6 md:px-0">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-700 mb-4">Login</h1>
            <h1 className="text-right font-bold text-blue-500 sm:text-xl">
              filix-pharma
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email")}
                className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500">
                  {(errors.email as FieldError).message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-base font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password")}
                className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500">
                  {(errors.password as FieldError).message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mb-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="bg-gray-400 flex-grow h-px"></div>
            <span className="px-4 font-semibold text-black-500">Or</span>
            <div className="bg-gray-400 flex-grow h-px"></div>
          </div>

          <p className="mt-2 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 font-bold hover:text-blue-700"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
