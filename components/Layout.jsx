import Navbar from "./Navbar";
import Footer from "./Footer";
import useReadingProgress from "../hooks/useReadingProgress";

export default function Layout({ children }) {
  const completion = useReadingProgress();
  return (
    <>
      <div className="w-full">
        <div className="w-full fixed top-0 z-50">
          <Navbar />
          <span
            style={{ transform: `translateX(${completion - 100}%)` }}
            className="absolute bg-yellow h-1 w-full bottom-0"
          />
        </div>
        <main>{children}</main>
        <div className="w-full relative">
          <Footer />
        </div>
      </div>
    </>
  );
}
