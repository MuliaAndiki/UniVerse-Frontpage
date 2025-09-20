'use client';

import RegisterCard from '@/core/section/auth/register-card';
import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { useState } from 'react';
import { FormRegisterType } from '@/types/form';
import useRegister from '@/hooks/mutation/auth/useRegister';
import { useAlert } from '@/hooks/useAlert/costum-alert';

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
      <View className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <Box className="w-full max-w-sm md:max-w-3xl">
          <RegisterCard
            formRegister={formRegister}
            setFormRegister={setFormRegister}
            isPending={register.isPending}
            onRegister={() => handleRegister()}
          />
        </Box>
      </View>
    </Container>
  );
};

export default RegisterContainer;
