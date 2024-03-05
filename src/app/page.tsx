"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-2">
        <Link className="hover:underline" href="/context">
          Context
        </Link>
        <Link className="hover:underline" href="/context-better">
          Context Better
        </Link>
        <Link className="hover:underline" href="/jotai">
          Jotai
        </Link>
        <Link className="hover:underline" href="/zustand">
          Zustand
        </Link>
        <Link className="hover:underline" href="/redux">
          Redux
        </Link>
      </div>
    </main>
  );
}
