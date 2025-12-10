import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const IMAGES = [
    { id: 1, src: "https://picsum.photos/id/237/800/600", alt: "강아지" },
    { id: 2, src: "https://picsum.photos/id/1/800/600", alt: "노트북" },
    { id: 3, src: "https://picsum.photos/id/10/800/600", alt: "숲" },
    { id: 4, src: "https://picsum.photos/id/20/800/600", alt: "책상" },
  ];

  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);

  return (
    <>
      <div className="gallery-container">
        <img src={selectedImage.src} className="big-image" alt="" />
        <div className="thumb-container">
          {IMAGES.map((image) => (
            <button key={image.id} className={selectedImage.id === image.id ? "active" : ""} onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
