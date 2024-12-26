import "./Banner.scss"

export default function Banner(props) {
	return (
		<div className="banner-container">
			<img src={props.url} alt="Banner image" className="banner" />
			{
				props.bool ? <h1 className="banner_text">Chez vous, partout et ailleurs</h1> : ""
			}
		</div>
	)
}