import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NoPage } from "../pages/NoPage";
import { LogIn } from "../pages/LogIn";
import { SignIn } from "../pages/SignIn";
import { ChatAndCard } from "../pages/ChatAndCards";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatandcards" element={<ChatAndCard />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}


