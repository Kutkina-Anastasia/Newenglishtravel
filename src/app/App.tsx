import { Hero } from "./components/Hero";
import { ForWhom } from "./components/ForWhom";
import { CourseProgram } from "./components/CourseProgram";
import { WhySpecial } from "./components/WhySpecial";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      <Hero />
      <ForWhom />
      <CourseProgram />
      <WhySpecial />
      <Requirements />
      <Schedule />
      <Pricing />
      <CTA />
    </div>
  );
}
