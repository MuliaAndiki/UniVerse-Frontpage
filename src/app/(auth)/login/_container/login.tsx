'use client';

import Box from '@/components/ui/box';
import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import { LoginCard } from '@/core/section/auth/login-card';
import useLogin from '@/hooks/mutation/auth/useLogin';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { FormLoginType } from '@/types/form';
import { useState } from 'react';
import Image from 'next/image';

const LoginContainer = () => {
  const alert = useAlert();
  const [formLogin, setFormLogin] = useState<FormLoginType>({
    email: '',
    password: '',
  });
  const login = useLogin();
  const handleLogin = () => {
    if (!formLogin.email || !formLogin.password) {
      alert.toast({
        title: 'Warning',
        message: 'Please Check',
        icon: 'warning',
      });
      return;
    }
    login.mutate(formLogin);
  };
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <View className="grid min-h-svh lg:grid-cols-2 bg-white">
        <Box className="flex flex-col gap-4 p-6 md:p-10">
          <Box className="flex justify-center gap-2 md:justify-start"></Box>
          <Box className="flex flex-1 items-center justify-center">
            <Box className="w-full max-w-xs">
              <LoginCard
                formLogin={formLogin}
                isPending={login.isPending}
                onLogin={() => handleLogin()}
                setFormLogin={setFormLogin}
              />
            </Box>
          </Box>
        </Box>
        <Box className="bg-background relative flex justify-center items-center">
          <Image alt="mobile" src="/images/mobil.svg" width={500} height={500} />
        </Box>
      </View>
    </Container>
  );
};

export default LoginContainer;
