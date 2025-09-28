'use client';

import Box from '@/components/ui/box';
import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import { LoginCard } from '@/core/section/auth/login-card';
import useLogin from '@/hooks/mutation/auth/useLogin';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { FormLoginType } from '@/types/form';
import { useState } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';
import LoginSvg from '@/components/svg/auth/login-svg';
import { useIsMobile } from '@/hooks/use-mobile';

const LoginContainer = () => {
  const mobile = useIsMobile();
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
    <Container className="w-full min-h-screen flex flex-col ">
      <View className="grid min-h-svh lg:grid-cols-2 ">
        <Box className="flex flex-col gap-4 p-6 md:p-10">
          <Box className="flex justify-center gap-2 md:justify-start"></Box>
          <Box className="flex flex-1 items-center justify-center bg">
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
        {!mobile && (
          <Box className="bg-[var(--shape-parent)] relative  flex-col flex justify-center items-center">
            <Label className="text-7xl text-center font-extrabold text-background">
              Selamat Datang Kembali
            </Label>
            <LoginSvg />
          </Box>
        )}
      </View>
    </Container>
  );
};

export default LoginContainer;
