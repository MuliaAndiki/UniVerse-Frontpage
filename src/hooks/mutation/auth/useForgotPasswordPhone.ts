import { useAppDispatch } from '@/hooks/dispatch/dispatch';
import { useAlert } from '@/hooks/useAlert/costum-alert';
import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import Api from '@/services/props.service';
import { setPhoneNumber, setSource } from '@/stores/otpSlice/otpSlice';
import { FormForgotPhone } from '@/types/form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useForgotPasswordPhone() {
  const alert = useAlert();
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation<TResponse<any>, Error, FormForgotPhone>({
    mutationFn: (payload: FormForgotPhone) => Api.Auth.ForgotPasswordPhoneNumber(payload),
    onSuccess: (res, variable) => {
      dispatch(setPhoneNumber(variable.phoneNumber!));
      dispatch(setSource('forgotPasswordByPhoneNumber'));
      alert.toast({
        title: 'Succes',
        message: 'Nomor Terverifikasi',
        icon: 'success',
        onVoid: () => {
          router.push('/reset-password');
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed',
        message: 'Nomor Tidak Terverifikasi',
        icon: 'error',
      });
    },
  });
}
