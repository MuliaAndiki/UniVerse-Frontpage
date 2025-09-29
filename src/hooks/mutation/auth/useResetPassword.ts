import { useAlert } from '@/hooks/useAlert/costum-alert';
import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import Api from '@/services/props.service';
import { FormResetPassword } from '@/types/form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useResetPassword() {
  const alert = useAlert();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, FormResetPassword>({
    mutationFn: (payload: FormResetPassword) => Api.Auth.ResetPassword(payload),
    onSuccess: () => {
      alert.toast({
        title: 'Success',
        message: 'ResetPassword Success',
        icon: 'success',
        onVoid: () => {
          router.push('/login');
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Error',
        message: 'ResetPassword Failed',
        icon: 'error',
      });
    },
  });
}
