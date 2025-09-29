import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import ForgotSvg from '@/components/svg/auth/forgot-svg';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FormForgotEmail } from '@/types/form';
import React from 'react';

interface ForgotPasswordEmailProps {
  formForgotPassword: FormForgotEmail;
  setFormForgotPassword: React.Dispatch<React.SetStateAction<FormForgotEmail>>;
  onForgot: () => void;
  mobile: boolean;
  isPending: boolean;
}

const ForgotPasswordCard: React.FC<ForgotPasswordEmailProps> = ({
  mobile,
  onForgot,
  setFormForgotPassword,
  isPending,
}) => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center  items-center relative z-0 overflow-hidden ">
        <Box className="grid lg:grid-cols-2 grid-rows-1 w-full">
          {!mobile && (
            <Box className=" flex justify-center items-center ">
              <ForgotSvg />
            </Box>
          )}
          <Box className=" flex justify-center items-center  ">
            <Box className=" border border-[var(--shape-parent)] rounded-lg flex flex-col p-8 w-full max-w-100">
              <Label className="text-3xl font-bold">Lupa Kata Sandi? </Label>
              <Label className=" font-light text-foreground/90 text-lg">
                Masukkan emailmu untuk proses verifikasi, kami akan mengirimkan kode 4 digit ke
                email Anda.
              </Label>
              <Box className="flex justify-center items-start gap-2 flex-col w-full">
                <Label className="font-bold">Email :</Label>
                <Input
                  placeholder="m@.gmail.xxx"
                  onChange={(e) =>
                    setFormForgotPassword((prev) => {
                      const newObj = { ...prev, email: e.target.value };
                      return newObj;
                    })
                  }
                />
                <Button
                  className="w-full font-bold"
                  disabled={isPending}
                  onClick={() => onForgot()}
                >
                  Verify
                </Button>
              </Box>
              <Link href="/forgot-password/phone">
                <Label className="font-light text-center mt-2">Gunakan Metode Lain ?</Label>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default ForgotPasswordCard;
