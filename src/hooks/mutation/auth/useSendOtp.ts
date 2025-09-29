import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import { useMutation } from '@tanstack/react-query';
import Api from '@/services/props.service';
import { FormForgotEmail } from '@/types/form';
import { useAlert } from '@/hooks/useAlert/costum-alert';
export default function useSendOtp() {
  const alert = useAlert();
  return useMutation<TResponse<any>, Error, FormForgotEmail>({
    mutationFn: (payload: FormForgotEmail) => Api.Auth.SendOtp(payload),
    onSuccess: () => {
      alert.toast({
        title: 'Succes',
        message: 'SendOtp Succes Again',
        icon: 'success',
        onVoid: () => {},
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed',
        message: 'SendOtp Failed Again',
        icon: 'error',
      });
    },
  });
}
