import "./App.module.css";
import Container from "./components/UI/Container";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
