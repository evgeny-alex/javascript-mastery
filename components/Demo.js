import React from "react";

const Demo = () => {
  return (
    <section className="w-full bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-8">
          See AI Code Reviewer in Action
        </h2>
        <div className="relative w-full overflow-x-auto">
          <video
            className="rounded-lg shadow-lg"
            controls
            autoPlay
            loop
            muted
            playsInline
            width="1280" // Set the real width of the video
            height="720" // Set the real height of the video
          >
            <source src="/demo-ai-code-reviewer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Demo;
