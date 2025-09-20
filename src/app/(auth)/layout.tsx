import BlankLayout from '@/core/layouts/blank.layout';
import Container from '@/components/ui/container';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="w-full">
      <BlankLayout>{children}</BlankLayout>
    </Container>
  );
}
