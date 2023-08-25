import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShortsPage from "../pages/ShortsPage";
import Subscriptions from "../pages/Subscriptions";
import Library from "../pages/Library";
import History from "../pages/History";
import YourVideos from "../pages/YourVideos";
import WatchLater from "../pages/WatchLater";
import LikedVideos from "../pages/LikedVideos";
import Trending from "../pages/Trending";
import Music from "../pages/Music";
import Gaming from "../pages/Gaming";
import Sports from "../pages/Sports";
import YouTubeStudio from "../pages/YouTubeStudio";
import YouTubeKids from "../pages/YouTubeKids";
import Settings from "../pages/Settings";
import ReportHistory from "../pages/ReportHistory";
import Help from "../pages/Help";
import SendFeedback from "../pages/SendFeedback";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="ShortsPage" element={<ShortsPage />} />
      <Route path="Subscriptions" element={<Subscriptions />} />
      <Route path="Library" element={<Library />} />
      <Route path="History" element={<History />} />
      <Route path="YourVideos" element={<YourVideos />} />
      <Route path="WatchLater" element={<WatchLater />} />
      <Route path="LikedVideos" element={<LikedVideos />} />
      <Route path="Trending" element={<Trending />} />
      <Route path="Music" element={<Music />} />
      <Route path="Gaming" element={<Gaming />} />
      <Route path="Sports" element={<Sports />} />
      <Route path="YouTubeStudio" element={<YouTubeStudio />} />
      <Route path="YouTubeKids" element={<YouTubeKids />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="ReportHistory" element={<ReportHistory />} />
      <Route path="Help" element={<Help />} />
      <Route path="SendFeedback" element={<SendFeedback />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
