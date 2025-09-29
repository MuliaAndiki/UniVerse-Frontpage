import { DivProps } from '@/types/ui';

const Container: React.FC<DivProps> = ({ as: Tag = 'main', children, ...props }) => {
  return <Tag {...props}>{children}</Tag>;
};
export default Container;
