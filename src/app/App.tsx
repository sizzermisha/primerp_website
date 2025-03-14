import AboutSection from '../components/layouts/AboutSection/AboutSection';
import ClueScroll from '../components/layouts/ClueScroll/ClueScroll';
import Footer from '../components/layouts/Footer/Footer';
import Header from '../components/layouts/Header/Header';
import HeroSection from '../components/layouts/HeroSection/HeroSection';
import PersonSection from '../components/layouts/PersonSection/PersonSection';
import WhatAwait from '../components/layouts/WhatAwait/WhatAwait';
import ConstantProvider from '../components/contexts/ConstantContext';
import './App.scss';
import SliderProvider from '../components/contexts/SliderContext';
import AboutInfo from '../components/layouts/AboutInfo/AboutInfo';
import SocialSection from '../components/layouts/SocialSection/SocialSection';
import AnswersSection from '../components/layouts/AnswersSection/AnswersSection';

export default function App() {
    return (
        <ConstantProvider>
            <Header />

            <main>
                <HeroSection />
                <ClueScroll />

                <AboutSection>
                    <PersonSection />
                    <WhatAwait />

                    <SliderProvider>
                        <AboutInfo />
                    </SliderProvider>
                </AboutSection>

								<SocialSection />
								<AnswersSection />
            </main>

            <Footer />
        </ConstantProvider>
    );
}
