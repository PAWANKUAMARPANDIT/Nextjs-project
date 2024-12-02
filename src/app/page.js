"use client";
import { BlogSection } from "@/components/BlogSection";
import { ClientFeedback } from "@/components/ClientFeedback";
import { HeroSection } from "@/components/heroSection";
import PricingSection from "@/components/PricingSection";
  
const Page = () => {
  return (
    <div>
      <HeroSection />
     <PricingSection />
     <BlogSection />
     <ClientFeedback/>
    </div>
  );
};

export default Page;
