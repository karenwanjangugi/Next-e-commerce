import Footer from "../shared/footer";
import Services from "../home/components/Services";
import Featured from "../home/components/Featured";
import { Products }from "../home/components/products";
import Banner from "../home/components/banner";
import { Browse } from "../home/components/browse";
import Product from "../home/components/this-month";
import NavBar from "../shared/navbar";
import { Hero } from "./components/Hero";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-430">
      <NavBar/>
      <Hero/>
      <Browse/>
      <Product/>
      <Banner/>
      <Products/>
      <Featured/>
      <Services/>
      <Footer/>
    </div>
  );

}
