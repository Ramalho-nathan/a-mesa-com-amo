import Header from "./components/Header";
import Hero from "./components/Hero"
import Special from "./components/Special"
import Products from "./components/Products"
import Place from "./components/Place"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Special />
        <Products />
        <Place />
      </main>
    </>
  );
}

export default App;
