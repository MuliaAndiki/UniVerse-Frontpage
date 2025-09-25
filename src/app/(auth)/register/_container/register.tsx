'use client';

import RegisterCard from '@/core/section/auth/register-card';
import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { useState } from 'react';
import { FormRegisterType } from '@/types/form';
import useRegister from '@/hooks/mutation/auth/useRegister';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import Image from 'next/image';

const RegisterContainer = () => {
  const alert = useAlert();
  const [formRegister, setFormRegister] = useState<FormRegisterType>({
    email: '',
    fullName: '',
    password: '',
  });

  const register = useRegister();
  const handleRegister = () => {
    if (!formRegister.email || !formRegister.fullName || !formRegister.password) {
      alert.toast({
        title: 'Warning',
        message: 'Please Check Colum',
        icon: 'warning',
      });
      return;
    }
    register.mutate(formRegister);
  };
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <View className="grid min-h-svh lg:grid-cols-2 bg-white">
        <Box className="bg-background relative flex justify-center items-center">
          <Image alt="mobile" src="/images/mobil.svg" width={500} height={500} />
        </Box>
        <Box className="flex flex-col gap-4 p-6 md:p-10">
          <Box className="flex justify-center gap-2 md:justify-start"></Box>
          <Box className="flex flex-1 items-center justify-center">
            <Box className="w-full max-w-xs">
              <RegisterCard
                formRegister={formRegister}
                isPending={register.isPending}
                onRegister={() => handleRegister()}
                setFormRegister={setFormRegister}
              />
            </Box>
          </Box>
        </Box>
      </View>
    </Container>
  );
};

export default RegisterContainer;
