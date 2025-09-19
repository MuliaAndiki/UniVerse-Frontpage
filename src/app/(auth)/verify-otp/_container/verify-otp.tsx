'use client';

import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import VerifyOtpCard from '@/core/section/auth/verifyOtpCard';

const VerifyOtpContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <View className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <Box className="w-full max-w-sm md:max-w-3xl">
          <VerifyOtpCard />
        </Box>
      </View>
    </Container>
  );
};

export default VerifyOtpContainer;
