import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;