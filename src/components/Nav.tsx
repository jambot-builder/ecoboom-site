import Logo from "./Logo";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  return (
    <header className="z-40 border-b border-line/60 bg-bone">
      <div className="container-page flex h-24 items-center justify-between">
        <Logo variant="light" height={42} />

        <nav className="hidden md:block">
          <Link
            href="/quote"
            className="font-wordmark text-sm font-semibold tracking-widest text-ink hover:text-ecoGreenDeep"
          >
            QUOTE
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
