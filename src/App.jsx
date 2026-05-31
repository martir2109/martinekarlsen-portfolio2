import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import CSSFrameworks from "./pages/CSSFramworks";
import JavaScriptFrameworks from "./pages/JavaScriptFrameworks";
import SemesterProject2 from "./pages/SemesterProject2";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cssframeworks" element={<CSSFrameworks />} />
          <Route
            path="javascriptframeworks"
            element={<JavaScriptFrameworks />}
          />
          <Route path="semesterproject2" element={<SemesterProject2 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
