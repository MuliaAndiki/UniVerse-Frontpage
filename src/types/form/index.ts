export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  email: string;
  password: string;
  fullName: string;
}

export interface FormVerifyOtp {
  email?: string;
  phoneNumber?: string;
  otp: string;
}

export interface FormEditProfile {
  gender?: boolean;
  fullName?: string;
  phoneNumber?: string;
  fotoProfile?: string;
}

export interface FormForgot {
  email?: string;
  phoneNumber?: string;
}
