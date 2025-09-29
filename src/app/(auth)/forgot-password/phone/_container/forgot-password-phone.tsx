'use client';
import Container from '@/components/ui/container';
import ForgotPasswordCardPhone from '@/core/section/auth/forgot-password-phone';
import useForgotPasswordPhone from '@/hooks/mutation/auth/useForgotPasswordPhone';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { FormForgotPhone } from '@/types/form';
import { useState } from 'react';

const ForgotPasswordPhoneContainer = () => {
  const alert = useAlert();
  const mobile = useIsMobile();
  const phone = useForgotPasswordPhone();
  const [formForgotPasswordPhone, setFormForgotPasswordPhone] = useState<FormForgotPhone>({
    phoneNumber: '',
  });
  const handleForgotPhone = () => {
    if (!formForgotPasswordPhone.phoneNumber) {
      alert.toast({
        title: 'Warning',
        message: 'Kolum Tidak Boleh Kosong',
        icon: 'warning',
      });
      return;
    }
    return phone.mutate(formForgotPasswordPhone);
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <ForgotPasswordCardPhone
        mobile={mobile}
        isPending={phone.isPending}
        formForgotPasswordPhone={formForgotPasswordPhone}
        onForgot={() => handleForgotPhone()}
        setFormForgotPasswordPhone={setFormForgotPasswordPhone}
      />
    </Container>
  );
};

export default ForgotPasswordPhoneContainer;
