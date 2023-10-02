import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header";
import Travel from "./components/Travel";
import Container from "./components/Container";
import data from "./data";


const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      {data.map(item => <Travel key={item.id} item={item}/>)}
    </Container>
  );
};

export default App;
