import { ReactNode, createContext, useContext, useState } from 'react';
import { UserData } from '../types/UserData';

interface AuthContextType {
	isVerify: boolean;
	userData: UserData | null;
	login: (userData: UserData) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
	isVerify: false,
	userData: null,
	login: () => {},
	logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isVerify, setIsVerify] = useState(false);
	const [userData, setUserData] = useState<UserData | null>(null);

	const login = (userData: UserData) => {
		setIsVerify(true);
		setUserData(userData);
	};

	const logout = () => {
		setIsVerify(false);
		setUserData(null);
	};

	return (
		<AuthContext.Provider value={{ isVerify, userData, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Хук для использования контекста в компонентах
export const useAuth = () => useContext(AuthContext);
