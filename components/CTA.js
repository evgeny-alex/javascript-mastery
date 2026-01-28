import Image from "next/image";
import Link from "next/link";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=3540&q=80"
        alt="JavaScript Mastery background"
        className="object-cover w-full"
        fill
        priority
      />

      {/* Overlay adapted to theme */}
      <div className="relative hero-overlay bg-base-300/80" />

      <div className="relative hero-content text-center text-base-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            <span className="block">Learn JavaScript.</span>
            <span className="block">Build real projects.</span>
            <span className="block">Get interview-ready.</span>
          </h2>

          <p className="text-lg text-base-content/80 mb-12 md:mb-16">
            A structured path from JavaScript fundamentals to React and real
            interview preparation. Practice-first approach with mini projects,
            clear roadmaps, and real-world skills.
          </p>

          <Link href="#pricing" className="btn btn-secondary btn-wide">
            Start JavaScript Mastery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
