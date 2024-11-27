import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
export default function Home() {
    return(
        <>
            <Navbar />
             <Hero />
             <LogoTicker/>
             <Introduction/>
             <Features/>
             <Faqs/>
             <Footer/>
        </>
    );
}
