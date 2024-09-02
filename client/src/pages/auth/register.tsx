import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/bg-auth.jpg';
import photo from '../../assets/bg-auth-2.png';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FieldError } from 'react-hook-form';

const registerSchema = z.object({
  fullname: z.string().min(2,'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
   // resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = async () => {
    navigate('/login');
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('../images/bg-auth.jpg')] relative bg-cover bg-top after:absolute after:inset-0 after:bg-black/50 after:-z-10"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: 'rgba(0, 0, 0, 1)',
      backgroundSize: 'cover',
    }}
    >
    <div className="xl:w-1/2 md:w-3/4 w-full m-8 whitespace-nowrap">
        <div className="flex bg-white overflow-hidden rounded-xl p-2">
            <div className="md:w-1/2 lg:block hidden p-2 rounded-xl bg-center md:block overflow-hidden"
            style={{  backgroundImage: `url(${photo})`,

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            backgroundSize: 'cover',

            }}>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="px-6 py-8">
                    <div className="flex justify-between items-start">
                        <h5 className="text-xl font-bold text-gray-700 mb-6">Register</h5>
                        <a href="#" className="flex mb-6">
                            <span className="font-extrabold text-xl first-letter:text-sky-500 tracking-wider">filix<span className="text-sky-500">-</span>pharma</span>
                        </a>
                    </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-base font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your name"
                {...register('fullname')}
                className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none ${errors.fullname ? 'border-red-500' : ''}`}
              />
              {errors.fullname && (<p className="text-red-500">{(errors.fullname as FieldError).message}</p>)}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register('email')}
                className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
              />
             {errors.email && (<p className="text-red-500">{(errors.email as FieldError).message}</p>)}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register('password')}
                className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
              />
             {errors.password && (<p className="text-red-500">{(errors.password as FieldError).message}</p>)}
            </div>
            <button
              type="submit"
              className="mb-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Register now
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="bg-gray-400 flex-grow h-px"></div>
            <span className="px-4 font-semibold text-black-500">Or</span>
            <div className="bg-gray-400 flex-grow h-px"></div>
          </div>
          <p className="mt-2 text-center">
            Already have an account? <Link to="/login" className="text-blue-500 font-bold hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;