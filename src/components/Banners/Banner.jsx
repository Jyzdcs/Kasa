import "./Banner.scss"

export default function Banner() {
	return (
		<div className="banner-container">
			<img src="src/assets/home/image.png" alt="Banner image" className="banner" />
			<h1 className="banner_text">Chez vous, partout et ailleurs</h1>
		</div>
	)
}