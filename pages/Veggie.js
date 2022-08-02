import Image from "next/image";
import StyledImage from "../src/StyledComponents/StyledImageDiv";
import StyledSection from "../src/StyledComponents/StyledSection";
export default function Veggie() {
  return (
    <div>
      <h2>Unsere Veggie Produkte</h2>
      <hr />

      <StyledSection>
        <StyledImage>
          <Image
            src="/../public/pizza.jpg"
            alt="Veggie Pizza"
            layout="responsive"
            width={4}
            height={3}
          />
        </StyledImage>
        Veggie Pizza
      </StyledSection>
    </div>
  );
}
