import Anchor from "@/components/atoms/Anchor";
import LogoIcon from "../../../assets/logo.svg";

export default function PageLogo() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Anchor href={"#"}>
        <LogoIcon />
      </Anchor>
    </div>
  );
}
