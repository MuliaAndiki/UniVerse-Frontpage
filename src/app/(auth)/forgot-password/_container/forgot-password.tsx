'use client';

import Container from '@/components/ui/container';
import ForgotPasswordCard from '@/core/section/auth/forgot-password-card';

const ForgotPasswordContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <ForgotPasswordCard />
    </Container>
  );
};

export default ForgotPasswordContainer;
