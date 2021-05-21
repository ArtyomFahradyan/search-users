import { createContext } from 'react';

type UsersContextType = [any[] | null, (user: any[] | null) => void];

export const UsersContext = createContext<UsersContextType>([null, () => undefined]);
