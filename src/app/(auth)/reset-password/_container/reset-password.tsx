'use client';

import ResetPasswordCard from '@/core/section/auth/reset-password-card';
import Container from '@/components/ui/container';
const ResetPasswordContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <ResetPasswordCard />
    </Container>
  );
};

export default ResetPasswordContainer;
