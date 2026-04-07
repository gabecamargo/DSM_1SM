import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userSlice';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);

  return (
    <div>
      <button onClick={() => dispatch(addUser({ id: Date.now(), name: 'User' }))}>
        Add User
      </button>

      <ul>
        {users.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
