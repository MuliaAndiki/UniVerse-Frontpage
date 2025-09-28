import View from '@/components/ui/view';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import FallingText from '@/components/bits/FallingText';
import { useMemo, useState } from 'react';
const DescriptionSection: React.FC = () => {
  const [resetKey, setResetKey] = useState<number>(0);
  const fallingText = useMemo(
    () => (
      <FallingText
        key={resetKey}
        text="RSesi Berbagi Forum Kreatif Kompetisi Event Lomba Talkshow Pameran Seminar Duel Workshop Expo Tantangan Pertandingan"
        highlightWords={['Forum', 'Pameran', 'Talkshow', 'Duel', 'Expo']}
        trigger="scroll"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.8}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    ),
    [resetKey]
  );
  return (
    <View>
      <Box className="relative z-0 flex min-h-screen items-center justify-center overflow-hidden rounded-t-lg shadow-top">
        <Box className="absolute inset-0 z-0 pointer-events-none p-2">{fallingText}</Box>
        <Box className="relative z-10 flex h-full w-full max-w-[700px] flex-col items-center justify-center gap-6 px-4 text-center">
          <h1 className="text-5xl font-extrabold">Ayo Ciptakan Pengalaman Luar Biasa Bersama</h1>
          <Button size="lg" variant={'glass'} onClick={() => setResetKey((prev) => prev + 1)}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </View>
  );
};

export default DescriptionSection;
