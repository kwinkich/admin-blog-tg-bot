import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	click?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, click }) => {
	return (
		<button onClick={click} className='button'>
			{children}
		</button>
	);
};
