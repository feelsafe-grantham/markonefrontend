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

function App() {
  // useReview();

  return (
    <>
      <BrowserRouter>
        <MainContainer
          chiledContainerClass="relative"
        >
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/development" element={<ProjectView endpoint="development" />} />
            <Route path="/seo" element={<ProjectView endpoint="seo" />} />
            <Route path="/connect" element={<ConnectView />} />
            <Route path="/testimonial" element={<TestimonialView />} />
            <Route path="/blog" element={<BlogListView />} />
            <Route path="/project" element={<ProjectView endpoint="development" />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/terms-and-conditon" element={<TermsView />} />
            <Route path="/privacy-policy" element={<PrivacyView />} />
            <Route path="/refund-policy" element={<RefundsView />} />
            <Route path="/:slug" element={<BlogDetailView />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
