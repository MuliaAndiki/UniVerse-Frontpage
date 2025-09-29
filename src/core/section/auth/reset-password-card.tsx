import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import ForgotSvg from '@/components/svg/auth/forgot-svg';
import { Eye, EyeOff } from 'lucide-react';
import { FormResetPassword } from '@/types/form';

interface ResetPasswordProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
  cshowPassword: boolean;
  setCshowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  formResetPassword: FormResetPassword;
  setFormResetPassword: React.Dispatch<React.SetStateAction<FormResetPassword>>;
  isPending: boolean;
  onReset: () => void;
}

const ResetPasswordCard: React.FC<ResetPasswordProps> = ({
  cshowPassword,
  mobile,
  setCshowPassword,
  setShowPassword,
  isPending,
  showPassword,
  onReset,
  setFormResetPassword,
}) => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center  items-center relative z-0 overflow-hidden ">
        <Box className="grid lg:grid-cols-2 grid-rows-1 w-full">
          {!mobile && (
            <Box className=" flex justify-center items-center ">
              <ForgotSvg />
            </Box>
          )}
          <Box className=" flex justify-center items-center  ">
            <Box className=" border border-[var(--shape-parent)] rounded-lg flex flex-col p-8 w-full max-w-100">
              <Label className="text-3xl font-bold">Buat Kata Sandi Baru? </Label>
              <Label className=" font-light text-foreground/90 text-lg">
                Silakan buat kata sandi baru untuk akunmu. Dengan begitu, kamu dapat masuk dan
                menikmati semua fitur.
              </Label>
              <Box className="flex justify-center items-start gap-2  flex-col w-full relative">
                <Label className="font-bold">Masukkan kata sandi baru :</Label>
                <Input type={showPassword ? 'text' : 'password'} />
                <Button
                  className="absolute translate-y-3 right-0"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </Button>
              </Box>
              <Box className="flex justify-center items-start gap-2 flex-col w-full relative ">
                <Label className="font-bold ">Konfirmasi sandi :</Label>
                <Input
                  type={cshowPassword ? 'text' : 'password'}
                  onChange={(e) =>
                    setFormResetPassword((prev) => {
                      const newObj = { ...prev, password: e.target.value };
                      return newObj;
                    })
                  }
                />
                <Button
                  className="absolute -translate-y-3 right-0"
                  type="button"
                  onClick={() => setCshowPassword((prev) => !prev)}
                >
                  {cshowPassword ? <Eye /> : <EyeOff />}
                </Button>
                <Button className="w-full font-bold" disabled={isPending} onClick={() => onReset()}>
                  {isPending ? 'wait' : ' Verify'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default ResetPasswordCard;
