import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import { useMutation } from '@tanstack/react-query';
import Api from '@/services/props.service';
import { FormVerifyOtp } from '@/types/form';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/dispatch/dispatch';

export default function useVerifyOtp() {
  const curentRedirect = useAppSelector((state) => state.otp.source);
  const router = useRouter();
  const alert = useAlert();
  return useMutation<TResponse<any>, Error, FormVerifyOtp>({
    mutationFn: (payload: FormVerifyOtp) => Api.Auth.VerifyOtp(payload),

    onSuccess: () => {
      alert.toast({
        title: 'Succes',
        message: 'Verifty Succes',
        icon: 'success',
        onVoid: () => {
          if (curentRedirect === 'register') {
            router.push('/login');
          } else if (curentRedirect === 'forgotPasswordByEmail') {
            router.push('/reset-password');
          } else if (curentRedirect === 'forgotPasswordByPhoneNumber') {
            router.push('/reset-password');
          } else {
            return null;
          }
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Error',
        message: 'Verifty Failed',
        icon: 'error',
      });
    },
  });
}
