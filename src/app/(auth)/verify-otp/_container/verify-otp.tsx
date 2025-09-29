'use client';

import Container from '@/components/ui/container';
import VerifyOtpCard from '@/core/section/auth/verify-otp-card';
import { useAppSelector } from '@/hooks/dispatch/dispatch';
import useSendOtp from '@/hooks/mutation/auth/useSendOtp';
import useVerifyOtp from '@/hooks/mutation/auth/useVerifyOtp';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { FormForgotEmail, FormVerifyOtp } from '@/types/form';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const VerifyOtpContainer: React.FC = () => {
  const mobile = useIsMobile();
  const alert = useAlert();
  const router = useRouter();
  const send = useSendOtp();
  const verify = useVerifyOtp();
  const source = useAppSelector((state) => state.otp.source);
  const currentEmail = useAppSelector((state) => state.otp.email);
  const curentPhoneNumber = useAppSelector((state) => state.otp.phoneNumber);

  const [cooldown, setCooldown] = useState<number>(0);
  const [formSend] = useState<FormForgotEmail>({
    email: currentEmail,
  });
  const [formVerifyOtp, setFormVeriftOtp] = useState<FormVerifyOtp>({
    email: currentEmail,
    phoneNumber: curentPhoneNumber,
    otp: '',
  });

  const handleSendOtp = () => {
    if (!formSend.email) {
      alert.toast({
        title: 'Warning',
        message: 'Email Tidak Failed',
        icon: 'warning',
      });
      return;
    }
    if (cooldown > 0) return;
    send.mutate(formSend, {
      onSuccess: () => {
        setCooldown(300);
      },
    });
  };

  useEffect(() => {
    if (cooldown <= 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  const handleVerityOtp = () => {
    if (!formVerifyOtp.otp) {
      alert.toast({
        title: 'Perhatian !',
        message: 'Otp Tidak Boleh Kosong',
        icon: 'warning',
      });
      return;
    }
    if (source === 'forgotPasswordByEmail') {
      if (!formVerifyOtp.email) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Email Tidak Ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      verify.mutate({
        email: formVerifyOtp.email,
        otp: formVerifyOtp.otp,
        phoneNumber: null,
      });
    } else if (source === 'forgotPasswordByPhoneNumber') {
      if (!formVerifyOtp.phoneNumber) {
        alert.toast({
          title: 'Perhatian!',
          message: 'Nomor Hp Tidak Ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      verify.mutate({
        email: null,
        otp: formVerifyOtp.otp,
        phoneNumber: formVerifyOtp.phoneNumber,
      });
    } else if (source === 'register') {
      if (!formVerifyOtp.email) {
        alert.toast({
          title: 'Perhatian',
          message: 'Email Tidak Ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      verify.mutate({
        email: formVerifyOtp.email,
        otp: formVerifyOtp.otp,
        phoneNumber: null,
      });
    } else {
      alert.toast({
        title: 'Perhatian !',
        message: 'Otp Tidak Dikenali',
        icon: 'error',
      });
    }
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <VerifyOtpCard
        mobile={mobile}
        setFormVerifyOtp={setFormVeriftOtp}
        onVerify={handleVerityOtp}
        isPending={verify.isPending}
        onResend={() => handleSendOtp()}
        cooldown={cooldown}
        setCooldown={setCooldown}
      />
    </Container>
  );
};

export default VerifyOtpContainer;
