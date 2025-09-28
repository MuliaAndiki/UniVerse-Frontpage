import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { IconChevronCompactRight } from '@tabler/icons-react';
import Laptop from '@/components/svg/public/schema-laptop';
import Phone from '@/components/svg/public/schema-phone';
import Sline from '@/components/svg/public/schema-sline';
import { useEffect, useState } from 'react';

const HomeHeroSection = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [typing, setTyping] = useState<number>(0);
  const [display, setDisplay] = useState<string>('');

  const texts = ['Mencari Event ?', 'Jadilah Bagian Dari Universe', 'Temukan Jalanmu'];
  useEffect(() => {
    const currentText = texts[typing % texts.length];
    let i = 0;

    const typingInterval = setInterval(() => {
      setDisplay(currentText.slice(0, i + 1));
      i++;

      if (i === currentText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    const loop = setInterval(() => {
      setTyping((prev) => prev + 1);
    }, 4000);

    return () => {
      clearInterval(loop);
      clearInterval(typingInterval);
    };
  }, [typing]);

  return (
    <View>
      <Box className="flex min-h-screen justify-center  items-stretch relative z-0 overflow-hidden ">
        <Box className="grid grid-cols-1 grid-rows-[1fr_2fr] w-full  h-screen flex-col ">
          <Box className="flex justify-start items-center w-full flex-col tracking-widest gap-2 mt-20 p-2">
            <div className="text-xl font-light p-4 border rounded-full text-foreground/50 bg-foreground/10">
              {display}
              <span className="animate-pulse">|</span>
            </div>
            <Label className="text-7xl text-center font-extrabold w-full max-w-240 text-[#3E1414]">
              Jadilah Bagian Dari Universe
            </Label>

            <Button className="flex justify-center items-center gap-2" variant="glass">
              Temukan Jalanmu
              <IconChevronCompactRight />
            </Button>
          </Box>
          <Box className="w-full h-full flex justify-center items-center relative z-0  pt-15 ">
            <Box className="w-full flex justify-center items-center absolute top-95 z-[-1]">
              <div
                onMouseEnter={() => setIsActive(1)}
                onMouseLeave={() => setIsActive(null)}
                className={`absolute w-85 h-85 overflow-hidden left-0 bottom-0 translate-x-[250px] -rotate-10 rounded-lg ${isActive === 1 ? 'animate-slow-up bg-background border' : 'animate-slow-down '}  `}
              >
                <div className="w-full h-full  bg-[var(--case-parent)] absolute inset-0"></div>

                <div
                  className={`absolute inset-0 bg-background rounded-full  ${isActive === 1 ? 'animate-slow-shape-up' : 'animate-slow-shape-down '}`}
                />
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
              </div>

              <div
                onMouseEnter={() => setIsActive(2)}
                onMouseLeave={() => setIsActive(null)}
                className={`absolute w-85 h-85 bottom-0 rounded-lg overflow-hidden transition-transform duration-100 -translate-y-11 ease-in-out will-change-transform ${isActive === 2 ? 'animate-slow-up bg-background border' : 'animate-slow-down '}`}
              >
                <div className="w-full h-full  bg-[var(--case-child)] absolute inset-0"></div>

                <div
                  className={`absolute inset-0 bg-background rounded-full    ${isActive === 2 ? 'animate-slow-shape-up' : 'animate-slow-shape-down '}`}
                />
                <Box className="h-full flex justify-center items-center flex-col p-10 relative">
                  <Box className="flex justify-start items-start h-auto w-full">
                    <Label className="font-bold text-4xl">Event Lomba</Label>
                  </Box>
                  <Label className="text-xs">
                    Tunjukkan Bakat Terbaikmu Ikutin Kompetisi dan raih hadiahnya
                  </Label>
                  <Box className="w-full h-auto scale-110 -translate-x-7 translate-y-5">
                    <Phone />
                  </Box>
                </Box>
              </div>

              <div
                onMouseEnter={() => setIsActive(3)}
                onMouseLeave={() => setIsActive(null)}
                className={`absolute w-85 h-85  bottom-0 -translate-x-[250px] rotate-10 right-0 -translate-y-3 rounded-lg overflow-hidden ${isActive === 3 ? 'animate-slow-up bg-background border' : 'animate-slow-down '}`}
              >
                <div className="w-full h-full  bg-[var(--case-tree)] absolute inset-0"></div>

                <div
                  className={`absolute inset-0 bg-background rounded-full    ${isActive === 3 ? 'animate-slow-shape-up' : 'animate-slow-shape-down '}`}
                />
                <Box className="h-full flex justify-center items-center flex-col p-10 relative ">
                  <Box className="flex justify-start items-start h-auto w-full">
                    <Label className="font-bold text-5xl">Seminar & Webbinar</Label>
                  </Box>
                  <Label className="text-xs">
                    Rayakan dan Bersukaria Nikmati musik, seni, dan budaya
                  </Label>
                  <Box className="w-full h-auto scale-145 translate-y-15 ">
                    <Sline />
                  </Box>
                </Box>
              </div>
            </Box>
            <Box className="w-10000 h-400  bg-[var(--shape-parent)] rounded-full scale-200 translate-y-250 flex justify-center items-center z-[-1] "></Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};
export default HomeHeroSection;
