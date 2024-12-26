import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About/About'
import House from './pages/House/House'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/house/:id" element={<House />} />
			</Routes>
			<footer>
				<Footer />
			</footer>
		</BrowserRouter>
	)
}