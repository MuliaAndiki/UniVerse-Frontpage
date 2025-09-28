'use client';

import RegisterCard from '@/core/section/auth/register-card';
import Container from '@/components/ui/container';
import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { useEffect, useState } from 'react';
import { FormRegisterType } from '@/types/form';
import useRegister from '@/hooks/mutation/auth/useRegister';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import Image from 'next/image';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const RegisterContainer = () => {
  const alert = useAlert();
  const mobile = useIsMobile();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [cshowPassword, setCshowPassword] = useState<boolean>(false);
  const [formRegister, setFormRegister] = useState<FormRegisterType>({
    email: '',
    fullName: '',
    password: '',
    phoneNumber: 0,
  });

  useEffect(() => {
    if (confirmPassword == '') {
      setPasswordsMatch(true);
      return;
    }
    setPasswordsMatch(formRegister.password === confirmPassword);
  }, [formRegister.password, confirmPassword]);

  const register = useRegister();
  const handleRegister = () => {
    if (
      !formRegister.email ||
      !formRegister.fullName ||
      !formRegister.password ||
      !formRegister.phoneNumber
    ) {
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
    <Container className="w-full min-h-screen flex flex-col ">
      <View className="grid min-h-svh lg:grid-cols-2 ">
        {!mobile && (
          <Box className=" relative flex justify-evenly items-center  flex-col  bg-[var(--shape-parent)]">
            <Label className="text-center font-extrabold text-7xl text-background">
              Daftar & Jelajahi UniVerse
            </Label>
            <Box className="">
              <Image alt="mobile" src="/images/register.svg" width={800} height={500} />
            </Box>
          </Box>
        )}
        <Box className="flex flex-col gap-4 p-6 md:p-10">
          <Box className="flex justify-center gap-2 md:justify-start "></Box>
          <Box className="flex flex-1 items-center justify-center ">
            <Box className="w-full max-w-xs ">
              <RegisterCard
                formRegister={formRegister}
                isPending={register.isPending}
                onRegister={() => handleRegister()}
                setFormRegister={setFormRegister}
                confirmPassword={confirmPassword}
                passwordsMatch={passwordsMatch}
                setConfirmPassword={setConfirmPassword}
                setPasswordsMatch={setPasswordsMatch}
                cshowPassword={cshowPassword}
                setCshowPassword={setCshowPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </Box>
          </Box>
        </Box>
      </View>
    </Container>
  );
};

export default RegisterContainer;
