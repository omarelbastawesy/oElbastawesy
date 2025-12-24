import Link from "next/link";

export default function Button({ children }) {
  return (
    <Link href="/contact" className="btn">
      {children}
    </Link>
  );
}
