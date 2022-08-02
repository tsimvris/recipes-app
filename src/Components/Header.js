import StyledHeader from "../StyledComponents/StyledHeader";
import StyleNav from "../StyledComponents/StyledNav";

export default function Header() {
  return (
    <StyledHeader>
      <StyleNav>
        <a>Home</a>
        <a>Veggie</a>
        <a>Desserts</a>
      </StyleNav>
    </StyledHeader>
  );
}
