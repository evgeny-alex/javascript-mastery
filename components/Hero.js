import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import ButtonGradient from "./ButtonGradient";
import GithubImage from "@/app/github-pull-request.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="lg:w-[50%] flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Review every PR in mins, not hours
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          The AI Code Reviewer that automatically comments on your GitHub Pull
          Requests with actionable feedback powered by OpenAI + n8n. Deploy in
          ~5 minutes and keep your code clean, consistent, and maintainable - on
          autopilot.
          <br />
          <strong>One-time payment - deploy for free forever.</strong>
        </p>
        <ButtonGradient
          className="btn btn-primary btn-wide"
          title="Deploy in 5 minutes"
        />

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-[50%] xl:w-[60%]">
        <Image
          src={GithubImage}
          alt="GitHub Pull Request"
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
