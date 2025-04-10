import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomeView from "./views/HomeView";
import ConnectView from "./views/ConnectView";
import { useSnackbar } from './components/Operations/Alert';

import MainContainer from "./components/common/MainContainer";
import ProjectView from "./views/ProjectView";
import BlogListView from "./views/BlogListView";
import Alerts from './components/common/Alterts';
import TermsView from "./views/TermsView";
import PrivacyView from "./views/PrivacyView";
import RefundsView from "./views/RefundsView";
import BlogDetailView from "./views/BlogDetailView";
import TestimonialView from "./views/TestimonialView";
import { AlertProps } from "./types/componentTypes";
import EbookView from "./views/EbookView";

function App() {
  const alert: AlertProps[] = [
    {
      "type": "rating",
      "name": "Aarav",
      "emoji": "❤️",
      "segment": "Customer",
      "message": "⭐ Great product, highly recommended! ⭐"
    },
    {
      "type": "like",
      "name": "Priya",
      "emoji": "🔥",
      "segment": "Follower",
      "message": "❤️ Loved your recent post. Keep it up! ❤️"
    },
    {
      "type": "testimonial",
      "name": "Ravi",
      "segment": "Client",
      "message": "Amazing service, highly recommend! ⭐⭐⭐"
    },
    {
      "type": "subscribed",
      "name": "Neha",
      "emoji": "👍",
      "segment": "Subscriber",
      "message": "Thanks for subscribing! 📧"
    },
    {
      "type": "comment",
      "name": "Siddharth",
      "segment": "Viewer",
      "message": "Great content, keep it up! 👍"
    }
  ]
  const { showSnackbar } = useSnackbar();
  const renderSomething = () => {
    // review
    showSnackbar(<Alerts alert={alert[Math.floor(Math.random() * alert.length)]} />, "success");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      renderSomething();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            <Route path="/profile" element={<EbookView />} />

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
