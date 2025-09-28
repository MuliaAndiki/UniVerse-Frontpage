import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-label';
import MockUpPhone from '@/components/svg/public/mock-up';
import OrbitUniv from '@/components/orbit-univ';
import { OrbitUnivData } from '@/configs/component.config';
const UnivSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center  items-start relative z-0 overflow-hidden  bg-[var(--shape-parent)] ">
        <Box className="grid grid-cols-1 grid-rows-[1fr_2fr] w-full  h-screen flex-col  ">
          <Box className="flex justify-center items-center flex-col   ">
            <Label className="text-7xl font-extrabold text-background text-center w-full max-w-170">
              Your Campus Life In Your Pocket
            </Label>

            {OrbitUnivData.map((item, key) => (
              <OrbitUniv image={item.image} key={key} />
            ))}
            <Box className="grid grid-cols-[1fr_2fr] grid-rows-1  w-full h-full absolute z-5 bottom-0 translate-y-45">
              <Box className="flex justify-center  items-center flex-col h-full mt-4">
                <div className="w-250 z-[-2] absolute translate-x-35 translate-y-20 h-auto">
                  <MockUpPhone />
                </div>
              </Box>
              <Box className="flex justify-center  items-center flex-col h-full overflow-auto mt-4">
                <Box className="flex justify-center items-center flex-col w-full max-w-140">
                  <Label className="text-6xl  text-justify font-extrabold">
                    Event Kampus di Genggamanmu
                  </Label>
                  <Label className="text-lg font-extralight">
                    Siap untuk pengalaman luar biasa? Universe membantumu menemukan, mendaftar, dan
                    berpartisipasi dalam event-event pilihan. Dapatkan notifikasi, kelola tiket, dan
                    simpan sertifikatmu, semua dalam satu platform yang mudah digunakan.
                  </Label>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="w-full h-full flex justify-center items-center relative">
            <Box className="w-700 h-400  bg-background rounded-full scale-130 translate-y-90 flex justify-center items-center "></Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default UnivSection;
