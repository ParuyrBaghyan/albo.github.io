import { useContext, useState, useRef } from "react"
import { Context } from "./Context"
import { Link } from "react-router-dom";
import { AutoTabProvider } from "react-auto-tab";
import Home from "../pages/Home";
export default function Order() {
    const $ = useContext(Context);
    const [valid, setValid] = useState({
        name: '',
        surname: '',
        number: '',
        cvv: '',
        date: '',
    });

    const nRef = useRef();
    const sRef = useRef();
    const NRef = useRef();
    const dRef = useRef();
    const cRef = useRef();

    let validName = /^[A-Z][a-z]+$/;
    let validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    let validDate = /^\d{2}\/\d{2}$/;
    let validCvv = /^\d{3}$/;

    const valueChange = (e, field) => {
        setValid({ ...valid, [field]: e.target.value });
    }

    const fullValid = () => {
        nRef.current.style.color = valid.name.match(validName) ? 'black' : 'red';
        sRef.current.style.color = valid.surname.match(validName) ? 'black' : 'red';
        NRef.current.style.color = valid.number.match(validNumber) ? 'black' : 'red';
        dRef.current.style.color = valid.date.match(validDate) ? 'black' : 'red';
        cRef.current.style.color = valid.cvv.match(validCvv) ? 'black' : 'red';
        if (valid.name.match(validName) && valid.surname.match(validName) && valid.number.match(validNumber) && valid.date.match(validDate) && valid.cvv.match(validCvv)) {
            if ($.cash >= $.total) {
                window.location.href = '/'
            }else{
                alert(`Անբավարար մնացորդ՝ ${$.total - $.cash}`)
            }
        }
    }

    return (
        <div className="order-container">
            <div className="order-container-picture">
                <h2>Պատվեր</h2>
            </div>
            <div className="sides">
                <div className="order-left-side">
                    <h2>Վճարման մանրամասները</h2>
                    <div className="order-left-form">
                        <AutoTabProvider>
                            <label>
                                <div className="name-field">
                                    <span ref={nRef}>Անուն *</span>
                                    <input type="text" value={valid.name} onChange={(e) => valueChange(e, 'name')} tabbable='false' />
                                </div>
                                <div className="name-field">
                                    <span ref={sRef}>Ազգանուն *</span>
                                    <input type="text" value={valid.surname} onChange={(e) => valueChange(e, 'surname')} tabbable='false' />
                                </div>
                            </label>
                            <span ref={NRef}>Քարտի համարը</span>
                            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" value={valid.number} onChange={(e) => valueChange(e, 'number')} tabbable='false' maxLength={19} />
                            <span ref={dRef}>Քարտի Գաղտնագիրը</span>
                            <input type="text" placeholder="123" value={valid.cvv} onChange={(e) => valueChange(e, 'cvv')} tabbable='false' maxLength={3} />
                            <span ref={cRef}>Քարտի տարեթիվը</span>
                            <input type="text" placeholder="12/03" value={valid.date} onChange={(e) => valueChange(e, 'date')} tabbable='false' maxLength={5} />
                            <button onClick={() => {
                                fullValid()
                            }}>Հաստատել առաքումը</button>
                        </AutoTabProvider>
                    </div>
                </div>
                <div className="order-right-side">
                    <h2>Ձեր պատվերը</h2>
                    <div className="order-side">
                        <div className="side">
                            <span>Ապրանք</span>
                            <span>Ենթագումար</span>
                        </div>
                        {$.cart.map(prod => {
                            return <div className="side-new">
                                <span>{prod.name} x {prod.quanity}</span>
                                <span>{prod.price} դրամ</span>
                            </div>
                        })}
                        <div className="side">
                            <span>Ենթագումար</span>
                            <span>{$.total} դրամ</span>
                        </div>
                        <div className="side">
                            <span>Առաքում</span>
                            <span>400 դրամ</span>
                        </div>
                        <div className="side">
                            <span>Ընդհանուր</span>
                            <span>{$.total + 400} դրամ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}