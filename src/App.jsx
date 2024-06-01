import "./App.css";
import {
  Contact,
  Navbar,
  Offers,
  Productdetails,
  Products,
  Review,
  Services,
  Signup,
} from "./components/index";
function App() {
  return (
    <main className="relative">
      <div className="container  mx-auto  ">
        <Navbar />
        <Products />
        <Productdetails />
        <Services />
        <Offers />
      </div>
      <Review />
      <Signup />
      <Contact />
    </main>
  );
}

export default App;
