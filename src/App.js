import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./component/Blog/Blog";
import BlogDetail from "./component/blogViews/blogViews";
import Container from "./component/tool/Container";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/container" element={<Container />} />
      </Routes>
    </Router>
  );
};

export default App;
