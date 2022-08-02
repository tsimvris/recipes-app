import StyledHeader from "../StyledComponents/StyledHeader";
import StyleNav from "../StyledComponents/StyledNav";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <StyleNav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="Veggie">
          <a>Veggie</a>
        </Link>

        <Link href="Dessert">
          <a>Desserts</a>
        </Link>
      </StyleNav>
    </StyledHeader>
  );
}
