import { useState, useEffect } from 'react';
import Box from './ui/box';
import Image from 'next/image';
import { OrbitUnivType } from '@/types/components';

const OrbitUniv: React.FC<OrbitUnivType> = ({ image }) => {
  // posisi dasar
  const positions = [
    'translate-y-43 ',
    'translate-y-60 left-90',
    'translate-y-105 left-10',
    'translate-y-105 right-10',
    'translate-y-60 right-90',
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const rotationPattern = [
    [0, 1, 2, 3, 4],
    [4, 0, 1, 2, 3],
    [3, 4, 0, 1, 2],
    [2, 3, 4, 0, 1],
    [1, 2, 3, 4, 0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % rotationPattern.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentPositions = rotationPattern[currentStep];

  const getBoxStyle = (posIndex: number) => {
    const isCenter = posIndex === 0;
    return `
    ${isCenter ? 'w-45 h-45 p-6 smooth-translateY ' : 'w-40 h-40 p-4 blur-xs'} 
    rounded-full ${positions[posIndex]} absolute
    transition-all duration-700 ease-in-out
    ${isCenter ? 'z-10 bg-background' : 'z-[-2] bg-background/70'}
  `;
  };

  return (
    <>
      <Box className={getBoxStyle(currentPositions[0])}>
        <Box className="flex justify-center items-center h-full w-full">
          <Image alt="univ" src={image.logo} width={150} height={150} />
        </Box>
      </Box>

      <Box className={getBoxStyle(currentPositions[1])}>
        <Box className="flex justify-center items-center h-full w-full">
          <Image alt="univ" src={image.logo5} width={150} height={150} />
        </Box>
      </Box>

      <Box className={getBoxStyle(currentPositions[2])}>
        <Box className="flex justify-center items-center h-full w-full">
          <Image alt="univ" src={image.logo3} width={150} height={150} />
        </Box>
      </Box>

      <Box className={getBoxStyle(currentPositions[3])}>
        <Box className="flex justify-center items-center h-full w-full">
          <Image alt="univ" src={image.logo2} width={150} height={150} />
        </Box>
      </Box>

      <Box className={getBoxStyle(currentPositions[4])}>
        <Box className="flex justify-center items-center h-full w-full">
          <Image alt="univ" src={image.logo4} width={150} height={150} />
        </Box>
      </Box>

      {/* lingkaran parent */}
      <Box className="w-55 h-55 bg-[var(--shape-parent)] rounded-full translate-y-43 absolute z-1"></Box>
    </>
  );
};

export default OrbitUniv;
