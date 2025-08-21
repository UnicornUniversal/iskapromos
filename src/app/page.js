import Image from "next/image";
import SponsoredProducts from './components/SponsoredProducts'
import IskaShopComingSoon from './components/IskaShopComingSoon'
import ShopFaq from './components/ShopFaq'
import WhyIska from './components/WhyIska'

export default function Home() {
  return (
    <div className="font-poppins  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
     <IskaShopComingSoon />
     <WhyIska />
      <SponsoredProducts />
      <ShopFaq />
    
    </div>
  );
}
