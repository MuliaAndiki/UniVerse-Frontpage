'use client';

import Box from '@/components/ui/box';
import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import LoginCard from '@/core/section/auth/login-card';
import useLogin from '@/hooks/mutation/auth/useLogin';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { FormLoginType } from '@/types/form';
import { useState } from 'react';

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
      <View className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <Box className="w-full max-w-sm md:max-w-3xl">
          <LoginCard
            formLogin={formLogin}
            isPending={login.isPending}
            onLogin={() => handleLogin()}
            setFormLogin={setFormLogin}
          />
        </Box>
      </View>
    </Container>
  );
};

export default LoginContainer;
