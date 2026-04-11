import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescription = ["Fundamental", "Core", "Crucial"];

let descriptionLength = reactDescription.length;

const randomValue = Math.floor(Math.random() * descriptionLength);

export default function Header() {
  const description = reactDescription[randomValue];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
