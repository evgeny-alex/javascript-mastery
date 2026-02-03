"use client";

import { useRef, useState } from "react";

// daisyUI theme colors
const SELECTED_COLOR = "var(--color-primary)";

const faqList = [
  {
    question: "What’s included in each plan?",
    answer: (
      <div className="space-y-4 leading-relaxed">
        <div className="space-y-2">
          <p className="font-semibold">Basic — €399</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access to Modules 1–4 (JavaScript Fundamentals → OOP)</li>
            <li>Notion guide</li>
            <li>Exclusive Discord community</li>
            <li>7-day money-back guarantee</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Pro — €799</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access to all modules (1–7, including React)</li>
            <li>Notion guide + Discord community</li>
            <li>7-day money-back guarantee</li>
            <li>Interview-ready LeetCode roadmap</li>
            <li>Frontend-focused System Design structure</li>
            <li>Behavioral interview preparation</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Bootcamp — €1399 (10 students batch)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Everything in Pro</li>
            <li>3 full mock interviews (Coding, System Design, Behavioral)</li>
            <li>Applying strategy</li>
            <li>Community & async challenges</li>
            <li>Up-to-date FAANG-style interview tasks</li>
            <li>Large private community sharing real interview experience</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "Is this course beginner-friendly?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Yes. Modules 1–4 are designed for beginners and build a strong
          foundation with lots of practice and mini projects. If you already
          know the basics, you can move faster and focus on Modules 5–7 and
          interview prep.
        </p>
      </div>
    ),
  },
  {
    question: "How does the interview preparation work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Pro and Bootcamp include a structured roadmap for LeetCode (patterns +
          progression), a frontend-focused System Design structure, and a clear
          Behavioral framework (STAR + real examples).
        </p>
        <p className="opacity-90">
          Bootcamp adds 3 full mock interviews (Coding, System Design, and
          Behavioral) plus an applying strategy and async challenges.
        </p>
      </div>
    ),
  },
  {
    question: "Do you offer refunds?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Yes — there’s a 7-day money-back guarantee. If the course isn’t a fit,
          contact support with your purchase details within 7 days of purchase.
        </p>
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-3 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((v) => !v);
        }}
        aria-expanded={isOpen}
        style={isOpen ? { color: SELECTED_COLOR } : undefined}
      >
        <span className="flex-1">{item?.question}</span>

        <svg
          className="flex-shrink-0 w-4 h-4 ml-auto fill-current opacity-80"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen ? "rotate-180 hidden" : ""
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className="transition-all duration-300 ease-in-out overflow-hidden text-base-content/80"
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          {/* Reliable label: normal color + gradient underline */}
          <p className="inline-block font-semibold mb-3 text-primary">FAQ</p>

          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base-content/70 max-w-md">
            Everything you need to know about JavaScript Mastery, plans, and
            interview preparation.
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
