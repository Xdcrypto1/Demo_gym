import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
        <FaCheckCircle className="text-red-600 text-6xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-2">
          Welcome to the family 💪
        </p>
        <p className="text-gray-500 text-sm mb-8">
          A confirmation email will be sent to the gym shortly.
          Expect to hear from them within 24 hours.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;