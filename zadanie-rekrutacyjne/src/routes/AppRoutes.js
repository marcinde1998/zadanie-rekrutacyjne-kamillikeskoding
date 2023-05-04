import { Route, Routes } from 'react-router-dom';
import Home from '../vievs/Home';
import Services from '../vievs/Services';
import Portfolio from '../vievs/Portfolio';
import Contact from '../vievs/Contact';


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;