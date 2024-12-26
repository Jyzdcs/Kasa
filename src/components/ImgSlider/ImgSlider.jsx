import "./ImgSlider.scss"
import { useState } from "react"

export default function ImgSlider(props) {
	const [imgIndex, setImgIndex] = useState(0);

	let 	img;
	if (!props.loading) {
		img = props.houseData.pictures;
	}

	return (
		<div className="img-slider">
			<img
				src='/src/assets/House/Left-arrow.png'
				alt='Left arrow'
				className='left-arrow'
				onClick={() => {
					if (imgIndex === 0) {
						setImgIndex(4);
					}
					else {
						setImgIndex(imgIndex - 1);
					}
				}}
			/>
			<img 
				src={img[imgIndex]} 
				alt={props.houseData.title} 
				className='house-img'
			/>
			<img
				src='/src/assets/House/Right-arrow.png'
				alt="right-arrow"
				className='right-arrow'
				onClick={() => {
					if (imgIndex === img.length - 1) {
						setImgIndex(0);
					}
					else {
						setImgIndex(imgIndex + 1);
					}
				}}
			/>
			<p className='img-index'>{imgIndex + 1}/{img.length}</p>
		</div>
	)
}