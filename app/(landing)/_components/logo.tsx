import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          alt="TeamWiki Logo"
          width={30}
          height={30}
          className="block dark:hidden"
        />
        <Image
          src="/logo-dark.svg"
          alt="TeamWiki Logo"
          width={30}
          height={30}
          className="hidden dark:block"
        />
        <h1 className="text-black dark:text-white font-bold">TeamWiki</h1>
      </Link>
    </div>
  );
}

export { Logo };
