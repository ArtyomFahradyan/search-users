import { createContext } from 'react';
type UsersContextType = [
    string,
    (search: string) => void,
];

export const UsersContext = createContext<UsersContextType>(['', () => undefined]);
