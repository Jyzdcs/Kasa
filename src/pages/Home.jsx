import Card from "../components/Card/Card"
import Banner from "../components/Banners/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./style.scss"

export default function Home() {
	return (
		<div className="main-container">
			<Header />
			<Banner />
			<Card />
			<footer>
				<Footer />	
			</footer>
		</div>
	)
}