import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import { useRouter } from "next/navigation";

const AboutPage: React.FC = () => {
  return (
    <div className="page-layout">
      {/* Header */}
      <Header />

      {/* Conteúdo */}
      <main className="main-layout">
        <AboutContent/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;