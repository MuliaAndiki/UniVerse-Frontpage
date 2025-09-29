export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: number;
}

export interface FormVerifyOtp {
  email?: string | null;
  phoneNumber?: string | null;
  otp: string;
}

export interface FormEditProfile {
  gender?: boolean;
  fullName?: string;
  phoneNumber?: string;
  fotoProfile?: string;
}

export interface FormResetPassword {
  email?: string | null;
  phoneNumber?: string | null;
  password?: string;
}

export type FormForgotEmail = Pick<FormResetPassword, 'email'>;
export type FormForgotPhone = Pick<FormResetPassword, 'phoneNumber'>;
