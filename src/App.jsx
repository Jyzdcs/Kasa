import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import House from './pages/House'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/house/:id" element={<House />} />
			</Routes>
		</BrowserRouter>
	)
}