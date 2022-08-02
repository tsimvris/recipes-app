import StyledHeader from "../StyledComponents/StyledHeader";
import StyleNav from "../StyledComponents/StyledNav";

export default function Header() {
  return (
    <StyledHeader>
      <StyleNav>
        <a href="./">Home</a>
        <a href="Veggie">Veggie</a>
        <a href="Dessert">Desserts</a>
      </StyleNav>
    </StyledHeader>
  );
}
