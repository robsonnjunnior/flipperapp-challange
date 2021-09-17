import { Button as StyledButton } from './styles';
import { IButton } from './button.model';

const Button = ({ label = 'BUTTON', handleClick, disabled }: IButton) => {
  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
