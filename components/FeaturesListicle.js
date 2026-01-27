"use client";

import { useState, useEffect, useRef } from "react";

// добавляем цвета бренда (градиент) и тёмный вариант для выделения
const BRAND_START = "#eb538a";
const BRAND_END = "#ff930f";
// чуть темнее для выделенной (selected) иконки/текста
const SELECTED_COLOR = "#c43b78";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature
const features = [
  {
    name: "Automated PR Reviews",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Automatically generate contextual review comments for PR diffs",
            "Detect bugs, anti-patterns and missing tests",
            "Summarize high-level concerns and risk areas",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              {/* icon placeholder — replace later */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={BRAND_START}
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
            </svg>
            <span style={{ color: BRAND_START }}>
              Time saved: 30+ minutes per PR
            </span>
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Actionable Suggestions",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Provide fix examples and code snippets when issues are found",
            "Explain why a change is needed and link to best practices",
            "Prioritize fixes by severity and impact",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path d="M4 10h12v2H4z" />
              </svg>
              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={BRAND_START}
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path d="M4 10h12v2H4z" />
            </svg>
            <span style={{ color: BRAND_START }}>
              Time saved: faster PR turnaround
            </span>
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Seamless GitHub Integration",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Post review comments directly to PRs via GitHub webhooks",
            "Work with private repos using tokens and credentials",
            "Compatible with existing CI workflows and checks",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path d="M10 2l2 4 4 .5-3 3 .75 4L10 12l-3.75 2.5L7 9 4 6.5 8 6 10 2z" />
              </svg>
              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={BRAND_START}
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path d="M10 2l2 4 4 .5-3 3 .75 4L10 12l-3.75 2.5L7 9 4 6.5 8 6 10 2z" />
            </svg>
            <span style={{ color: BRAND_START }}>
              Time saved: fewer manual review cycles
            </span>
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Custom Rules & Policies",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Define project-specific guidelines and enforce consistency",
            "Add custom templates for common feedback and PR checks",
            "Tune sensitivity to reduce false positives",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path d="M3 4h14v2H3V4zm0 5h10v2H3V9zM3 14h6v2H3v-2z" />
              </svg>
              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={BRAND_START}
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path d="M3 4h14v2H3V4zm0 5h10v2H3V9zM3 14h6v2H3v-2z" />
            </svg>
            <span style={{ color: BRAND_START }}>
              Time saved: consistent team standards
            </span>
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
          clipRule="evenodd"
        />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>
    ),
  },
  {
    name: "Autonomous Mode",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Run reviews automatically on PR events via n8n workflows",
            "Publish recommendations without manual triggers",
            "Monitor and iterate on agent performance",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path d="M10 2a8 8 0 11-0 16 8 8 0 010-16z" />
              </svg>
              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={BRAND_START}
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path d="M10 2a8 8 0 11-0 16 8 8 0 010-16z" />
            </svg>
            <span style={{ color: BRAND_START }}>
              Time saved: fully hands-off reviews
            </span>
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const FeaturesListicle = () => {
  const featuresEndRef = useRef(null);
  const [featureSelected, setFeatureSelected] = useState(features[0].name);
  const [hasClicked, setHasClicked] = useState(false);

  // (Optional) Autoscroll the list of features so user know it's interactive.
  // Stop scrolling when user scroll after the featuresEndRef element (end of section)
  // emove useEffect is not needed.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <p
            className="text-accent font-medium text-sm font-mono mb-3"
            style={{
              background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            const agent = &quot;AI Code Reviewer&quot;;
          </p>
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            Automate PR reviews with AI - faster feedback, safer merges
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            Review pull requests automatically using n8n workflows and OpenAI.
            Receive contextual comments, suggested fixes and rule-based checks
            directly on GitHub so your team ships higher-quality code with less
            manual effort.
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 ${
                  featureSelected === feature.name
                    ? ""
                    : "text-base-content/30 group-hover:text-base-content/50"
                }`}
                style={
                  featureSelected === feature.name
                    ? { color: SELECTED_COLOR }
                    : undefined
                }
              >
                {feature.svg}
              </span>
              <span
                className={`font-semibold text-sm ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/50"
                }`}
                style={
                  featureSelected === feature.name
                    ? { color: SELECTED_COLOR }
                    : undefined
                }
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div className="bg-base-200">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)["name"]}
              </h3>

              {features.find((f) => f.name === featureSelected)["description"]}
            </div>
          </div>
        </div>
      </div>
      {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
