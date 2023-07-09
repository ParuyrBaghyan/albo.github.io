import { list } from "./list";
import Counts from "./Counts";
import React from "react";
import { useContext } from "react";
import { Context } from "./Context";
import { FaHeart } from "react-icons/fa";
export default function Recomended() {
  const $ = useContext(Context);
  return (
    <React.Fragment>
      <h2 className="recomended-content">Առաջարկվող ապրանքներ</h2>
      <div className="products-container">
        {list.map((prod, i) => {
          if (i > 70 && i < 80) {
            return (
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
                  <button style={{color : $.cart.includes(prod) ? 'gold' : '#288435'}}  onClick={() => {
                    $.addCart(prod);
                  }}>ԱՎԵԼԱՑՆԵԼ</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
}
