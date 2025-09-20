import { useAlert } from '@/hooks/useAlert/costum-alert';
import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import Api from '@/services/props.service';
import { FormLoginType } from '@/types/form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useLogin() {
  const alert = useAlert();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, FormLoginType>({
    mutationFn: (payload: FormLoginType) => Api.Auth.Login(payload),
    onSuccess: () => {
      alert.toast({
        title: 'Succesfully',
        message: 'Register Succesfuly',
        icon: 'success',
        onVoid: () => {},
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed',
        message: 'Register Failed',
        icon: 'error',
      });
    },
  });
}
