import { FaDumbbell, FaUserCheck, FaClock } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    title: "Modern Equipment",
    desc: "Top-quality machines and free weights.",
    icon: <FaDumbbell />,
  },
  {
    title: "Expert Trainers",
    desc: "Certified professionals to guide you.",
    icon: <FaUserCheck />,
  },
  {
    title: "Flexible Schedule",
    desc: "Train at your own pace, anytime.",
    icon: <FaClock />,
  },
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Everything you need to reach your fitness goals"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl text-red-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
