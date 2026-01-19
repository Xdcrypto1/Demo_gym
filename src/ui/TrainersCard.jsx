const TrainerCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-red-600 font-medium">{role}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
