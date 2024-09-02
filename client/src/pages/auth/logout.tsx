import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/bg-auth.jpg';
import photo from '../../assets/bg-auth-2.png';
const LogoutPage = () => {
    return (
        <main>
<div className="h-screen w-screen flex justify-center items-center bg-[url('../images/bg-auth.jpg')] relative bg-cover bg-top after:absolute after:inset-0 after:bg-black/50 after:-z-10"
style={{
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: 'rgba(0, 0, 0, 1)',
  backgroundSize: 'cover',
}}
>
    <div className="xl:w-1/2 md:w-3/4 w-full m-8 whitespace-nowrap">
        <div className="flex bg-white overflow-hidden rounded-xl p-2">
            <div className="md:w-1/2 lg:block hidden p-2 rounded-xl bg-center md:block" 
              style={{  backgroundImage: `url(${photo})`,

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            backgroundSize: 'cover'}}
            >
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="px-6 py-8">
                    <div className="flex justify-between items-start">
                        <h5 className="text-xl font-bold text-gray-700 mb-6">Logout</h5>

                        <a href="#" className="flex mb-6">
                            <span className="font-extrabold text-2xl first-letter:text-sky-500 tracking-wider">filix<span className="text-sky-500">.</span>pharma</span>
                        </a>
                    </div>

                    <div className="mt-4 pt-2">
                        <h5 className="text-gray-800 font-semibold mb-8 text-xl">You are Logged Out</h5>
                        <p className="text-gray-800 font-semibold mb-6 text-base">Thank you for Choosing Us</p>

                    </div>


                    <div className="flex justify-center mb-6">
                        <a className='inline-flex items-center justify-center rounded py-1.5 px-3 text-sm font-semibold transition-all w-full text-white bg-blue-500 hover:bg-blue-700' href="./login"> Log In </a>
                    </div>
   
                    <div className="flex items-center my-4">
                    <div className="bg-gray-400 flex-grow h-px"></div>
                        <span className="px-4 font-semibold text-black-500">Or</span>
                        <div className="bg-gray-400 flex-grow h-px"></div>
                  </div>

                    <p className="mt-2 text-center">
        Don't have an account? <Link to="/register" className="text-blue-500 font-bold hover:text-blue-700">
          Register
          </Link>
</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </main>
    );
  };
  
  export default LogoutPage;