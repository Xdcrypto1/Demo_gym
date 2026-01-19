import SectionHeading from "../ui/SectionHeading";
import PlanCard from "../ui/Card";

const Plans = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Membership Plans"
          subtitle="Flexible plans designed for every fitness level"
        />

        <div className="grid md:grid-cols-3 gap-10">
          <PlanCard
            title="Basic"
            price="₦15,000 / mo"
            features={[
              "Gym access",
              "Free Wi-Fi",
              "Locker room access",
            ]}
          />

          <PlanCard
            title="Standard"
            price="₦25,000 / mo"
            features={[
              "Everything in Basic",
              "Group classes",
              "Fitness assessment",
            ]}
            highlight
          />

          <PlanCard
            title="Premium"
            price="₦40,000 / mo"
            features={[
              "Personal training",
              "Diet consultation",
              "Priority support",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;
