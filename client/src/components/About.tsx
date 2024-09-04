import Stats from "./Stats"
export default function AboutSection() {
  return (
    <section className="bg-white ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            We Provide Quality Pharmaceuticals
          </h2>
          <p className="mb-4 text-gray-800 font-normal">
            At our pharmacy wholesale company, we focus on providing the highest
            quality pharmaceutical products to ensure the best outcomes for
            patients. Our team of experts works tirelessly to source,
            distribute, and deliver products that meet the highest standards.
          </p>
          <p className="text-gray-800 font-normal">
            We understand the importance of efficiency and reliability in the
            healthcare industry, and we are committed to delivering on our
            promises with every order. From common medications to specialized
            treatments, we’ve got you covered.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full  rounded-lg"
            src="https://images.pexels.com/photos/15688022/pexels-photo-15688022/free-photo-of-botox-flasks-on-doctor-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Pharmacy office"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.pexels.com/photos/5682924/pexels-photo-5682924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Pharmaceutical warehouse"
          />
        </div>
      </div>
      <Stats/>
    </section>
  );
}
