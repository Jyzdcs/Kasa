import { useState } from "react";
import "./Collapse.scss"

export default function Collapse(props) {
	const [collapseEquiments, setCollapseEquiments] = useState(false);
	const [collapseDescription, setCollapseDescription] = useState(false);

	return (
		<div className="container-of-collapse">
			<div className="collapse">
				<div className="title-and-btn">
					<p className="description-title">{props.title_1}</p>
					<img onClick={() => setCollapseDescription(!collapseDescription)} className={`toggle-btn ${collapseDescription ? "rotate" : "unrotate"}`} src="/src/assets/House/Up-arrow.png"/>
				</div>
				<div className={`transit ${collapseDescription ? 'open' : 'close'}`}>
					<div className={"wrapper"}>
						<p className="description">{props.description}</p>
					</div>
				</div>
			</div>
			{ props.equipments ?
				<div className="collapse">
					<div className="title-and-btn">
						<p className="description-title">{props.title_2}</p>
						<img onClick={() => setCollapseEquiments(!collapseEquiments)} className={`toggle-btn ${collapseEquiments ? "rotate" : "unrotate"}`} src="/src/assets/House/Up-arrow.png"/>
					</div>
					<div className={`transit ${collapseEquiments ? 'open' : 'close'}`}>
						<div className={`wrapper`}>
							{
									props.equipments.map((el, index) => (
										<ul key={index}>{el}</ul>
									))
							}
						</div>
					</div>
				</div>
				:
				<></>
			}
		</div>
	)
}