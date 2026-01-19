import SectionHeading from "../ui/SectionHeading";

const About = () => {
  return (
    <main>
      {/* Hero-like intro */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Gym
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are committed to helping individuals build strength, confidence,
            and a healthier lifestyle through fitness.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for fitness and community, our gym was
              created to provide a supportive environment where everyone can
              grow stronger at their own pace.
            </p>
            <p className="text-gray-600">
              From beginners to experienced athletes, we believe fitness should
              be accessible, motivating, and sustainable.
            </p>
          </div>

          <div className="bg-black text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To empower people through fitness by offering expert guidance,
              modern facilities, and a welcoming community.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Our Values"
            subtitle="What defines how we train and support our members"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {["Discipline", "Consistency", "Community"].map((value) => (
              <div
                key={value}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-2">{value}</h3>
                <p className="text-gray-600">
                  We believe lasting results come from commitment and support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
