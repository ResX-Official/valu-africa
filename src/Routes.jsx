import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PartnershipPortal from './pages/partnership-portal';
import GetInvolved from './pages/get-involved';
import DonatePage from './pages/donate';
import AboutUsPage from './pages/about-us';
import Homepage from './pages/homepage';
import Blog from './pages/blog/Blog';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/partnership-portal" element={<PartnershipPortal />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
