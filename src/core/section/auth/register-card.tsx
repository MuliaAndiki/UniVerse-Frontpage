import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Box from '@/components/ui/box';
import Form from '@/components/ui/form';
import { FormRegisterType } from '@/types/form';
import Google from '@/components/icon/google';
import { Eye, EyeOff } from 'lucide-react';
interface RegisterProps {
  formRegister: FormRegisterType;
  setFormRegister: React.Dispatch<React.SetStateAction<FormRegisterType>>;
  onRegister: () => void;
  isPending: boolean;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordsMatch: boolean;
  setPasswordsMatch: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  cshowPassword: boolean;
  setCshowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterCard: React.FC<RegisterProps> = ({
  setFormRegister,
  onRegister,
  isPending,
  passwordsMatch,
  setConfirmPassword,
  setShowPassword,
  setCshowPassword,
  cshowPassword,
  showPassword,
}) => {
  return (
    <Form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        onRegister();
      }}
    >
      <Box className="flex flex-col items-center gap-2 text-center">
        <Label className="text-4xl font-bold">Buat Akun</Label>
        <Label className="text-foreground/80 text-xs text-balance  ">
          Masuk sekarang untuk berpartisipasi dalam event-event terbaik di Indonesia.
        </Label>
      </Box>
      <Box className="grid gap-6">
        <Box className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) =>
              setFormRegister((prev) => {
                const newObj = { ...prev, email: e.target.value };
                return newObj;
              })
            }
          />
        </Box>
        <Box className="grid gap-3">
          <Label htmlFor="email">No. Hp</Label>
          <Input
            id="phoneNumber"
            type="text"
            inputMode="numeric"
            required
            onChange={(e) =>
              setFormRegister((prev) => {
                const newObj = { ...prev, number: e.target.value };
                return newObj;
              })
            }
          />
        </Box>
        <Box className="grid gap-3 relative">
          <Box className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </Box>
          <Input
            id="password"
            type={showPassword ? 'password' : 'text'}
            required
            onChange={(e) =>
              setFormRegister((prev) => {
                const newObj = { ...prev, password: e.target.value };
                return newObj;
              })
            }
          />
          <Button
            className="absolute right-0 bottom-0"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </Button>
        </Box>
        <Box className="grid gap-3 relative">
          <Box className="flex items-center">
            <Label htmlFor="password">Konfirmasi Password</Label>
          </Box>
          <Input
            id="password"
            type={cshowPassword ? 'text' : 'password'}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="button"
            className={`absolute ${passwordsMatch ? 'right-0 bottom-0' : 'right-0 bottom-[25px]'} `}
            onClick={() => setCshowPassword((prev) => !prev)}
          >
            {cshowPassword ? <Eye /> : <EyeOff />}
          </Button>
          {!passwordsMatch && (
            <Label>
              Password Dan Konfirmasi Password Tidak
              <span className="text-destructive">Cocok</span>
            </Label>
          )}
        </Box>

        <Button type="submit" className="w-full" disabled={isPending} variant={'green'}>
          {isPending ? 'Wait..' : 'Register'}
        </Button>
        <Box className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background rounded-xs text-muted-foreground relative z-10 px-2">
            Atau
          </span>
        </Box>
        <Button variant="green" className="w-full flex justify-center items-center">
          <Google />
          Login with Google
        </Button>
      </Box>
      <Box className="text-center text-sm">
        Belum Punya Akun?{' '}
        <Link href="/login" className="underline underline-offset-4 text-[var(--case-tree)]">
          Daftar Sekarang
        </Link>
      </Box>
    </Form>
  );
};

export default RegisterCard;
