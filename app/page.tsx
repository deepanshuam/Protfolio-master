import Approach from "@/components/Approach";
// import Clients from "@/components/Clients";
//  import SkillsSection from "@/components/SkillsSection";
import CompanySection from "@/components/CompanySection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col sm:px-10 p-4 mx-auto overflow-clip">
    <div className="max-w-7xl w-full">
    <FloatingNav 
    navItems={navItems}
    />
    <Hero/>
    <Grid/>
    <RecentProjects/>
    {/* <Clients/> */}
    {/* <SkillsSection/> */}
    {<CompanySection/>}
    <Skills/>
    <Approach/>
    <Footer/>
    </div>
   </main>
  );
}
