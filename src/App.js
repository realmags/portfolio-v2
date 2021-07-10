// Components
import Layout from "./components/Layout";
import Banner from "./components/contents/Banner";
import About from "./components/contents/About";

function App() {
  return (
    <Layout>
      <Banner />
      <About />
      <div style={{ width: "100vw", height: "50vh" }}></div>
    </Layout>
  );
}

export default App;
