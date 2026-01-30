"use client";

import { useState, useEffect, useRef } from "react";

// Use daisyUI theme variables (OKLCH) instead of hardcoded hex
const BRAND_START = "var(--color-primary)";
const BRAND_END = "var(--color-secondary)";
const SELECTED_COLOR = "var(--color-primary)";

// 8 features = Modules 1–7 + Interview Preparation
const features = [
  {
    name: "Module 1: JS Fundamentals",
    description: (
      <ul className="space-y-2">
        {[
          "JavaScript intro, variables, operators, input & type conversion",
          "If / ternary / switch + strict equality",
          "Math object + random numbers",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
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
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
          <span>Mini project: Counter App</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
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
    name: "Module 2: Control Flow & Loops",
    description: (
      <ul className="space-y-2">
        {[
          "Logical operators + checked property",
          "While / for loops + real patterns",
          "Functions + variable scope",
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
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M4 10h12v2H4z" />
          </svg>
          <span>Mini projects: Guessing Game + Temperature Converter</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Module 3: Arrays, Strings & Functions",
    description: (
      <ul className="space-y-2">
        {[
          "String methods, slicing, and method chaining",
          "Arrays + spread / rest parameters",
          "Callbacks, function expressions, arrow functions",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0 opacity-80"
            >
              <path d="M10 3l7 7-7 7-7-7 7-7z" />
            </svg>
            {item}
          </li>
        ))}
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M10 3l7 7-7 7-7-7 7-7z" />
          </svg>
          <span>Mini projects: Dice Roller + Password Generator</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Module 4: Objects & OOP",
    description: (
      <ul className="space-y-2">
        {[
          "Objects, this, constructors, and classes",
          "Static, inheritance, super, getters & setters",
          "Destructuring + nested objects + arrays of objects",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0 opacity-80"
            >
              <path d="M6 3h8v2H6V3Zm-2 4h12v2H4V7Zm2 4h8v2H6v-2Zm-2 4h12v2H4v-2Z" />
            </svg>
            {item}
          </li>
        ))}
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M6 3h8v2H6V3Zm-2 4h12v2H4V7Zm2 4h8v2H6v-2Zm-2 4h12v2H4v-2Z" />
          </svg>
          <span>Outcome: “real-world” JS mindset</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    ),
  },
  {
    name: "Module 5: Advanced Data & Time",
    description: (
      <ul className="space-y-2">
        {[
          "forEach / map / filter / reduce in practice",
          "Sorting, shuffling, and working with dates",
          "Closures (the concept that unlocks JS)",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
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
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
          <span>Mini projects: Digital Clock + Stopwatch</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
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
    name: "Module 6: Async JavaScript",
    description: (
      <ul className="space-y-2">
        {[
          "ES6 modules, async code, and error handling",
          "Promises + async/await (no more callback hell)",
          "JSON + real async flows you’ll use at work",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0 opacity-80"
            >
              <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z" />
            </svg>
            {item}
          </li>
        ))}
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z" />
          </svg>
          <span>Mini project: Calculator</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Module 7: React Fundamentals",
    description: (
      <ul className="space-y-2">
        {[
          "JSX, components, props, and state with useState",
          "Events, conditional rendering, lists & keys",
          "Lifting state up + clean project structure (Vite/CRA)",
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
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M10 2l2 4 4 .5-3 3 .75 4L10 12l-3.75 2.5L7 9 4 6.5 8 6 10 2z" />
          </svg>
          <span>Projects: React Counter, Quiz, Weather, Mini Dashboard</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Interview Prep: LeetCode + SD + Behavioral",
    description: (
      <ul className="space-y-2">
        {[
          "LeetCode roadmap (FAANG-style patterns)",
          "System Design foundations (practical, not theory-only)",
          "Behavioral interview framework (STAR + real answers)",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0 opacity-80"
            >
              <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z" />
            </svg>
            {item}
          </li>
        ))}
        <li className="flex items-center gap-3 font-medium text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={BRAND_START}
            className="w-[18px] h-[18px] inline shrink-0"
          >
            <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z" />
          </svg>
          <span>Outcome: interview-ready & confident</span>
        </li>
      </ul>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>
    ),
  },
];

const FeatureLabel = ({ name, active }) => {
  const [head, ...rest] = name.split(":");
  const tail = rest.join(":").trim();

  return (
    <span
      className={`font-semibold text-sm leading-snug ${
        active ? "text-primary" : "text-base-content/50"
      }`}
      style={active ? { color: SELECTED_COLOR } : undefined}
    >
      <span className="block">{head.trim()}:</span>
      <span className="block opacity-90">{tail}</span>
    </span>
  );
};

const FeaturesListicle = () => {
  const featuresEndRef = useRef(null);
  const [featureSelected, setFeatureSelected] = useState(features[0].name);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureSelected((prev) => {
        const index = features.findIndex((f) => f.name === prev);
        const nextIndex = (index + 1) % features.length;
        return features[nextIndex].name;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const selected = features.find((f) => f.name === featureSelected);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <p
            className="font-medium text-sm font-mono mb-3"
            style={{
              background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            const course = &quot;JavaScript Mastery&quot;;
          </p>

          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            Learn JavaScript, build real projects, get interview-ready
          </h2>

          <div className="text-base-content/80 leading-relaxed mb-10 lg:text-lg">
            A structured path from core JavaScript fundamentals to React and
            interview preparation. Each module is packed with practice and mini
            projects so you learn by building — not by watching.
          </div>
        </div>
      </div>

      {/* Features grid: 4 columns x 2 rows (centered) */}
      <div className="max-md:px-8 max-w-4xl mx-auto mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-8 place-items-center">
          {features.map((feature) => {
            const active = featureSelected === feature.name;
            return (
              <span
                key={feature.name}
                onClick={() => {
                  if (!hasClicked) setHasClicked(true);
                  setFeatureSelected(feature.name);
                }}
                className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group text-center"
              >
                <span
                  className={`duration-100 ${
                    active
                      ? "text-primary"
                      : "text-base-content/30 group-hover:text-base-content/60"
                  }`}
                  style={active ? { color: SELECTED_COLOR } : undefined}
                >
                  {feature.svg}
                </span>

                <FeatureLabel name={feature.name} active={active} />
              </span>
            );
          })}
        </div>
      </div>

      <div className="bg-base-200">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
          <div
            className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
            key={featureSelected}
          >
            <h3 className="font-semibold text-base-content text-lg">
              {selected?.name}
            </h3>
            {selected?.description}
          </div>
        </div>
      </div>

      {/* End marker for optional auto-change stop */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
