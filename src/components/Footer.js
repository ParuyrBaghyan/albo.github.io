import { Link } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer_left">
        <Link to="/">
          <MdOutlineFastfood /> ԱԼԲՈ <br />
          <span>ՍՈՒՊԵՐՄԱՐԿԵՏ </span>
        </Link>
        <div className="footer_contact">
          <BsTelephoneForward />
          <div className="footer_contact_info">
            <h3>ՈՒՆԵ՞Ք ՕԳՆՈՒԹՅԱՆ ԿԱՐԻՔ</h3>
            <a href="tel://+37498049709">+37498049709</a>
          </div>
        </div>
        <div className="social_icons">
          <RiFacebookFill />
          <FaInstagram />
        </div>
        <p>
          Հեղինակային իրավունք <span>©albo.am</span>. Բոլոր իրավունքները
          պաշտպանված են
        </p>
      </div>
      <div className="footer_right">
        <div className="footer-grid">
          <span> Խանութ</span>
          <span>Ինֆորմացիա</span>
          <span>Տեղեկագիր</span>
          <nav className="footer-nav">
            <ul>
              <Link to="/Մրգեր և բանջարեղեն">Մրգեր և բանջարեղեն</Link>
              <Link to="/Խմիչքներ">Խմիչքներ</Link>
              <Link to="/Կաթնամթերք">Կաթնամթերք</Link>
              <Link to="/Նպարեղեն">Նպարեղեն</Link>
            </ul>
          </nav>
          <nav className="footer-nav">
            <ul>
              <Link to="/Մեր մասին">Մեր մասին</Link>
              <Link to="/Վճարման Համակարգ">Առաքում և վճարում</Link>
              <Link to="/Գաղտնիության քաղաքականություն">
                Գաղտնիության քաղաքականություն
              </Link>
              <Link to="/Կապ">Կապ</Link>
            </ul>
          </nav>
          <div className="subscribe_input">
            <span >Դուք կարող եք հրաժարվել բաժանորդագրությունից ցանկացած պահի :</span>
            <div>
            <input
              type="email"
              placeholder="Մուտքագրեք ձեր էլ․ փոստի հասցեն այստեղ"
            />
            <button>Գրանցում</button>
            </div>
          </div>
        </div>
        <div className="footer-paymant">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}