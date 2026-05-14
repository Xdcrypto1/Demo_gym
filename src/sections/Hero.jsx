import Button from "../ui/Buttons";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-slide-up stagger-1">
          A Simple Website 
          <span className="block text-brand">That Brings You More Members</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 animate-slide-up stagger-2">
          We help gym owners attract new members, fill up classes, and grow their income with a simple website that works 24/7.
        </p>

        <div className="mt-8 animate-slide-up stagger-3">
          <Button text="See Demo" />
        </div>
      </div>
    </section>  
  );
}

