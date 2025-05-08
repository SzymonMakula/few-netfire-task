import IconButton from "@/components/atoms/IconButton";
import CartIcon from "./cart.svg";
import PersonIcon from "./person.svg";
import SearchIcon from "./search.svg";

/**
 * Depending on the buttons API complexity, one could move them to an array (so that
 * components are rendered based on some constant object.)
 */
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
