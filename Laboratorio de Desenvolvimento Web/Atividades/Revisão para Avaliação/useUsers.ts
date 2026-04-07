import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './userSlice';

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);

  return {
    users,
    addUser: (user: any) => dispatch(addUser(user)),
    removeUser: (id: number) => dispatch(removeUser(id)),
  };
};
