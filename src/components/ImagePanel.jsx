import { useState } from "react";
import firstImg from "../assets/1.jpg";
import secondImg from "../assets/2.jpg";
import thirdImg from "../assets/3.jpg";
import forthImg from "../assets/4.jpg";
import fifthImg from "../assets/5.jpg";
import sevenImg from "../assets/7.jpg";
import eigthImg from "../assets/8.jpg";
import nineImg from "../assets/9.jpg";
import sixImg from "../assets/6.jpg";
const images = [firstImg, secondImg, thirdImg, forthImg, fifthImg, sixImg, sevenImg,eigthImg,nineImg];

function ImagePanel() {
  const [index, setIndex] = useState(0); // começa na primeira imagem

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div className="flex-col items-center justify-center">
     <h3 className='text-txt text-center font-ftxt text-xl mb-2'>Eu te amo muito minha princesa</h3>
     <h4 className='text-txt text-center font-ftxt text-lg mb-0 pb-0'>Que nosso amor</h4>
     <h4 className='text-txt text-center font-ftxt text-lg'>Se estenda para o infinito</h4>
     <p className='text-txt text-center font-ftxt mb-2'>👸🏻❤️</p>
     <h5 className='text-txt text-center font-ftxt '>apenas alguns momentos especiais:</h5>
      <img
        src={images[index]}
        alt={`Imagem ${index + 1}`}
        onClick={nextImage}
        className="w-[250px] h-[500px] object-cover rounded-2xl cursor-pointer"
      />
      <p className="text-txt text-center font-ftxt text-sm mt-2" >{index + 1} de 9</p>
    </div>
  );
}

export default ImagePanel;
