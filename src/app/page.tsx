import Footer from "./shared/footer";
import Services from "./components/Services";
import Featured from "./components/Featured";
import { Products }from "./components/products";
import Banner from "./components/banner";
import { Browse } from "./components/browse";
import { Product } from "./components/this-month";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-600">
      <Products/>
      <Browse/>
       <Product/>
        <Banner />
        <Products/>
        <Featured/>
        <Services/>
        <Footer/>
    </div>
  );

}
