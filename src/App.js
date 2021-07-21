// Components
import Layout from "./components/Layout";
// import Banner from "./components/contents/Banner";
import About from "./components/contents/About";
import Headline from "./components/contents/Headline";
import Projects from "./components/contents/Projects";
import Contact from "./components/contents/Contact";

function App() {
  return (
    <Layout>
      {/* <Banner /> */}
      <Headline />
      <About />
      <Projects />
      <Contact />
      <div data-scroll-section style={{ width: "100vw", height: "50vh" }}></div>
    </Layout>
  );
}

export default App;
