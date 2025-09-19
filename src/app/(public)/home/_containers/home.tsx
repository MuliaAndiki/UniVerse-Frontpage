'use client';
import Container from '@/components/ui/container';
import NavLayout from '@/core/layouts/nav.layout';
import AboutSection from '@/core/section/public/about-section';
import CategorySection from '@/core/section/public/category-section';
import HomeHeroSection from '@/core/section/public/hero-section';

export default function ContainerHome() {
  return (
    <NavLayout>
      <Container className="w-full min-h-screen flex flex-col">
        <HomeHeroSection />
        <AboutSection />
        <CategorySection />
      </Container>
    </NavLayout>
  );
}
