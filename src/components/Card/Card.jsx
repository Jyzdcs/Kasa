import { data, Link } from "react-router";
import "./Card.scss"
import { useState, useEffect } from "react"

export default function Card() {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("data.json");
			const dataJson = await res.json();

			setCards(dataJson);
		};
		fetchData();
		setLoading(false);
	}, [])

	return (
		<div className="container">
			{loading ? <p>LOADING...</p> : 
				cards.map((item, index) => (
					<div key={index} className="card">
						<Link to={`/house/${item.id}`}>
							<img src={item.pictures[0]} alt={item.title} className="cover"/>
							<p className="card-title">{item.title}</p>
						</Link>
					</div>
				))
			}
		</div>
	)
}