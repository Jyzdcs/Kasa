import Banner from "/src/components/Banners/Banner"
import Collapse from "../../components/Collapse/Collapse"
import "/src/pages/About/About.scss"

export default function About() {
	return (
		<div>
			<Banner
				url="src/assets/About/Banner.png"
			/>
			<div className="collapse-container">
				<Collapse
					title_1="Fiabilite"
					description="Tous les logements proposés sur notre site ont été visités et validés par nos équipes. Nous garantissons des logements conformes aux photos et aux critères de sélection mentionnés sur le site."
				/>
				<Collapse
					title_1="Respect"
					description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				/>
				<Collapse
					title_1="Service"
					description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
				/>
				<Collapse
					title_1="Securite"
					description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
				/>
			</div>
		</div>
	)
}