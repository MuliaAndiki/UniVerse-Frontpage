import Container from '@/components/ui/container';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';
import DashboardCampusHeroSection from '@/core/section/private/campus/hero-section';

const DashboardCampusContainer = () => {
  return (
    <SidebarLayout>
      <Container className="w-full min-h-screen flex flex-col">
        <DashboardCampusHeroSection />
      </Container>
    </SidebarLayout>
  );
};

export default DashboardCampusContainer;
