import Link from "next/link";

const Button = ({ href, title, extraStyle }) => {
  return (
    <Link href={href} className={`btn ${extraStyle}`}>
      {title}
    </Link>
  );
};

export default Button;
