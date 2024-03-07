import Link from "next/link";

interface LinkItem {
  title: string;
  path: string;
}

const links: LinkItem[] = [
  {
    title: "React",
    path: "/react",
  },
  {
    title: "Context",
    path: "/context",
  },
  {
    title: "Jotai",
    path: "/jotai",
  },
  {
    title: "Jotai Worse",
    path: "/jotai-worse",
  },
  {
    title: "Redux",
    path: "/redux",
  },
  {
    title: "Zustand",
    path: "/zustand",
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-2">
        {links.map((linkItem) => (
          <Link
            className="hover:underline"
            href={linkItem.path}
            key={linkItem.path}
          >
            {linkItem.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
