import Container from '@/components/ui/container';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';
import DashboardSuperAdminHeroSection from '@/core/section/private/super-admin/hero-section';

const DashboardSuperAdminContainer = () => {
  return (
    <SidebarLayout>
      <Container>
        <DashboardSuperAdminHeroSection />
      </Container>
    </SidebarLayout>
  );
};

export default DashboardSuperAdminContainer;
