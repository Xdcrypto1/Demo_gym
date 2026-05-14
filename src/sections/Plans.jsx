import { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import PlanCard from "../ui/Card";
import PaymentModal from "../ui/PaymentModal";

const plans = [
  {
    title: "Basic",
    price: "₦10,000 / mo",
    amount: 1000000,
    features: ["Gym access", "Basic equipment use"],
  },
  {
    title: "Standard",
    price: "₦15,000 / mo",
    amount: 1500000,
    features: ["Gym access", "Group classes", "Trainer Guidance"],
    highlight: true,
  },
  {
    title: "Premium",
    price: "₦40,000 / mo",
    amount: 4000000,
    features: ["Full access", "Personal trainer", "Nutrition plan"],
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = ({ name, email }) => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_1c25ae452be24b2d072fa54ea7c248dc739a6978",
      email: email,
      amount: selectedPlan.amount,
      currency: "NGN",
      metadata: { name },
      callback: function () {
        window.location.href = "/success";
      },
      onClose: function () {
        console.log("Payment closed");
      },
    });
    setSelectedPlan(null);
    handler.openIframe();
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Example Membership Plans You Can Offer"
          subtitle="Simple. Direct. Money-focused."
        />
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              highlight={plan.highlight}
              onChoose={() => setSelectedPlan(plan)}
            />
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onConfirm={handlePayment}
        />
      )}
    </section>
  );
};

export default Plans;