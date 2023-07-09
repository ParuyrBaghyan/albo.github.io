import { MdOutlineFastfood } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { SlPhone } from 'react-icons/sl';
import { TfiBag } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from './Context';
export default function Header() {
    const $ = useContext(Context);
    return (
        <header>
            <div className="header-bar" id='header'>
                <p>Բարի գալուստ ԱԼԲՈ սուպերմարկետի պաշտոնական կայք</p>
                <Link to='/Մուտք / Գրանցում'>Մուտք / Գրանցում</Link>
            </div>
            <nav>
                <Link to="/"><MdOutlineFastfood />ԱԼԲՈ</Link>
                <ul>
                    <NavLink to='/'>Գլխավոր</NavLink>
                    <NavLink to='/Խանութ'>Խանութ</NavLink>
                    <NavLink to='/Մեր մասին'>Մեր մասին</NavLink>
                    <NavLink to='/Կապ'>Կապ</NavLink>
                </ul>
                <label>
                    <input type="text" placeholder='Որոնել' />
                    <button><FiSearch /></button>
                </label>
                <div className="information">
                    <div className="phone">
                        <SlPhone />
                        <span>+374 77 750 750</span>
                    </div>
                    <Link to='/Զամբյուղ' className='cart-info'>
                        <TfiBag />
                        <span>Զամբյուղ</span>
                    </Link>
                    <Link to='/Նախընտրած ապրանքներ'><FaHeart className='heart' style={{ fill : $.favorite.length === 0 ? '#288435' : 'gold'}}/></Link>
                </div>
            </nav>
        </header>
    )
}
