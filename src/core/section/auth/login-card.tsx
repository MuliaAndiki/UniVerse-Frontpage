import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Form from '@/components/ui/form';
import Link from 'next/link';
import Box from '@/components/ui/box';
import { FormLoginType } from '@/types/form';
import Google from '@/components/icon/google';

interface LoginCardProps {
  formLogin: FormLoginType;
  setFormLogin: React.Dispatch<React.SetStateAction<FormLoginType>>;
  onLogin: () => void;
  isPending: boolean;
}

export function LoginCard({ onLogin, setFormLogin, isPending }: LoginCardProps) {
  return (
    <Form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <Box className="flex flex-col items-center gap-2 text-center">
        <Label className="text-4xl font-bold">Selamat Datang</Label>
        <Label className="text-foreground/80 text-xs text-balance  ">
          Masuk sekarang untuk berpartisipasi dalam event-event terbaik di Indonesia.
        </Label>
      </Box>
      <Box className="grid gap-6">
        <Box className="grid gap-3">
          <Label htmlFor="email" className="text-foreground/50">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) =>
              setFormLogin((prev) => {
                const newObj = { ...prev, email: e.target.value };
                return newObj;
              })
            }
          />
        </Box>
        <Box className="grid gap-3">
          <Box className="flex items-center">
            <Label htmlFor="password" className="text-foreground/50">
              Password
            </Label>
          </Box>
          <Input
            id="password"
            type="password"
            required
            onChange={(e) =>
              setFormLogin((prev) => {
                const newObj = { ...prev, password: e.target.value };
                return newObj;
              })
            }
          />
        </Box>
        <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
          Lupa Password ?
        </Link>
        <Button type="submit" className="w-full" disabled={isPending} variant={'glass'}>
          {isPending ? 'Wait..' : 'Login'}
        </Button>
        <Box className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background rounded-xs text-muted-foreground relative z-10 px-2">
            Atau
          </span>
        </Box>
        <Button variant="outline" className="w-full">
          <Google />
          Login with Google
        </Button>
      </Box>
      <Box className="text-center text-sm">
        Tidak Memiliki Akun?{' '}
        <Link href="/register" className="underline underline-offset-4">
          Sign up
        </Link>
      </Box>
    </Form>
  );
}
