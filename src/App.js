import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/welcome"} />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
