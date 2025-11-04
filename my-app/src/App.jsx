 import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import StatsSection  from "./components/sections/StatsSection";
import AboutSection from "./components/sections/AboutSection";
import GearSection from "./components/sections/GearSection";
import MissionSection from "./components/sections/MissionSection";
export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <StatsSection />
      <AboutSection />
       <GearSection />
       <MissionSection />
    </div>
  );
}
