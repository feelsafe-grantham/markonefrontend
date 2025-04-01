import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import ConnectView from "./views/ConnectView";
// import SeoProjectView from "./views/SeoProjectView";
// import { useSnackbar } from './components/Operations/Alert';
import MainContainer from "./components/common/MainContainer";
import Bottombar from "./components/common/Bottombar";
import ProjectView from "./views/ProjectView";
import BlogListView from "./views/BlogListView";
// import Alerts from './components/common/Alterts';
import TermsView from "./views/TermsView";
import PrivacyView from "./views/PrivacyView";
import RefundsView from "./views/RefundsView";
import BlogDetailView from "./views/BlogDetailView";
import TestimonialView from "./views/TestimonialView";
import EbookView from "./views/EbookView";

function App() {
  // const alert = [{
  //   type: "rating",
  //   name: "Alice",
  //   emoji: "❤️",
  //   segment: "Customer",
  //   message: "⭐ Great product, highly recommended! ⭐"
  // },
  // {
  //   type: "like",
  //   name: "Bob",
  //   emoji: "🔥",
  //   segment: "Follower",
  //   message: "❤️ I liked your recent post. Keep it up! ❤️"
  // },
  // {
  //   type: "testimonial",
  //   name: "Charlie",
  //   segment: "Client",
  //   message: "Had an amazing experience with your service! ⭐⭐⭐"
  // },
  // {
  //   type: "subscribed",
  //   name: "Dana",
  //   emoji: "👍",
  //   segment: "Subscriber",
  //   message: "Thanks for subscribing to our newsletter! 📧"
  // },
  // {
  //   type: "comment",
  //   name: "Eve",
  //   segment: "Viewer",
  //   message: "Great content, looking forward to more! 👍"
  // }
  // ]
  const [isActive, setIsActive] = useState("home");
  // const { showSnackbar } = useSnackbar();
  const renderSomething = () => {
    // review
    // showSnackbar(<Alerts alert={alert[Math.floor(Math.random() * alert.length)]} />, "success");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      renderSomething();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Router>
        <MainContainer
          setActiveTab={setIsActive}
          chiledContainerClass="relative"
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {isActive === "home" && (
                    <HomeView setActiveTab={setIsActive} />
                  )}
                  {isActive === "connect" && (
                    <ConnectView setActiveTab={setIsActive} />
                  )}
                  {isActive === "project" && (
                    <ProjectView endpoint="development" />
                  )}
                  {isActive === "seoproject" && <ProjectView endpoint="seo" />}
                  {isActive === "testimonial" && <TestimonialView />}
                  {isActive === "blogs" && <BlogListView />}
                  {isActive === "profile" && <EbookView />}
                </>
              }
            />
            <Route path="/terms-and-conditon" element={<TermsView />} />
            <Route path="/privacy-policy" element={<PrivacyView />} />
            <Route path="/refund-policy" element={<RefundsView />} />
            <Route path="/:slug" element={<BlogDetailView />} />
          </Routes>
          <Bottombar setActiveTab={setIsActive} />
        </MainContainer>
      </Router>
    </>
  );
}

export default App;
