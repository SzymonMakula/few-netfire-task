import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import LinkList from "@/components/organisms/Navbar/LinkList";
import PageLogo from "@/components/organisms/Navbar/PageLogo";
import SideControls from "@/components/organisms/Navbar/SideControls";

/**
 * The centered-logo would not work for mobile viewports with the current setup. There's not enough space, and so I'd expect
 * links to wrap to a hamburger menu, anyhow.
 */
export default function Navbar() {
  return (
    <MaxPageSizeWrapper>
      <nav className="flex w-full justify-between py-6 relative">
        <LinkList />
        <PageLogo />
        <SideControls />
      </nav>
    </MaxPageSizeWrapper>
  );
}
