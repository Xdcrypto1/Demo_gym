import SectionHeading from "../ui/SectionHeading";
import TrainerCard from "../ui/TrainersCard";

const trainers = [
  {
    name: "John Carter",
    role: "Strength Coach",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07c",
  },
  {
    name: "Sarah Lee",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
  },
  {
    name: "Mike Johnson",
    role: "Fitness Instructor",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
];

const Trainers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Meet Our Trainers"
          subtitle="Certified professionals dedicated to your fitness journey"
        />

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
