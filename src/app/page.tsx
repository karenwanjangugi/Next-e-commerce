import Footer from "./shared/footer";
import Services from "./components/Services";
import Featured from "./components/Featured";
import Products from "./components/products";
import Banner from "./components/banner";
import { Browse } from "./components/browse";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Browse/>
        <Banner />
        <Products/>
        <Featured/>
        <Services/>
        <Footer/>
    </div>
  );

}
