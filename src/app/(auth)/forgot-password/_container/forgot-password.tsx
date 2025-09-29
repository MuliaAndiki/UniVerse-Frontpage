'use client';

import Container from '@/components/ui/container';
import ForgotPasswordCard from '@/core/section/auth/forgot-password-card';
import { useIsMobile } from '@/hooks/use-mobile';
import { FormForgotEmail } from '@/types/form';
import { useState } from 'react';
import useForgotPasswordEmail from '@/hooks/mutation/auth/useForgotPasswordEmail';
import { useAlert } from '@/hooks/useAlert/costum-alert';

const ForgotPasswordContainer = () => {
  const forgotEmail = useForgotPasswordEmail();
  const alert = useAlert();
  const [formForgotPassword, setFormForgotPassword] = useState<FormForgotEmail>({
    email: '',
  });

  const handleForgotEmail = () => {
    if (!formForgotPassword.email) {
      alert.toast({
        title: 'Warning',
        message: 'Tolong Cek Form Kembali !',
        icon: 'warning',
      });
      return;
    }
    forgotEmail.mutate(formForgotPassword);
  };

  const mobile = useIsMobile();
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <ForgotPasswordCard
        mobile={mobile}
        formForgotPassword={formForgotPassword}
        isPending={forgotEmail.isPending}
        setFormForgotPassword={setFormForgotPassword}
        onForgot={() => handleForgotEmail()}
      />
    </Container>
  );
};

export default ForgotPasswordContainer;
