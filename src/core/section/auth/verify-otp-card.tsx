import { Label } from '@/components/ui/label';
import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import ForgotSvg from '@/components/svg/auth/forgot-svg';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import Form from '@/components/ui/form';

const VerifyOtpCard = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center  items-center relative z-0 overflow-hidden ">
        <Box className="grid grid-cols-2 grid-rows-1 w-full">
          <Box className=" flex justify-center items-center ">
            <ForgotSvg />
          </Box>
          <Box className=" flex justify-center items-center  ">
            <Box className=" border border-[var(--shape-parent)] rounded-lg flex flex-col p-8 w-full max-w-100">
              <Label className="text-3xl font-bold">Verifikasi </Label>
              <Label className=" font-light text-foreground/90 text-lg">
                Masukkan kode 6 digit yang Kamu terima melalui email.
              </Label>
              <Box className="flex justify-center items-center mt-2 flex-col w-full">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </Form>
              </Box>
              <Box className="flex justify-center items-center mt-4">
                <Label>
                  Belum menerima kode?{' '}
                  <span className="text-[var(--shape-parent)]">Kirim lagi</span>
                </Label>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default VerifyOtpCard;
