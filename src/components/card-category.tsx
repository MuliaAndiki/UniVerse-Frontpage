import { IconArrowDownRight, IconArrowRight } from '@tabler/icons-react';
import Box from './ui/box';
import { Button } from './ui/button';
import { Label } from '@radix-ui/react-label';
import Image from 'next/image';
import { CardCategoryType } from '@/types/components';

interface CardCategoryProps {
  isActive: number;
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
  data: CardCategoryType;
}

const CardCategoryHome: React.FC<CardCategoryProps> = ({ isActive, setIsActive, data }) => {
  const handleShape = () => {
    switch (data.isActice) {
      case 1:
        return 'bg-[var(--case-parent)]';

      case 2:
        return 'bg-[var(--case-child)]';

      case 3:
        return 'bg-[var(--case-tree)]';

      default:
        return 'rounded-md bg-gray-300';
    }
  };
  return (
    <div
      onMouseEnter={() => setIsActive(data.isActice)}
      onMouseLeave={() => setIsActive(1)}
      className=" h-screen max-h-130 flex justify-center items-center mt-4 p-10 "
    >
      <Box
        className={`h-full flex-col w-auto flex justify-start items-end relative overflow-hidden ${isActive === data.isActice ? 'animate-expand-left' : 'animate-collapse-right'}`}
      >
        <div className="z-1 p-5 flex justify-center items-center">
          {isActive === data.isActice ? (
            <Button className="size-15 z-0 " variant={'default'}>
              <IconArrowRight size={150} />
            </Button>
          ) : (
            <Button className="size-15 z-0" variant={'white'}>
              <IconArrowDownRight size={150} />
            </Button>
          )}
        </div>

        <Image alt="card" src={data.image} fill className="object-cover absolute z-[0]" />

        <Box
          className={`absolute bottom-0 ${handleShape()} transition-[filter,transform,opacity,width,height] duration-700 ease-in-out overflow-hidden ${isActive === data.isActice ? 'w-full h-50 rounded-tr-[130px] translate-y-0 blur-0 opacity-100 scale-100' : 'w-100 h-80 translate-y-20 blur-2xl translate-x-12 '}`}
        >
          <Box className="flex justify-center items-center p-4 flex-col w-full transition-opacity duration-500 delay-200">
            <Label className="text-4xl font-black">{data.title}</Label>
            <h1>{data.desc}</h1>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CardCategoryHome;
