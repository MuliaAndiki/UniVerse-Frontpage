'use client';

import ResetPasswordCard from '@/core/section/auth/reset-password-card';
import Container from '@/components/ui/container';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { FormResetPassword } from '@/types/form';
import useResetPassword from '@/hooks/mutation/auth/useResetPassword';
import { useAppSelector } from '@/hooks/dispatch/dispatch';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { useRouter } from 'next/navigation';

const ResetPasswordContainer = () => {
  const router = useRouter();
  const alert = useAlert();
  const mobile = useIsMobile();
  const reset = useResetPassword();
  const currentEmail = useAppSelector((state) => state.otp.email);
  const currentPhone = useAppSelector((state) => state.otp.phoneNumber);
  const source = useAppSelector((state) => state.otp.source);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [cshowPassword, setCshowPassword] = useState<boolean>(false);
  const [formResetPassword, setFormResetPassword] = useState<FormResetPassword>({
    email: currentEmail!,
    password: '',
    phoneNumber: currentPhone!,
  });
  const handleReset = () => {
    if (source === 'forgotPasswordByEmail') {
      if (!formResetPassword.email) {
        alert.toast({
          title: 'Warning',
          message: 'Kamu Tidak Memiliki Akses Email',
          icon: 'warning',
          onVoid: () => {
            router.back();
          },
        });
        return;
      }
      reset.mutate({
        email: currentEmail!,
        password: formResetPassword.password,
        phoneNumber: null,
      });
      router.push('/login');
    } else if (source === 'forgotPasswordByPhoneNumber') {
      if (!formResetPassword.phoneNumber) {
        alert.toast({
          title: 'Warning',
          message: 'Kamu Tidak Memiliki Akses Nomor',
          icon: 'warning',
          onVoid: () => {
            router.back();
          },
        });
        return;
      }
      reset.mutate({
        email: null,
        password: formResetPassword.password,
        phoneNumber: currentPhone,
      });
      router.push('/login');
    }
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <ResetPasswordCard
        cshowPassword={cshowPassword}
        setCshowPassword={setCshowPassword}
        mobile={mobile}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
        isPending={reset.isPending}
        formResetPassword={formResetPassword}
        onReset={() => handleReset()}
        setFormResetPassword={setFormResetPassword}
      />
    </Container>
  );
};

export default ResetPasswordContainer;
