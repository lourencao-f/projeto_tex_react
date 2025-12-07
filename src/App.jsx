import { useEffect } from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Sobre from "./components/sobre/sobre";
import Footer from "./components/footer/footer";

export default function App() {
  useEffect(() => {
    // botão Saiba Mais → scroll suave
    const cta = document.getElementById("cta-btn");
    if (cta) {
      cta.onclick = () => {
        const target = document.getElementById("sobre");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
    }

    // reveal on scroll
    function revealOnScroll() {
      const elements = document.querySelectorAll(".reveal");
      const trigger = window.innerHeight * 0.85;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect().top;
        if (rect < trigger) {
          el.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Footer />
    </>
  );
}
