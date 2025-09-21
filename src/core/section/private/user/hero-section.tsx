import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Label } from '@radix-ui/react-dropdown-menu';

const DashboardUserHeroSection = () => {
  return (
    <View>
      <Box className="flex flex-col items-center justify-center h-screen">
        <Label>Setup Dashboard User</Label>
      </Box>
    </View>
  );
};

export default DashboardUserHeroSection;
