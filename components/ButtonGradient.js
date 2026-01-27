"use client";
import Link from "next/link";

const ButtonGradient = ({ title = "Gradient Button", onClick = () => {} }) => {
  return (
    <Link href="#pricing" className="btn btn-gradient animate-shimmer" onClick={onClick}>
      {title}
    </Link>
  );
};

export default ButtonGradient;
