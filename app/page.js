import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Go to Meals</Link>
      </p>
      <p>
        <Link href="/community">Go to Community</Link>
      </p>
      <p>
        <Link href="/meals/share">Go to Shared Meals</Link>
      </p>
    </main>
  );
}
