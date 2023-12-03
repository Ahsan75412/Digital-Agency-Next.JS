import BrandList from "@/components/BrandList";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
      <>
       <Hero></Hero>
       <BrandList></BrandList>
       <WorkList></WorkList>
       <Stats></Stats>

      </>
  )
}
