import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-label';
const HomeHeroSection = () => {
  return (
    <View>
      <Box className="flex flex-col items-center justify-center h-screen  ">
        <Label className="text-4xl font-light p-4 border rounded-full text-foreground/50">
          LOOKINGS FOR EVENTS ?
        </Label>
      </Box>
    </View>
  );
};
export default HomeHeroSection;
