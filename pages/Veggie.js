import Image from "next/image";
export default function Veggie() {
  return (
    <div>
      <h2>Unsere Veggie Produkte</h2>
      <hr />
      <p>
        <ul>
          <li>
            <Image
              src="/../public/pizza.jpg"
              alt="Veggie Pizza"
              layout="responsive"
              width={4}
              height={3}
            />
            Veggie Pizza
          </li>

          <li>Veggie Patties</li>
          <li>Veggie Wurst aus echte Schwein</li>
        </ul>
      </p>
    </div>
  );
}
