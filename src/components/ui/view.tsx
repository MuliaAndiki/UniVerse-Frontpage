import { DivProps } from '@/types/ui';
export default function View({ as: Tag = 'section', children, ...props }: DivProps) {
  return <Tag {...props}>{children}</Tag>;
}
