import { Link } from 'react-router'
import "./NotFound.scss"

export default function NotFound() {
	return (
		<div className="not-found">
			<h1 className="num-404">404</h1>
			<h4>Oups! La page que vous demandez n'existe pas.</h4>
			<Link to="/">
				<p className='redirect'>Retourner sur la page d'accueil</p>
			</Link>
		</div>
	)
}