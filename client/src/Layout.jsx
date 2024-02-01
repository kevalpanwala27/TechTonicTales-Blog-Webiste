import Header from "./Header";
import { Outlet } from "react-router-dom";
import FooterPage from "./components/FooterPage";

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <FooterPage />
    </main>
  );
}
