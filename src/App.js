import Header from "./components/Laoyut/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <>
    <Cart />
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
