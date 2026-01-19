import SectionHeading from "../ui/SectionHeading";

const Contact = () => {
  return (
    <main>
      {/* Header */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ready to start your fitness journey? Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <SectionHeading
              title="Contact Information"
              subtitle="We’re always happy to hear from you"
            />

            <div className="space-y-4 text-gray-700">
              <p>📍 Lagos, Nigeria</p>
              <p>📞 +234 701 170 4047</p>
              <p>📧 info@gympro.com</p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              We’ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
