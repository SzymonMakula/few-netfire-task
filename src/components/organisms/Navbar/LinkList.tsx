import Button from "@/components/atoms/Button";

type Link = {
  name: string;
  href: string;
  active: boolean;
};

/**
 * If the links appear in places other than the Nav, I'd move them instead
 * to some global const file with a URL Map. Nothing indicates this though, so I keep them here.
 */

const LINKS: Link[] = [
  { name: "HOME", href: "http://localhost:3000", active: true },
  { name: "ABOUT", href: "http://localhost:3000", active: false }, // Once could implement a domain-logic to determine an "active" link
  { name: "PRODUCTS", href: "http://localhost:3000", active: false },
];
export default function LinkList() {
  return (
    <ul className="flex gap-4">
      {LINKS.map((link) => (
        <li key={link.name}>
          <Button
            sizing={"md"}
            variant={link.active ? "primary" : "secondary"}
            type="button"
          >
            {link.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
