import { useRef } from "react";
import DisplaySection from "./components/displaySection";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/navbar";
import SoundSection from "./components/soundSection";
import Webgiviewer from "./components/webgiviewer";
import Loader from "./components/loader";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>

      <Webgiviewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
