import { useEffect, useState, useRef } from "react";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
export default function HomeSlider() {
  const [active, setActive] = useState(0);
  const textList = ['Միրգ Բանջարեղեն', 'Արևադարձային մրգեր', 'Կանաչեղեն', 'Չրեր', 'Ընդեղեն', 'Համեմունքներ'];
  const textPictures = ['pictures/slider/1.jpg', 'pictures/slider/2.jpg', 'pictures/slider/3.jpg', 'pictures/slider/4.jpg', 'pictures/slider/5.jpg', 'pictures/slider/6.jpg'];
  
  const slideNameRef = useRef(null);
  const slideButtonRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[active].checked = true;
  }, [active]);

  useEffect(() => {
    const slideName = slideNameRef.current;
    const slideButton = slideButtonRef.current;
    slideName.style = 'transform : translateY(-250px); opacity : 0';
    slideButton.style = 'transform : translateY(-250px); opacity : 0'
    setTimeout(() => {
      slideName.style = 'transform : translateY(0); opacity : 1'
      slideButton.style ='transform : translateY(0); opacity : 1'
    }, 300);
  }, [active]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      active > textList.length - 2 ? setActive(0) : setActive(active + 1);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className="home-slider" style={{ background: `url(${textPictures[active]})`}}>
      <h2 ref={slideNameRef}><Typewriter options={{
        strings : [textList[active]],
        autoStart : true,
        loop : true,
        deleteSpeed : 5000
      }}></Typewriter></h2>
      <Link to='/Խանութ' ref={slideButtonRef}><button>Տեսնել ավելին</button></Link>
      <div className="dots">
        {textList.map((text, i) => (
          <input
            type="radio"
            name="slider"
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}