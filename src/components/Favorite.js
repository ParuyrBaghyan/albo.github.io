import { useContext } from "react";
import { Context } from "./Context";

import { FaHeart } from 'react-icons/fa';
import Counts from "./Counts";

export default function Favorite() {
    const $ = useContext(Context);
    return (
        <div className="favorite-container">
            <h2>Նախընտրած ապրանքների ցանկ</h2>
            <div className="favorite-content">
                {$.favorite.map(prod => {
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
                                <button style={{color : $.cart.includes(prod) ? 'gold' : '#288435'}} onClick={() => {
                                    $.addCart(prod);
                                }}>ԱՎԵԼԱՑՆԵԼ</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
