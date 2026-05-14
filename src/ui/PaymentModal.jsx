const PaymentModal = ({ plan, onClose, onConfirm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    if (!name || !email) return;
    onConfirm({ name, email });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-1">Almost there 💪</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter your details to continue with the{" "}
          <span className="text-red-600 font-semibold">{plan.title}</span> plan
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Proceed to Payment
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-gray-400 text-sm hover:text-gray-600 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;