import Button from "../ui/Buttons";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-slide-up stagger-1">
          Train Harder.
          <span className="block text-brand">Get Stronger.</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 animate-slide-up stagger-2">
          Premium training programs, expert coaches, real results.
        </p>

        <div className="mt-8 animate-slide-up stagger-3">
          <Button text="Learn More" />
        </div>
      </div>
    </section>  
  );
}

