import { Link } from "react-router-dom";
import { Container } from "./AnotherPage.styled";

const AnotherPage = () => {
  return (
    <Container>
      Another Page
      <Link to={"/"}>Link to Home</Link>
    </Container>
  );
};

export default AnotherPage;
