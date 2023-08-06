import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-3xl font-bold">Homepage</h1>
      <p>This is the website landing page</p>
      <nav>
        <ul className="mt-96">
          <li className="bg-green-500 br rounded m-5 p-1 text-center">
            <Link href="/login">Login page</Link>
          </li>
          <li className="bg-blue-500 br rounded m-5 p-1 text-center">
            <Link href="/signup">Sign up page</Link>
          </li>
          <li className="bg-orange-500 br rounded m-5 p-1 text-center">
            <Link href="/profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
