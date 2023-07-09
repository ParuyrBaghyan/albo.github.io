import { useContext } from "react";
import Counts from "./Counts";
import { Context } from "./Context";
import { Link } from "react-router-dom";
export default function Cart() {
    const $ = useContext(Context);
    return (
        <div className='cart-container'>
            <div className="cart">
                <div className="cart-information" style={{ display: $.cart.length === 0 ? 'none' : 'grid' }}>
                    <span></span>
                    <h3>ԱՊՐԱՆՔ</h3>
                    <h3>ԳԻՆ</h3>
                    <h3>ՔԱՆԱԿ</h3>
                    <h3>ԵՆԹԱԳՈՒՄԱՐ</h3>
                    <span></span>
                </div>
                {$.cart.length !== 0 ? $.cart.map((prod) => {
                    return (
                        <div className="cart-item" key={prod.id}>
                            <div className="back" style={{ background: `url(${prod.product})` }}></div>
                            <h2>{prod.name}</h2>
                            <span>{prod.price}դր</span>
                            <Counts prod={prod} />
                            <span>{prod.quanity * prod.price}դր</span>
                            <button onClick={() => {
                                $.removeCart(prod.id);
                                $.setTotal($.total - prod.price * prod.quanity);
                                prod.point === 'p' ? prod.quanity = 1 : prod.quanity = 0.25
                            }}>x</button>
                        </div>
                    );
                }) : 'Զամբյուղը դատարկ է'}
                <div className="cart-promo" style={{ display: $.cart.length === 0 ? 'none' : 'flex' }}>
                    <button><Link to='/Խանութ'>ՇԱՐՈՒՆԱԿԵԼ ԳՆՈՒՄՆԵՐԸ</Link></button>
                    <div className="promo">
                        <input type="text" placeholder="Կտրոնի կոդ" />
                        <button>ԿԻՐԱՌԵԼ ԿՏՐՈՆԸ</button>
                    </div>
                </div>
                <div className="total" style={{ display: $.cart.length === 0 ? 'none' : 'flex' }}>
                    <div className="grand-total">
                        <h2>Զամբյուղի ընդհանուր քանակը <span>{$.cart.length}</span></h2>
                        <div className="price">
                            <span>Ենթագումար</span>
                            <h4>{$.total} դր</h4>
                        </div>
                        <span>Առաքում</span>
                        <span>Առաքման արժեքը: 400 դր</span>
                        <div className="total-field">
                            <h3>Ընդհանուր</h3>
                            <h3>{$.total + 400}դր</h3>
                        </div>
                        <button><Link to='/Վճարման Համակարգ'>ԱՆՑՆԵԼ ՎՃԱՐՄԱՆ</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}