import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NoPage } from "../pages/NoPage";
import { Main } from "../pages/Main";
import { LogIn } from "../pages/LogIn";
import { SignIn } from "../pages/SignIn";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meeter" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
