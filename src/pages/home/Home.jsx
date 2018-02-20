import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/home.scss';

import Header from './Header';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import ToursSection from './ToursSection';
import StoriesSection from './StoriesSection';
import BookingSection from './BookingSection';
import Footer from './Footer';

const Home = () => (
  <div>
    <Header />
    <AboutSection />
    <FeaturesSection />
    <ToursSection />
    <StoriesSection />
    <BookingSection />
    <Footer />
  </div>
);

export default CSSModules(Home, styles);
