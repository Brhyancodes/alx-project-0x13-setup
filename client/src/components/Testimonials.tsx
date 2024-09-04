
const testimonials = [
  {
    title: "Brilliant house to rent",
    content:
      "All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer.",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    name: "Jane Cooper",
    position: "CEO at ABC Corporation",
  },
  {
    title: "Efficient customer support",
    content:
      "The customer support team at our service is incredibly responsive and helpful. They went above and beyond to assist me with my issue.",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Emily Smith",
    position: "Marketing Manager at ABC Company",
  },
  {
    title: "Seamless integration process",
    content:
      "Integrating our systems with our service was smooth and hassle-free. The support team guided us through every step of the process.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Sarah Brown",
    position: "CTO at XYZ Corporation",
  },
  {
    title: "Reliable service uptime",
    content:
      "Our service has consistently maintained high uptime, ensuring that our operations run smoothly without any disruptions.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    name: "James White",
    position: "COO at XYZ Corporation",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-slate-100 py-12">
      <section className="max-w-5xl mx-auto w-full px-10  ">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Testimonials
          </h2>
          <p className="text-lg font-medium text-gray-700">
            Discover how our service can benefit you
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`border p-7 rounded-xl bg-white drop-shadow-md border-neutral-200/50 ${
                index % 2 === 0 ? "col-span-2" : "col-span-3"
              } flex flex-col gap-y-10 justify-between`}
            >
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-gray-900">{testimonial.title}</p>
                <p className="font-medium text-gray-800">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full"
                />
                <p className="pt-2 text-sm font-semibold">{testimonial.name}</p>
                <p className="text-sm font-medium text-gray-500">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
