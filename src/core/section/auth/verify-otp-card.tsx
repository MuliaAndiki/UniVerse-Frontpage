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
import { FormVerifyOtp } from '@/types/form';
import React from 'react';
import { Button } from '@/components/ui/button';

interface VerifyOtpCardProps {
  setFormVerifyOtp: React.Dispatch<React.SetStateAction<FormVerifyOtp>>;
  onVerify: () => void;
  mobile: boolean;
  isPending: boolean;
  onResend: () => void;
  cooldown: number;
  setCooldown: React.Dispatch<React.SetStateAction<number>>;
}

const VerifyOtpCard: React.FC<VerifyOtpCardProps> = ({
  mobile,
  onVerify,
  setFormVerifyOtp,
  isPending,
  onResend,
  cooldown,
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
              <Label className="text-3xl font-bold">Verifikasi </Label>
              <Label className=" font-light text-foreground/90 text-lg">
                Masukkan kode 6 digit yang Kamu terima melalui email.
              </Label>
              <Box className="flex justify-center items-center mt-2 flex-col w-full">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onVerify();
                  }}
                >
                  <InputOTP
                    maxLength={6}
                    onChange={(e) =>
                      setFormVerifyOtp((prev) => ({
                        ...prev,
                        otp: e,
                      }))
                    }
                  >
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
                  <Box className="flex justify-center items-center mt-4">
                    <Label>
                      Belum Menerima Otp?
                      {cooldown > 0 ? (
                        <span className="textba">
                          Kirim lagi ({Math.floor(cooldown / 60)}:
                          {(cooldown % 60).toString().padStart(2, '0')})
                        </span>
                      ) : (
                        <span
                          className="text-[var(--shape-parent)] font-semibold "
                          onClick={onResend}
                        >
                          Kirim lagi
                        </span>
                      )}
                    </Label>
                  </Box>
                  <Button className="w-full mt-5" type="submit" disabled={isPending}>
                    {isPending ? 'Wait..' : 'Verify'}
                  </Button>
                </Form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default VerifyOtpCard;
