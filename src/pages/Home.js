import Categories from "../components/Categories"
import HomeSlider from "../components/HomeSlider"
import Newproducts from "../components/Newproducts"
import Recomended from "../components/Recomended"
export default function Home() {
    return (
        <div className="home-container">
            <HomeSlider />
            <Recomended />
            <Categories />
            <Newproducts />
        </div>
    )
}