import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const whyUsItems = [
    {
      image:
        "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
      title: "Wide Range of Products",
      description:
        "We offer an extensive selection of medicines, supplements, and healthcare products.",
    },
    {
      image:
        "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
      title: "Affordable Prices",
      description:
        "Competitive pricing ensures you get the best value for your money.",
    },
    {
      image:
        "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
      title: "Fast Delivery",
      description: "Quick and reliable delivery for all your pharmacy needs.",
    },
    {
      image:
        "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
      title: "Expert Advice",
      description:
        "Our pharmacists provide expert advice and personalized care.",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* About Us Section */}
      <section className="bg-gray-100 pt-52" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Welcome to filixpharma, your trusted provider for top-quality
                medications and healthcare products. Our mission is to ensure
                the well-being of our customers by offering a wide range of
                prescription and over-the-counter drugs, as well as personalized
                services tailored to your health needs.
                <br />
                <br />
                We are committed to excellence, providing competitive pricing,
                timely delivery, and exceptional customer service. Whether you
                need advice from a licensed pharmacist or assistance finding the
                right medication, our team is here to help.
                <br />
                <br />
                At filixpharma, your health is our priority. We look forward to
                being your go-to pharmacy for all your healthcare needs.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  "
                alt="Pharmacy Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
          Why Choose Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {whyUsItems.map((item, index) => (
              <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      className="w-32 mb-3"
                      alt={item.title}
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
