import BlankLayout from '@/core/layouts/blank.layout';
import Authproviders from '@/core/providers/auth.provider';
import Container from '@/components/ui/container';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="w-full">
      <Authproviders>
        <BlankLayout>{children}</BlankLayout>
      </Authproviders>
    </Container>
  );
}
