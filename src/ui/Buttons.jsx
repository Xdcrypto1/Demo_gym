const Button = ({ text }) => {
  return (
    <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-full font-semibold">
      {text}
    </button>
  );
};

export default Button;
