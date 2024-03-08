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
    title: "Jotai Rookie",
    path: "/jotai-rookie",
  },
  {
    title: "Jotai",
    path: "/jotai",
  },
  {
    title: "Jotai Persist",
    path: "/jotai-persist",
  },
  {
    title: "Redux",
    path: "/redux",
  },
  {
    title: "Zustand",
    path: "/zustand",
  },
  {
    title: "React Query",
    path: "/react-query",
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
