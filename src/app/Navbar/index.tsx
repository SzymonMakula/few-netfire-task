import MainContentSection from "@/components/organisms/MainContentSection";
import LinkList from "@/app/Navbar/LinkList";
import PageLogo from "@/app/Navbar/PageLogo";
import SideControls from "@/app/Navbar/SideControls";

export default function Navbar() {
  return (
    <MainContentSection>
      <nav className="flex w-full justify-between py-6 relative">
        <LinkList />
        <PageLogo />
        <SideControls />
      </nav>
    </MainContentSection>
  );
}
