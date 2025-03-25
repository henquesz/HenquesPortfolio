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
import { Banner } from "./Banner";

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

  const icons = [
    "devicon-amazonwebservices-plain-wordmark",
    "devicon-androidstudio-plain-wordmark",
    "devicon-angular-plain",
    "devicon-antdesign-plain-wordmark",
    "devicon-arduino-plain-wordmark",
    "devicon-bitbucket-original-wordmark",
    "devicon-bower-line-wordmark",
    "devicon-cloudflare-plain-wordmark",
    "devicon-confluence-plain-wordmark",
    "devicon-csharp-plain",
    "devicon-css3-plain-wordmark",
    "devicon-dart-plain-wordmark",
    "devicon-docker-plain-wordmark",
    "devicon-express-original-wordmark",
    "devicon-figma-plain",
    "devicon-flutter-plain",
    "devicon-firebase-plain-wordmark",
    "devicon-git-plain-wordmark",
    "devicon-gitlab-plain-wordmark",
    "devicon-gradle-original-wordmark",
    "devicon-grunt-line-wordmark",
    "devicon-html5-plain-wordmark",
    "devicon-java-plain-wordmark",
    "devicon-javascript-plain",
    "devicon-jenkins-plain",
    "devicon-jira-plain-wordmark",
    "devicon-jquery-plain-wordmark",
    "devicon-maven-plain",
    "devicon-mongodb-plain-wordmark",
    "devicon-mysql-plain-wordmark",
    "devicon-nextjs-original-wordmark",
    "devicon-nodejs-plain-wordmark",
    "devicon-oauth-plain",
    "devicon-photoshop-plain",
    "devicon-postgresql-plain-wordmark",
    "devicon-react-original-wordmark",
    "devicon-redhat-plain-wordmark",
    "devicon-redux-original",
    "devicon-redis-plain-wordmark",
    "devicon-sequelize-plain-wordmark",
    "devicon-spring-original-wordmark",
    "devicon-typescript-plain",
    "devicon-vitejs-plain",
    "devicon-vuejs-plain-wordmark",
    "devicon-xamarin-original-wordmark",
    "devicon-xcode-plain"
  ].map((icon) => ({ id: crypto.randomUUID(), icon }));

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
<div style={{ height: "80vh", position: "relative", overflow: "hidden", borderRadius: "5.2%" }}>
    {/* Aurora com z-index maior */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "25%", zIndex: 2 }}>
      <Aurora   colorStops={["#0b0b0d", "#0b0b0d", "#0b0b0d"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5} />
    </div>

    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }} className="div-font">
    <Dither
    waveColor={[0.7, 0.3, 0.5]}
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
    <div style={{ position: "absolute", top: 650, left: 50, width: "100%", height: "100%", zIndex: 1, textAlign: "left" }}>
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
    <div style={{ position: "absolute", top: 650, left: -50, width: "100%", height: "100%", zIndex: 1, textAlign: "right" }}>
    <DecryptedText
text="Making Shi..Good"
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
text="Since 2004"
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
      height: "30vh",
      position: "relative",
      overflow: "hidden",
      padding: "10px",
      display: "flex",
      flexDirection: "column", // Alinha os itens em coluna
      justifyContent: "center", // Centraliza verticalmente
      alignItems: "center", // Centraliza horizontalmente
      textAlign: "center", // Alinha o texto ao centro
    }}>
<div style={{
  width: "100%",
  height: "200px"
}}>

<div className="inner">
      <div className="wrapper">
        {[...Array(3)].map((_, index) => (
          <section key={index} style={{ "--speed": "80000ms" }}>
            {icons.map(({ id, icon }) => (
              <div className="icon" key={id}>
                <i className={icon} style={{fontSize: "80px", marginRight: "80px"}}></i>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>

</div>
  </div>
    </div>
  );
}
