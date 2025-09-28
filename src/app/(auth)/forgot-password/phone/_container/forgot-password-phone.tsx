import Container from '@/components/ui/container';
import ForgotPasswordCardPhone from '@/core/section/auth/forgot-password-phone';

const ForgotPasswordPhoneContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <ForgotPasswordCardPhone />
    </Container>
  );
};

export default ForgotPasswordPhoneContainer;
