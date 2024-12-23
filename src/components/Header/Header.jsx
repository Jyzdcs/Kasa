import "./Header.scss"
import { Link } from "react-router"

export default function Banner() {
	return (
		<header className="header">
			<span>
				<Link to="/">
					<img src="/src/assets/LOGO-Medium.png" alt="Logo of Kasa" />
				</Link>
			</span>
			<span className="nav-bar">
				<Link to="/Home">
					<span>Home</span>
				</Link>
				<Link to="About">
					<span>About</span>
				</Link>
			</span>
		</header>
	)
}