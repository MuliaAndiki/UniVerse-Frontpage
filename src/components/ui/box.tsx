import { DivProps } from '@/types/ui';

const Box: React.FC<DivProps> = ({ as: Tag = 'main', children, className }) => {
  return <Tag className={className}>{children}</Tag>;
};
export default Box;
