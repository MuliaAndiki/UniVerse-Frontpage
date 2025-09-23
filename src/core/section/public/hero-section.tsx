import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { IconChevronCompactRight } from '@tabler/icons-react';
import Laptop from '@/components/svg/public/schema-laptop';
import Phone from '@/components/svg/public/schema-phone';
import Sline from '@/components/svg/public/schema-sline';

const HomeHeroSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center  items-stretch relative z-0 overflow-hidden ">
        <Box className="flex justify-start items-center w-full flex-col  max-w-250 tracking-widest gap-6 mt-20 p-2 ">
          <Label className="text-4xl font-light p-4 border rounded-full text-foreground/50 bg-foreground/10">
            Mencari Event ?
          </Label>
          <Label className="text-8xl text-center font-extrabold text-[#3E1414]">
            Jadilah Bagian Dari Universe
          </Label>

          <Button className="flex justify-center items-center gap-2" variant="glass">
            Temukan Jalanmu
            <IconChevronCompactRight />
          </Button>

          {/* Card 1  */}
          <Box className="absolute w-85 h-85 bg-[var(--case-parent)] left-0 translate-x-[250px] translate-y-1 -rotate-10 bottom-0 rounded-lg ">
            <Box className="h-full flex justify-center items-center flex-col p-10 relative ">
              <Box className="flex justify-start items-start  h-auto w-full  ">
                <Label className="font-bold text-5xl">Seminar & Webbinar</Label>
              </Box>
              <Label className="text-xs">
                Tingkatkan Dirimu Pelajari Pelajari Skill Baru Dari Para Ahli
              </Label>
              <Laptop />
              <Box className="absolute bottom-0 translate-y-45 translate-x-50">
                <Laptop />
              </Box>
              <Box className="absolute bottom-0 translate-y-45 -translate-x-50">
                <Laptop />
              </Box>
            </Box>
          </Box>
          <Box className="absolute w-85 h-85 bg-[var(--case-child)] bottom-0 -translate-y-7 rounded-lg overflow-hidden ">
            <Box className="h-full flex justify-center items-center flex-col p-10 relative ">
              <Box className="flex justify-start items-start  h-auto w-full  ">
                <Label className="font-bold text-4xl">Event Lomba</Label>
              </Box>
              <Label className="text-xs">
                Tunjukkan Bakat Terbaikmu Ikutin Kompetisi dan raih hadiahnya
              </Label>
              <Box className="w-full h-auto scale-110 -translate-x-7 translate-y-5">
                <Phone />
              </Box>
            </Box>
          </Box>
          <Box className="absolute w-85 h-85 bg-[var(--case-tree)] bottom-0 -translate-x-[250px]  translate-y-1 rotate-10 right-0  rounded-lg overflow-hidden  ">
            <Box className="h-full flex justify-center items-center flex-col p-10 relative ">
              <Box className="flex justify-start items-start  h-auto w-full  ">
                <Label className="font-bold text-5xl">Seminar & Webbinar</Label>
              </Box>
              <Label className="text-xs">
                Rayakan dan Bersukaria Nikmati musik, seni, dan budaya
              </Label>
              <Box className="w-full h-auto scale-145 translate-y-15 ">
                <Sline />
              </Box>
            </Box>
          </Box>
          <Box className="absolute w-450 h-100 bg-[var(--shape-parent) bg-[var(--shape-parent)]  bottom-0 translate-y-80 rounded-t-[3000px] "></Box>
        </Box>
      </Box>
    </View>
  );
};
export default HomeHeroSection;
