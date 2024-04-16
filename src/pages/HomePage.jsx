import React from "react";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import Footer from "../layout/Footer";
import EditorsPick from "../layout/EditorsPick";
import BestSeller from "../layout/BestSeller";

function HomePage() {
  return (
    <div>
      <Header />
      <PageContent />
      <EditorsPick />
      <BestSeller />
    </div>
  );
}

export default HomePage;
