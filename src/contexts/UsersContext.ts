import { createContext } from 'react';
import { User } from '@hoory/protos/build/web/src/common_pb';

type UserContextType = [User.AsObject | null, (user: User.AsObject | null) => void];

export const UserContext = createContext<UserContextType>([null, () => undefined]);
