import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomeView from "./views/HomeView";
import ConnectView from "./views/ConnectView";
import MainContainer from "./components/common/MainContainer";
import ProjectView from "./views/ProjectView";
import BlogListView from "./views/BlogListView";
import TermsView from "./views/TermsView";
import PrivacyView from "./views/PrivacyView";
import RefundsView from "./views/RefundsView";
import BlogDetailView from "./views/BlogDetailView";
import TestimonialView from "./views/TestimonialView";
import EbookView from "./views/EbookView";
import useReview from "./utilities/customHooks/useReviews";
import ProfileView from "./views/ProfileView";
import MessageBot from "./components/common/ChatBot";
import WhatsappIcon from "./components/common/Icons/WhatspappIcon";
import ChatBot from "./components/common/Icons/ChatBot";
import { ImageViewerProvider } from './context/ImageViewerContext';
import ShipingAndDeliveryView from "./views/ShipingAndDeliveryView";

function App() {
  useReview();

  //override the console.log and console.error
  console.log = () => { };
  console.error = () => { };

  return (
    <ImageViewerProvider>
      <BrowserRouter>
        <MainContainer
          chiledContainerClass="relative"
        >
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/development" element={<ProjectView endpoint="development" />} />
            <Route path="/seo" element={<ProjectView endpoint="seo" />} />
            <Route path="/plans" element={<ConnectView />} />
            <Route path="/testimonial" element={<TestimonialView />} />
            <Route path="/blog" element={<BlogListView />} />
            <Route path="/project" element={<ProjectView endpoint="development" />} />
            <Route path="/e-book" element={<EbookView />} />
            <Route path="/contact-us" element={<ProfileView />} />
            <Route path="/terms-and-conditon" element={<TermsView />} />
            <Route path="/privacy-policy" element={<PrivacyView />} />
            <Route path="/refund-policy" element={<RefundsView />} />
            <Route path="/shipping-and-delivery" element={<ShipingAndDeliveryView />} />
            <Route path="/:slug" element={<BlogDetailView />} />
          </Routes>
          <MessageBot />
          <WhatsappIcon />
          <ChatBot />
        </MainContainer>
      </BrowserRouter>
    </ImageViewerProvider>
  );
}

export default App;
