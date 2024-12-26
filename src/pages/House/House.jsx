import '../style.scss'
import './House.scss'
import { useParams } from 'react-router';
import { useState, useEffect,  } from "react"
import ImgSlider from '/src/components/ImgSlider/ImgSlider';
import HouseDescription from '../../components/HouseDescription/HouseDescription';
import Collapse from '/src/components/Collapse/Collapse';

export default function House() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [houseData, setHouseData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/data.json");
			const data = await res.json();

			const selectedHouse = data.find((obj) => obj.id === id);
			setHouseData(selectedHouse);
			setLoading(false);
		}
		fetchData();
	}, [])

	return (
		<>
			{ loading ? <p>LOADING</p> :
				<div className="main-container">
					<ImgSlider 
						houseData={houseData}
						loading={loading}
					/>
					<HouseDescription 
						houseData={houseData}
						loading={loading}
					/>
					<Collapse
						title_1="Description"
						description={houseData.description}
						title_2="Equipments"
						equipments={houseData.equipments}
					/>
				</div>
			}
		</>
	)
}