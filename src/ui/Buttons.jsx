const Button = ({ text }) => {
  return (
    <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full font-semibold">
      {text}
    </button>
  );
};

export default Button;
