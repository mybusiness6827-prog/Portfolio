"use client";

import { useState } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <main className="relative bg-[#121212]">
      {/* Scroll Points & Frame Indicator */}
      <ScrollIndicator frame={currentFrame} />

      {/* Global Extreme-High-Z Loader */}
      <LoadingScreen progress={progress} isFinished={isFinished} />

      {/* Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas
          onProgress={(p) => setProgress(p)}
          onFrameChange={(f) => setCurrentFrame(f)}
          onFinish={() => setIsFinished(true)}
        />
      </div>

      {/* Skills Mastery Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Reviews Section */}
      <Reviews />

      {/* Comparison Section */}
      <Comparison />

      {/* FAQ Section */}
      <FAQ />

      {/* Final Contact Section */}
      <Contact />
    </main>
  );
}
