import IconButton from "@/components/atoms/IconButton";
import CartIcon from "./cart.svg";
import PersonIcon from "./person.svg";
import SearchIcon from "./search.svg";

export default function SideControls() {
  return (
    <ul className="flex gap-5">
      <li>
        <IconButton title="Checkout">
          <CartIcon />
        </IconButton>
      </li>
      <li>
        <IconButton title="Profile">
          <PersonIcon />
        </IconButton>
      </li>
      <li>
        <IconButton title="Search">
          <SearchIcon />
        </IconButton>
      </li>
    </ul>
  );
}
