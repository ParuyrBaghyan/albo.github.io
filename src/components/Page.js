import React, { useRef, useState } from "react";
import SweetPagination from "sweetpagination";
import { list } from "./list";
import Counts from "./Counts";
import { useContext } from "react";
import { Context } from "./Context";
import { FaHeart } from "react-icons/fa";
export default function Page() {
    const categoryList = [
        {
            id: Math.random(),
            name: "Միրգ և Բանջարեղեն",
        },
        {
            id: Math.random(),
            name: "Կաթնամթերք",
        },
        {
            id: Math.random(),
            name: "Նպարեղեն",
        },
        {
            id: Math.random(),
            name: "Հացաբուլկեղեն",
        },
        {
            id: Math.random(),
            name: "Համեմունքներ",
        },
        {
            id: Math.random(),
            name: "Մսամթերք",
        },
        {
            id: Math.random(),
            name: "Ալկոհոլային խմիչքներ",
        },
        {
            id: Math.random(),
            name: "Հյութեր",
        },
        {
            id: Math.random(),
            name: "Տորթեր",
        },
        {
            id: Math.random(),
            name: "Քաղցրավենիք",
        },
        {
            id: Math.random(),
            name: "Ծովամթերք",
        },
    ];
    const [currentPageData, setCurrentPageData] = useState([]);
    const filtered = [];
    list.map(item => filtered.push(item.price));
    let max = Math.max(...filtered);
    let min = Math.min(...filtered);
    const [minPoint, setMinPoint] = useState(min);
    const [filterProd, setFilterProd] = useState(currentPageData);
    const [show, setShow] = useState(true);
    const $ = useContext(Context);

    const filterElements = x => {
        let filtered = list.filter(item => x === item.category && minPoint <= item.price)
        setFilterProd(filtered);
    }

    return (
        <div>
            <div className="container-picture">
                <h2>ԽԱՆՈՒԹ</h2>
            </div>
            <h2 className="products-filter">Ապրանքների ֆիլտրացում</h2>
            <div className="cont">
                <div className="cont-left">
                    {categoryList.map(list => {
                        return <label className="list-name" key={list.id}>
                            <span onClick={() => {
                                filterElements(list.name)
                                setShow(false);
                                $.setActiveCat(list.name)
                            }
                            }>{list.name}</span>
                        </label>
                    })}
                    <input type="range" value={minPoint} min={min} max={max} onChange={(e) => {
                        setMinPoint(e.target.value);
                        filterElements($.activecat);
                    }} />
                    <div className="maxormin">
                        <span>{minPoint}դր</span>
                        <span>{max}դր</span>
                    </div>
                </div>
                <div className="cont-right">
                    {!show ? currentPageData.map((prod) => {
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
                                    style={{ background: `url(${prod.product})` }}
                                ></div>
                                <div className="products-content">
                                    <h2>{prod.name}</h2>
                                    <span>
                                        {prod.price} դրամ 1 {prod.point === "p" ? "հատ" : "կգ"}-ը
                                    </span>
                                    <Counts prod={prod} />
                                    <button style={{color : $.cart.includes(prod) ? 'gold' : '#288435'}} onClick={() => {
                                        $.addCart(prod)
                                    }}>ԱՎԵԼԱՑՆԵԼ</button>
                                </div>
                            </div>
                        );
                    }) : currentPageData.map((prod) => {
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
                                    style={{ background: `url(${prod.product})` }}
                                ></div>
                                <div className="products-content">
                                    <h2>{prod.name}</h2>
                                    <span>
                                        {prod.price} դրամ 1 {prod.point === "p" ? "հատ" : "կգ"}-ը
                                    </span>
                                    <Counts prod={prod} />
                                    <button style={{color : $.cart.includes(prod) ? 'gold' : '#288435'}} onClick={() => {
                                        $.addCart(prod)
                                    }}>ԱՎԵԼԱՑՆԵԼ</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <SweetPagination
                currentPageData={setCurrentPageData}
                dataPerPage={16}
                getData={show ? list : filterProd}
                navigation={true}
            />
        </div>
    );
}