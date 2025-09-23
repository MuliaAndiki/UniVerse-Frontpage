import { SpreedProps } from '@/types/ui';

const Spread: React.FC<SpreedProps> = ({ className, orientation }) => {
  return (
    <div
      className={`
        bg-foreground
        ${orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'} 
        ${className}
      `}
    />
  );
};

export default Spread;
