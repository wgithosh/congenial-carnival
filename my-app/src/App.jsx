 import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Categories from "./components/sections/Categories";
import Highlight from "./components/sections/Highlight";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Categories />
        <Highlight />
        <Products />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>


    </>
  );
}

export default App;