import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="header">
        <img
          className="purple-blur"
          src="public/images/purple-blur.png"
          alt=""
        />
        {/* <img
          className="purple-blur"
          src="public/images/purple-blur.png"
          alt=""
        /> */}
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
