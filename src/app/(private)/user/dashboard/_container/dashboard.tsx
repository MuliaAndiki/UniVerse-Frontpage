'use client';
import Container from '@/components/ui/container';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';
import DashboardUserHeroSection from '@/core/section/private/user/hero-section';

const DashboardUserContainer = () => {
  return (
    <SidebarLayout>
      <Container className="w-full min-h-screen flex flex-col">
        <DashboardUserHeroSection />
      </Container>
    </SidebarLayout>
  );
};

export default DashboardUserContainer;
