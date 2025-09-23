import { appConfig } from '@/configs/app.config';
import Image from 'next/image';
import View from '@/components/ui/view';
import Link from 'next/link';

import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { IconArrowUpRight } from '@tabler/icons-react';
import Spread from '@/components/ui/spreed';
import { Label } from '@radix-ui/react-label';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Input } from '@/components/ui/input';

export default function AppFooter() {
  const { navigation, contact } = appConfig.params;
  const navigationItems = Object.values(navigation);
  return (
    <footer>
      <View className="container mx-auto h-full w-full ">
        <Box className="flex items-center justify-center   h-full">
          <Box className="w-full h-full">
            <Box className="flex justify-between items-center w-full ">
              <Image src={appConfig.logo} alt="Logo" width={100} height={100} />
              <Button className="flex items-center justify-center">
                Hire Me
                <IconArrowUpRight />
              </Button>
            </Box>
            <Spread orientation="horizontal" className="my-20" />
            <Box className="flex justify-between items-start gap-4  h-full  max-h-70 ">
              <Box className="w-full flex justify-between  items-center flex-col h-full">
                <Box className=" h-full  flex justify-between  items-center flex-col ">
                  <Label className="text-justify text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
                    ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    lobortis orci elementum egestas lobortis.
                  </Label>
                  <Box className="flex">
                    {Object.entries(appConfig.socialMedia).map(([key, value]) => (
                      <Link href={value.url} key={key}>
                        <Icon icon={value.icon} width={24} height={24} />
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box className="w-full flex justify-start  items-center flex-col space-y-2">
                <Label className="text-lg font-bold">Navigations</Label>
                <Box className="flex space-x-4 flex-col gap-4">
                  {navigationItems.map((item, idx) => (
                    <Label key={idx} className="cursor-pointer">
                      {item.title}
                    </Label>
                  ))}
                </Box>
              </Box>
              <Box className="flex flex-col  h-full  space-y-1  gap-4 w-full">
                <Label className="text-lg font-bold">Navigations</Label>
                <Label>Email: {contact.email}</Label>
                <Label>Phone: {contact.phone}</Label>
                {contact.portfolio && <Label>Portfolio: {contact.portfolio}</Label>}
              </Box>
              <Box className="flex flex-col  h-full  space-y-1  gap-4 w-full">
                <Label className="text-lg font-bold">Get The Latest information </Label>
                <Input placeholder="Email Addresss" />
              </Box>
            </Box>
            <Box className="mt-4">
              <Box className="flex items-center gap-2">
                <Spread orientation="horizontal" className="my-6" />
              </Box>
              <Box className="w-full flex justify-between items-center">
                <Label className="font-light">
                  Hak Cipta© 2025 Universe. Semua Hak Dilindungi.
                </Label>
                <Label className="font-light">Ketentuan Pengguna | Kebijakan Privasi</Label>
              </Box>
            </Box>
          </Box>
        </Box>
      </View>
    </footer>
  );
}
