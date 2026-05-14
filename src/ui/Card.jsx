import { FaCheckCircle } from "react-icons/fa";

const PlanCard = ({ title, price, features, highlight, onChoose }) => {
  return (
    <div
      className={`rounded-2xl p-8 shadow-lg border transition
        ${highlight ? "border-red-600 scale-105" : "border-gray-200"}
      `}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-6 text-red-600">{price}</p>

      <ul className="space-y-4 mb-8 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <FaCheckCircle className="text-red-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onChoose}
        className={`w-full py-3 rounded-full font-semibold transition
          ${
            highlight
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-black text-white hover:bg-gray-800"
          }
        `}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PlanCard;
