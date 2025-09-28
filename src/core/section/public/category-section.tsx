import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-label';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import CardCategoryHome from '@/components/card-category';
import { CardCategoryData } from '@/configs/component.config';
const CategorySection = () => {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <View>
      <Box className="flex flex-col items-center justify-center h-screen bg-[var(--shape-parent)] p-20 ">
        <Box className="w-full flex justify-center  items-center h-screen  flex-col border border-background rounded-4xl p-4">
          <Box className="flex justify-start items-start h-full   flex-col w-full text-background">
            <Label className="font-light">Your Events Start Here</Label>
            <Label className="font-extrabold text-7xl">Your Events </Label>
            <Box className="flex justify-center items-center gap-4">
              <Icon icon="octicon:sparkle-fill-24" width="74" height="74" />
              <Label className="font-extrabold text-7xl ">Your Events </Label>
            </Box>
            <Box className="w-full flex justify-center items-center ">
              {CardCategoryData.map((items, key) => (
                <CardCategoryHome
                  data={items}
                  key={key}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};
export default CategorySection;
