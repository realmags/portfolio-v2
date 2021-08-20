import React, { useEffect } from "react";

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

import { firestore } from "./firebase/config";

function App() {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const handleCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || null;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const fetchProjects = async () => {
    let documents = [];
    const snapshot = await firestore.collection("projects").get();

    if (snapshot.empty) console.log("No documents found.");
    snapshot.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });

    dispatch({ type: "FETCH_PROJECTS", projects: documents });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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
