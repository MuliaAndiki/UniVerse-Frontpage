import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-label';
import Image from 'next/image';
import Netbox from '@/components/icon/netbox';

const AboutSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center  items-center relative z-0  bg-[var(--shape-parent)] overflow-hidden">
        <Box className="flex flex-col items-center w-full justify-center text-background">
          <Label className="text-6xl font-extrabold ">Jelajahi</Label>
          <Label className="text-7xl font-extrabold text-center"> Peluang Tak Terbatas</Label>
          {/* 1 */}
          <Box className="absolute w-auto h-auto  top-0 left-0 p-15">
            <Box className="flex justify-center items-center gap-4">
              <Image alt="campus" src="/images/campus.svg" width={150} height={150} />
              <Box className="bg-[#FBE87F]/80 p-4 rounded-lg w-full max-w-80">
                <Label className="font-extrabold text-3xl bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B]">
                  A Single hub for all university events
                </Label>
              </Box>
            </Box>
          </Box>
          {/* 2 */}
          <Box className="absolute w-auto h-auto  top-0 right-0 p-15">
            <Box className="flex justify-center items-start flex-col w-full ">
              <Label className="font-light text-start p-2 rounded-full border border-background bg-background/10">
                Seamless Experience
              </Label>
              <Label className="text-start text-3xl font-extrabold w-full max-w-90 bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B] ">
                Easy registration and digital ticketing
              </Label>
            </Box>
          </Box>
          {/* 3 */}
          <Box className="absolute w-auto h-auto  bottom-0 left-0 p-15">
            <Box className="flex justify-center items-center ">
              <Image alt="toa" src="/images/toa.png" width={200} height={200} />
              <Label className="font-bold text-4xl w-full max-w-50 bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B] ">
                Automated Reminders
              </Label>
            </Box>
          </Box>
          {/* 4 */}
          <Box className="absolute w-auto h-auto  bottom-0 right-0 p-15 ">
            <Box className="flex justify-center items-center w-full relative">
              <Label className="text-3xl font-extrabold w-full max-w-50 bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B]">
                Empowering Collaboration
              </Label>
              <Box className="absolute scale-40 translate-x-30 translate-y-7">
                <Netbox />
              </Box>
              <Box className="absolute scale-40 -translate-x-30 -translate-y-7">
                <Netbox />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};
export default AboutSection;
