// Components
import Layout from "./components/Layout";
// import Banner from "./components/contents/Banner";
import About from "./components/contents/About";
import Headline from "./components/contents/Headline";
import Projects from "./components/contents/Projects";
import Contact from "./components/contents/Contact";

// provider
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

function App() {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const handleCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || null;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <Layout>
      {/* <Banner /> */}
      <Headline />
      <About />
      <Projects handleCursor={handleCursor} />
      <Contact />
      {/* <div data-scroll-section style={{ width: "100vw", height: "50vh" }}></div> */}
    </Layout>
  );
}

export default App;
