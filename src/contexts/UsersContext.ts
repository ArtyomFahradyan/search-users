import { createContext } from 'react';
type PaginationType = { page: number; rowsPerPage: number };
type UsersContextType = [
    any[] | null,
    (user: any[] | null) => void,
    PaginationType | null,
    (pagination: PaginationType) => void
];

export const UsersContext = createContext<UsersContextType>([null, () => undefined, null, () => undefined]);
