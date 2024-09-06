import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactInfo = [
  {
    label: "Address",
    value: "1234 Street Name, City, State, 56789",
    icon: <FaLocationCrosshairs className="text-green-600" />,
  },
  {
    label: "Phone",
    value: "+1 (234) 567-8900",
    icon: <FaPhoneAlt className="text-green-600" />,
  },
  {
    label: "Email",
    value: "example@example.com",
    icon: <MdEmail className="text-green-600" />,
  },
];

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "10:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const Contact: React.FC = () => {
  return (
    <>
    <Navbar/>
      <section className="mb-32">
        <div
          id="map"
          className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1809.9420101870571!2d38.73249187130846!3d9.04483732142654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDInMzkuOSJOIDM4wrA0Myc1Ni40IkU!5e1!3m2!1sen!2set!4v1725564428255!5m2!1sen!2set"
            width="100%"
            height="480"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-6 mx-auto md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      id="exampleInput90"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      id="exampleInput91"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                      htmlFor="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                      id="exampleFormControlTextarea1"
                      rows={3}
                    ></textarea>
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                      htmlFor="exampleFormControlTextarea1"
                    >
                      Message
                    </label>
                  </div>

                  <button
                    type="button"
                    className="mb-6 w-full rounded bg-green-500 hover:bg-green-400 ease-in-out duration-150  text-white px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal lg:mb-0"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="w-full flex flex-col md:w-6/12 lg:w-1/2 lg:px-6 xl:w-1/2">
                    {contactInfo.map((info, index) => (
                      <div className="mb-12 flex items-start" key={index}>
                        <div className="shrink-0 text-2xl ">{info.icon}</div>
                        <div className="ml-4">
                          <p className="text-lg font-semibold text-gray-700">
                            {info.label}
                          </p>
                          <p className="text-neutral-500">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex flex-col md:w-6/12 lg:w-1/2 lg:px-6 xl:w-1/2">
                    <div className="mb-12">
                      <div className="flex items-start">
                        <div className="shrink-0 text-2xl ">
                          <TbClockHour3 className="text-green-600 " />
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-semibold text-gray-700">
                            Work Hours
                          </p>
                          {hours.map((hour, index) => (
                            <p key={index} className="text-neutral-500">
                              {hour.day}: {hour.time}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
