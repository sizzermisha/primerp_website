import ClueScroll from '../components/layouts/ClueScroll/ClueScroll';
import Footer from '../components/layouts/Footer/Footer';
import Header from '../components/layouts/Header/Header';
import HeroSection from '../components/layouts/HeroSection/HeroSection';
import PersonSection from '../components/layouts/PersonSection/PersonSection';
import ConstantProvider from '../components/providers/ConstantProvider';
import './App.scss';

export default function App() {
    return (
		<ConstantProvider>		
			<Header />

			<main>
				<HeroSection />
				<ClueScroll />
				<PersonSection />
			</main>

			<Footer />
		</ConstantProvider>)
}
