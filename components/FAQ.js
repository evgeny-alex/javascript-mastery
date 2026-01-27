"use client";

import { useRef, useState } from "react";

// добавляем брендовые цвета
const BRAND_START = "#eb538a";
const BRAND_END = "#ff930f";
const SELECTED_COLOR = "#c43b78";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What is included in each plan?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p className="font-semibold">Workflow — $29</p>
        <ul className="list-disc pl-5">
          <li>n8n workflow to run automated PR reviews</li>
          <li>OpenAI-powered contextual review comments</li>
          <li>GitHub webhook integration</li>
        </ul>
        <p className="font-semibold mt-2">Pro — $49</p>
        <ul className="list-disc pl-5">
          <li>Includes all Workflow features</li>
          <li>Complete step-by-step deployment & configuration guide</li>
          <li>Free Render hosting setup for an n8n instance (initial setup)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does Autonomous Mode work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Autonomous Mode runs the review workflow automatically on PR events
          (opened/updated). n8n receives the webhook, generates prompts for
          OpenAI and posts review comments to the PR. You retain control via
          credentials, sensitivity settings and custom rules.
        </p>
      </div>
    ),
  },
  {
    question: "Is hosting really free with Pro?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          The Pro plan includes a free initial hosting setup on Render for an
          n8n instance (deployment + basic uptime). We will also show you how to
          configure the instance to keep the basic workflow running continuously
          (avoid automatic sleep). Note that any long-term or over-usage costs
          from the hosting provider may still apply.
        </p>
      </div>
    ),
  },
  {
    question: "Do you offer refunds?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Yes - we recommend offering a short refund window to lower buyer
          friction. Typical policy: 7 days from purchase. To request a refund,
          contact support (email shown in site footer or in your config) with
          your purchase details.
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
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        style={isOpen ? { color: SELECTED_COLOR } : undefined}
      >
        <span className="flex-1">{item?.question}</span>
        <svg
          className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
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
        className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
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
          <p
            className="inline-block font-semibold mb-4"
            style={{
              background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
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
