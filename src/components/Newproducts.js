import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { list } from "./list";
import Counts from "./Counts";
import { useContext } from "react";
import { Context } from "./Context";
import { FaHeart } from 'react-icons/fa';
export default function Newproducts() {
    const $ = useContext(Context);
    return (
        <div className="last_added_container">
            <h2 className="last-added">Վերջին Ավելացվածները</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={window.innerWidth <= 420 ? 1 : 4}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {list.map((prod, i) => {
                    if (i < 12) {
                        return (
                            <SwiperSlide key={Math.random()}>
                                <div key={prod.id} className="products-item">
                                    <FaHeart className="active-heart" onClick={() => {
                                        if ($.favorite.includes(prod)) {
                                            $.removeFavorite(prod.id);
                                        }
                                        else {
                                            $.addFavorite(prod);
                                        }
                                    }} style={{ fill: $.favorite.includes(prod) ? 'gold' : '#288435' }} />
                                    <div
                                        className="products-picture"
                                        style={{ background: ` url(${prod.product})` }}
                                    ></div>
                                    <div className="products-content">
                                        <h2>{prod.name}</h2>
                                        <span>
                                            {prod.price} դրամ 1 {prod.point === "p" ? "հատ" : "կգ"}-ը
                                        </span>
                                        <Counts prod={prod} />
                                        <button style={{color : $.cart.includes(prod) ? 'gold' : '#288435'}} onClick={() => {
                                            $.addCart(prod);
                                        }}>ԱՎԵԼԱՑՆԵԼ</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </div>
    )
}