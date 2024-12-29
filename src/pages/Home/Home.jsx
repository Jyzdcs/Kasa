import Card from "/src/components/Card/Card"
import Banner from "/src/components/Banners/Banner"
import "../style.scss"

export default function Home() {
	return (
		<div id="content">
			<Banner
				url="src/assets/home/image.png"
				bool="1"
			/>
			<Card />
		</div>
	)
}