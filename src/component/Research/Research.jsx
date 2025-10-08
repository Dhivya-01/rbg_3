import { useEffect } from "react";
import Header from "./header";
import Home from "./Hero";
import Workshop from "./Workshop";
import Training from "./Training";

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const data = {
    title: "AI Research",
    content:
      "Opensource initiatives to explore AI towards narrow to general intelligence",
    button: "Explore More",
  };
  return (
    <div>
      <Header />
      <Home />
      <Training />
      <Workshop />
    </div>
  );
}
