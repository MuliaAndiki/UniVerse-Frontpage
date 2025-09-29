import { useAppDispatch } from '@/hooks/dispatch/dispatch';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import Api from '@/services/props.service';
import { setEmail, setSource } from '@/stores/otpSlice/otpSlice';
import { FormForgotEmail } from '@/types/form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useForgotPasswordEmail() {
  const alert = useAlert();
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation<TResponse<any>, Error, FormForgotEmail>({
    mutationFn: (payload: FormForgotEmail) => Api.Auth.ForgotPasswordEmail(payload),
    onSuccess: (res, variable) => {
      dispatch(setEmail(variable.email ?? ''));
      dispatch(setSource('forgotPasswordByEmail'));
      console.log(variable.email);
      alert.toast({
        title: 'Success',
        message: 'Email Terverfikasi Success',
        icon: 'success',
        onVoid: () => {
          router.push('/verify-otp');
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Error',
        message: 'Email Terverfikasi Failed',
        icon: 'error',
      });
    },
  });
}
