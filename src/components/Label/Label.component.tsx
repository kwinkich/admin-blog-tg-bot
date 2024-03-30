import { ReactNode } from 'react';

export const Label = ({ children }: { children: ReactNode }) => {
	return <label className='label'>{children}</label>;
};
