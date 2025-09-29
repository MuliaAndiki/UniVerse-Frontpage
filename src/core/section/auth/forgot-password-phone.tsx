import Box from '@/components/ui/box';
import View from '@/components/ui/view';
import { Label } from '@radix-ui/react-dropdown-menu';
import ForgotSvg from '@/components/svg/auth/forgot-svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormForgotPhone } from '@/types/form';

interface ForgotPasswordPhoneProps {
  isPending: boolean;
  onForgot: () => void;
  formForgotPasswordPhone: FormForgotPhone;
  setFormForgotPasswordPhone: React.Dispatch<React.SetStateAction<FormForgotPhone>>;
  mobile: boolean;
}

const ForgotPasswordCardPhone: React.FC<ForgotPasswordPhoneProps> = ({
  mobile,
  isPending,
  onForgot,
  setFormForgotPasswordPhone,
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
              <Label className="text-3xl font-bold">Lupa Kata Sandi? </Label>
              <Label className=" font-light text-foreground/90 text-lg">
                Masukkan Nomor hp mu untuk proses verifikasi, kami akan mengirimkan kode 6 digit ke
                email Anda.
              </Label>
              <Box className="flex justify-center items-start gap-2 flex-col w-full">
                <Label className="font-bold">Nomor Hp :</Label>
                <Input
                  placeholder="000000000"
                  onChange={(e) =>
                    setFormForgotPasswordPhone((prev) => {
                      const newObj = { ...prev, phoneNumber: e.target.value };
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
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default ForgotPasswordCardPhone;
