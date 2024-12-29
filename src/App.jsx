import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '/src/pages/Home/Home'
import About from '/src/pages/About/About'
import House from '/src/pages/House/House'
import Header from '/src/components/Header/Header'
import Footer from '/src/components/Footer/Footer'
import NotFound from '/src/components/NotFound/NotFound'

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/house/:id" element={<House />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<footer>
				<Footer />
			</footer>
		</BrowserRouter>
	)
}