'use client';

import Container from '@/components/ui/container';
import VerifyOtpCard from '@/core/section/auth/verify-otp-card';

const VerifyOtpContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <VerifyOtpCard />
    </Container>
  );
};

export default VerifyOtpContainer;
