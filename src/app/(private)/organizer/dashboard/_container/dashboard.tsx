import Container from '@/components/ui/container';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';
import DashboardOrganizerHeroSection from '@/core/section/private/organizer/hero-section';

const DashboardOrganizerContainer = () => {
  return (
    <SidebarLayout>
      <Container className="w-full min-h-screen flex flex-col">
        <DashboardOrganizerHeroSection />
      </Container>
    </SidebarLayout>
  );
};

export default DashboardOrganizerContainer;
