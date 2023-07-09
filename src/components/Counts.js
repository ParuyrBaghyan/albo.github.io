import { useContext } from "react";
import { useState } from "react"
import { Context } from "./Context";

export default function Counts({ prod }) {
    const [count, setCount] = useState(0);
    const $ = useContext(Context);
    return (
        <div className="counts">
            <button onClick={() => {
                if (prod.point === 'p') {
                    if (prod.quanity <= 1) {
                        setCount(prod.quanity = 1);
                    }
                    else {
                        setCount(prod.quanity -= 1);
                        $.setMoney(prod.quanity * prod.price);
                        if ($.cart.includes(prod)) {
                            $.setTotal($.total - prod.data)
                        }
                    }
                }
                if (prod.point !== 'p') {
                    if (prod.quanity <= 0.25) {
                        setCount(prod.quanity = 0.25);
                    }
                    else {
                        setCount(prod.quanity -= 0.25);
                        $.setMoney(prod.quanity * prod.price);
                        if ($.cart.includes(prod)) {
                            $.setTotal($.total - prod.data / 4);
                        }
                    }
                }
            }}>-</button>
            <span>{prod.quanity}</span>
            <button onClick={() => {
                if (prod.point === 'p') {
                    prod.quanity += 1;
                    $.setMoney(prod.quanity * prod.price)
                    if ($.cart.includes(prod)) {
                        $.setTotal($.total + prod.data);
                    }
                }
                else {
                    prod.quanity += 0.25;
                    $.setMoney(prod.quanity * prod.price);
                    if ($.cart.includes(prod)) {
                        $.setTotal($.total + prod.data / 4);
                    }
                }
            }
            }>+</button>
        </div>
    )
}
