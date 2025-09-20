import AxiosClient from '@/utils/axios.client';
import { TResponse } from '@/pkg/react-query/mutation-wrapper.type';
import {
  FormEditProfile,
  FormForgot,
  FormLoginType,
  FormRegisterType,
  FormVerifyOtp,
} from '@/types/form';

class AuthApi {
  async Login(payload: FormLoginType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/login', payload);
    return res.data;
  }
  async Register(payload: FormRegisterType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/', payload);
    return res.data;
  }
  async Logout(): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/logout');
    return res.data;
  }
  async GetProfile(): Promise<TResponse<any>> {
    const res = await AxiosClient.get('/api/auth/profile');
    return res.data;
  }
  async EditProfile(payload: FormEditProfile): Promise<TResponse<any>> {
    const res = await AxiosClient.put('/api/auth/profile', payload);
    return res.data;
  }
  async VerifyOtp(payload: FormVerifyOtp): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/verify-otp', payload);
    return res.data;
  }
  async ForgotPasswordEmail(payload: FormForgot): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/forgot-email', payload);
    return res.data;
  }
  async ForgotPasswordPhoneNumber(payload: FormForgot): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/forgot-phoneNumber', payload);
    return res.data;
  }
  async SendOtp(payload: FormForgot): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/send-otp', payload);
    return res.data;
  }
  async DeleteAccount(): Promise<TResponse<any>> {
    const res = await AxiosClient.delete('/api/auth/account');
    return res.data;
  }
}

export default new AuthApi();
