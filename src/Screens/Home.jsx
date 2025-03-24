import React from "react";
import "./styles.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import SplashCursor from "../Animations/SplashCursor/SplashCursor";
import GradientText from "../TextAnimations/GradientText/GradientText";
import BlurText from "../TextAnimations/BlurText/BlurText";
import Lanyard from "../Components/Lanyard/Lanyard";
import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import InfiniteMenu from "../Components/InfiniteMenu/InfiniteMenu";
import Aurora from "../Backgrounds/Aurora/Aurora";
import Dither from '../Backgrounds/Dither/Dither';
import Particles from '../Backgrounds/Particles/Particles';
import GooeyNav from '../Components/GooeyNav/GooeyNav';
import DecryptedText from '../TextAnimations/DecryptedText/DecryptedText';

export default function FullScreenDiv() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];

  const itemsHeader = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div>
      <header className="header-container">
      <GooeyNav
    items={itemsHeader}
    animationTime={600}
    pCount={15}
    minDistance={20}
    maxDistance={42}
    maxRotate={75}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    timeVariance={300}
  />
      </header>
<div style={{ height: "92vh", position: "relative", overflow: "hidden", borderRadius: "5.2%" }}>
    {/* Aurora com z-index maior */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "25%", zIndex: 2 }}>
      <Aurora   colorStops={["#000000", "#000000", "#000000"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5} />
    </div>

    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
    <Dither
    waveColor={[0.5, 0.3, 1]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.3}
    colorNum={4}
    waveAmplitude={0.3}
    waveFrequency={3}
    waveSpeed={0.05}
  />
    </div>

    {/* Lanyard abaixo do Aurora */}
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
    <Lanyard position={[5, 0, 20]} gravity={[0, -40, 0]} />
    </div>
    <div style={{ position: "absolute", top: 750, left: 50, width: "100%", height: "100%", zIndex: 1, textAlign: "left" }}>
    <DecryptedText
text="Vinicius Henques"
speed={100}
maxIterations={30}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
  animateOn="view"
  revealDirection="center"
/>
<br />  
<br />
<DecryptedText
text="Mid-Level Software Engineer"
speed={100}
maxIterations={40}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
  animateOn="view"
  revealDirection="center"
/>
    </div>
    <div style={{ position: "absolute", top: 750, left: -50, width: "100%", height: "100%", zIndex: 1, textAlign: "right" }}>
    <DecryptedText
text="Vinicius Henques"
speed={100}
maxIterations={30}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
  animateOn="view"
  revealDirection="center"
/>
<br />  
<br />
<DecryptedText
text="Mid-Level Software Engineer"
speed={100}
maxIterations={40}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
  animateOn="view"
  revealDirection="center"
/>
    </div>
  </div>
  <div
    style={{
      height: "50vh",
      position: "relative",
      overflow: "hidden",
      padding: "100px",
      display: "flex",
      flexDirection: "column", // Alinha os itens em coluna
      justifyContent: "center", // Centraliza verticalmente
      alignItems: "center", // Centraliza horizontalmente
      textAlign: "center", // Alinha o texto ao centro
    }}>

<br />
<br />
<div style={{
  width: "90%",
  height: "300px",
  backgroundColor: "red"
}}>
<InfiniteMenu items={items}/>
</div>
  </div>
    </div>
  );
}
