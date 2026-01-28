import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import Button from "./Button";
import HeroImage from "@/app/hero-image.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="lg:w-[50%] flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Master JS and ace technical interviews
        </h1>

        <p className="text-lg opacity-80 leading-relaxed">
          A hands-on JavaScript course that takes you from core fundamentals to
          real-world applications, React, and interview readiness. Learn modern
          JS, async patterns, clean code, and problem-solving skills used in
          real interviews.
          <br />
          <strong>One-time payment — lifetime access to all updates.</strong>
        </p>
        <Button
          extraStyle="btn-accent btn-wide"
          title="Get Started"
          href="/dashboard"
        />

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-[50%] xl:w-[60%]">
        <Image
          src={HeroImage}
          alt="JavaScript Mastery Hero Image"
          className="w-full"
          priority={true}
          width={800} // Increased width
          height={800} // Increased height
        />
      </div>
    </section>
  );
};

export default Hero;
