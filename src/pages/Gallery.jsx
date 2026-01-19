import SectionHeading from "../ui/SectionHeading";

const images = [
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07c",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
];

const Gallery = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Our Gym Gallery"
          subtitle="A glimpse into our training environment and community"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt="Gym gallery"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
