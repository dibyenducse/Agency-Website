import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import PortfolioDetailsPageGrowth from './components/Pages/PortfolioDetailsPageGrowth';
import PortfolioDetailsPageGraphic from './components/Pages/PortfolioDetailsPageGraphic';
import PortfolioDetailsPageVideo from './components/Pages/PortfolioDetailsPageVideo';
import PortfolioDetailsPageAd from './components/Pages/PortfolioDetailsPageAd';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import ContentService from './components/Pages/ContentService';
import GrowthService from './components/Pages/GrowthService';
import AdsService from './components/Pages/AdsService';
import ManagementService from './components/Pages/ManagementService';
import PortfolioDetailsPageOne from './components/Pages/PortfolioDetailsPageOne';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MarketingAgencyHome />} />
                    <Route
                        path="photography-agency"
                        element={<PhotographyAgencyHome />}
                    />
                    <Route
                        path="digital-agency"
                        element={<DigitalAgencyHome />}
                    />
                    <Route
                        path="marketing-agency"
                        element={<MarketingAgencyHome />}
                    />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="service" element={<ServicesPage />} />
                    <Route
                        path="service/:serviceDetailsId"
                        element={<ServiceDetailsPage />}
                    />
                    <Route
                        path="service/Content-Service"
                        element={<ContentService />}
                    />
                    <Route
                        path="service/Growth-Service"
                        element={<GrowthService />}
                    />
                    <Route
                        path="service/Ads-Service"
                        element={<AdsService />}
                    />
                    <Route
                        path="service/Video-Editing"
                        element={<ManagementService />}
                    />
                    <Route path="portfolio" element={<PortfolioPage />} />
                    <Route
                        path="portfolio/:portfolioDetailsId"
                        element={<PortfolioDetailsPage />}
                    />
                    <Route
                        path="portfolio/portfolioDetailsPageOne"
                        element={<PortfolioDetailsPageOne />}
                    />
                    <Route
                        path="portfolio/growth-portfolio"
                        element={<PortfolioDetailsPageGrowth />}
                    />
                    <Route
                        path="portfolio/graphic-portfolio"
                        element={<PortfolioDetailsPageGraphic />}
                    />
                    <Route
                        path="portfolio/video-portfolio"
                        element={<PortfolioDetailsPageVideo />}
                    />
                    <Route
                        path="portfolio/ad-portfolio"
                        element={<PortfolioDetailsPageAd />}
                    />
                    <Route path="blog" element={<BlogPage />} />
                    <Route
                        path="blog/:blogDetailsId"
                        element={<BlogDetailsPage />}
                    />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="team" element={<TeamPage />} />
                    <Route path="team/:teamDetails" element={<TeamDetails />} />
                    <Route
                        path="/case-study/:caseStudyDetailsId"
                        element={<CaseStudyDetailsPage />}
                    />
                    <Route path="faq" element={<FaqPage />} />
                </Route>
                <Route
                    path="/"
                    element={
                        <Layout headerVariant="cs-site_header_full_width" />
                    }
                >
                    <Route
                        path="creative-portfolio"
                        element={<CreativePortfolioHome />}
                    />
                    <Route
                        path="showcase-portfolio"
                        element={<ShowcasePortfolioHome />}
                    />
                    <Route
                        path="case-study-showcase"
                        element={<CaseStudyShowcaseHome />}
                    />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
