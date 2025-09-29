import { useAlert } from '@/hooks/useAlert/costum-alert';
import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import Api from '@/services/props.service';
import { FormLoginType } from '@/types/form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/dispatch/dispatch';
import { setCurrentUser } from '@/stores/authSlice/authSlice';
import { userSchema } from '@/types/api';
import { setCookie } from 'cookies-next';
import {
  APP_SESSION_COOKIE_KEY,
  APP_REFRESH_TOKEN_COOKIE_EXPIRES_IN,
} from '@/configs/cookies.config';

export default function useLogin(options?: { onAfterSuccess?: () => void }) {
  const alert = useAlert();
  const dispatch = useAppDispatch();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, FormLoginType>({
    mutationFn: (payload: FormLoginType) => Api.Auth.Login(payload),
    onSuccess: (res) => {
      const role = res.data.role;
      const token = res.data.token;
      const userPayload: userSchema = {
        user: res.data,
      };
      setCookie(APP_SESSION_COOKIE_KEY, token, {
        maxAge: APP_REFRESH_TOKEN_COOKIE_EXPIRES_IN / 1000,
        path: '/',
      });
      dispatch(setCurrentUser(userPayload));
      alert.toast({
        title: 'Succesfully',
        message: 'Register Succesfuly',
        icon: 'success',
        onVoid: () => {
          options?.onAfterSuccess?.();
          if (role === 'user') {
            router.push('/user/dashboard');
          } else if (role === 'organizer') {
            router.push('/organizer/dashboard');
          } else if (role === 'campus') {
            router.push('/campus/dashboard');
          } else if (role === 'superAdmin') {
            router.push('/super-admin/dashboard');
          } else {
            return null;
          }
        },
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
