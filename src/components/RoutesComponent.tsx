import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NoPage } from "../pages/NoPage";
import { Main } from "../pages/Main";
import { LogIn } from "../pages/LogIn";
import { SignIn } from "../pages/SignIn";
import { Chat } from "../pages/Chat";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meeter" element={<Main />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
