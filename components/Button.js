import Link from "next/link";

const Button = ({ href, title, extraStyle }) => {
  return (
    <Link href={href} className={`btn btn-accent ${extraStyle}`}>
      {title}
    </Link>
  );
};

export default Button;
