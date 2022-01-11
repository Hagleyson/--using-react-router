import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/products";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </>
  );
}

export default App;
