import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bone/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
