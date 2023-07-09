import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";
export default function Categories() {
  const categoryList = [
    {
      id: Math.random(),
      photo:
        "https://sysrural.files.wordpress.com/2016/08/cropped-vida-e-saude-verduras.jpg",
      name: "Միրգ և Բանջարեղեն",
    },
    {
      id: Math.random(),
      photo: "https://friesensinc.com/wp-content/uploads/2020/09/dairy.jpg",
      name: "Կաթնամթերք",
    },
    {
      id: Math.random(),
      photo:
        "https://keto-mojo.com/wp-content/uploads/2019/08/Nutrition-Header-2.jpg",
      name: "Նպարեղեն",
    },
    {
      id: Math.random(),
      photo:
        "https://www.alimentazionefutura.it/wp-content/uploads/2015/07/intolleranze-lieviti.jpg",
      name: "Հացաբուլկեղեն",
    },
    {
      id: Math.random(),
      photo:
        "https://www.haarsalon-kopfueber.at/upload/imgproc/1974840_head.jpg",
      name: "Համեմունքներ",
    },
    {
      id: Math.random(),
      photo: "https://mig-ru.ru/wp-content/uploads/post-002.jpg",
      name: "Մսամթերք",
    },
    {
      id: Math.random(),
      photo:
        "https://i.pinimg.com/originals/84/19/71/841971a2e61231c8c1d7da3b2af8700d.jpg",
      name: "Ալկոհոլային խմիչքներ",
    },
    {
      id: Math.random(),
      photo:
        "https://images.squarespace-cdn.com/content/v1/53765ad1e4b095f55e7385e4/1513185494120-EB6J1P5UE0VDJB1NKB56/healthy+fruits+and+smoothie+recipe.jpeg",
      name: "Հյութեր",
    },
    {
      id: Math.random(),
      photo:
        "https://www.landliebe.de/wp-content/uploads/2020/09/Schichtkaesekuchen-2000x800-1.jpg",
      name: "Տորթեր",
    },
    {
      id: Math.random(),
      photo:
        "https://helloendless.com/wp-content/uploads/2017/10/engaging-the-five-senses-in-event-planning.jpg",
      name: "Քաղցրավենիք",
    },
    {
      id: Math.random(),
      photo:
        "https://www.restaurant-da-vinci-spo.de/wp-content/uploads/2018/07/fischfish-480830_1920.jpg",
      name: "Ծովամթերք",
    },
  ];
  const $ = useContext(Context);
  return (
    <div className="categories-container">
      <h2>Կատեգորիաներ</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={window.innerWidth <= 420 ? 1 : 3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {categoryList.map(item => {
          return <SwiperSlide key={Math.random()}>
            <Link to={`/${item.name}`}>
              <div
                className="categories-item"
                style={{ background: `url(${item.photo})` }}
                onClick={() => $.setActiveCat(item.name)}
              >
                <h2>{item.name}</h2>
              </div>
            </Link>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}
