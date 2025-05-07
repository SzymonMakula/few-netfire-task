import Button from "@/components/atoms/Button";

type Link = {
  name: string;
  href: string;
  active: boolean;
};

const LINKS: Link[] = [
  { name: "HOME", href: "http://localhost:3000", active: true },
  { name: "ABOUT", href: "http://localhost:3000", active: false },
  { name: "PRODUCTS", href: "http://localhost:3000", active: false },
];
export default function LinkList() {
  return (
    <ul className="flex gap-4">
      {LINKS.map((link) => (
        <li key={link.name}>
          <Button variant={link.active ? "primary" : "secondary"} type="button">
            {link.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
