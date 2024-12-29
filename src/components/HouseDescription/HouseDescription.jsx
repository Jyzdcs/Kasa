import "./HouseDescription.scss"
import Collapse from "../Collapse/Collapse";

export default function HouseDescription(props) {
	let		i = 0;
	const	rate = Array(5).fill(0);
	
	if (!props.loading) {
		while (i < props.houseData.rating)
			rate[i++] = 1;
	}

	return (
		<div className='infos-of-house'>
			<div className='house-infos'>
				<h1 className='title'>{props.houseData.title}</h1>
				<h5>{props.houseData.location}</h5>
				<div className='tags'>
					{
						props.houseData.tags.map((tag, index) => (
							<span key={index}>{tag}</span>
						))
					}
				</div>
			</div>
			<div className="container-start_owner">
				<div className='owner-infos'>
					<h3>{props.houseData.host.name}</h3>
					<img className='owner-pic' src={props.houseData.host.picture} alt="owner pic"/>
				</div>
				<div className='start-container'>
					{
						rate.map((el, index) => (
							el === 1 ?
								<span class="fa fa-star checked" key={index}></span> :
								<span class="fa fa-star" key={index}></span>
						))
					}
				</div>
			</div>
		</div>
	)
}