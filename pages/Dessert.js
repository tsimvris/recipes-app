import Image from "next/image";
import StyledImage from "../src/StyledComponents/StyledImageDiv";
import StyledSection from "../src/StyledComponents/StyledSection";
export default function Dessert() {
  return (
    <div>
      <h2>Unsere Desserts</h2>
      <hr />
      <StyledSection>
        <StyledImage>
          <Image
            src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
            alt="Veggie Pizza"
            layout="responsive"
            width={4}
            height={3}
          />
        </StyledImage>
        Komischriechende Torte
      </StyledSection>
    </div>
  );
}
