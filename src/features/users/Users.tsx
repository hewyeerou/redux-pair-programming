import { useDispatch } from 'react-redux';
//import {increment} from '../counter/reducers/counterSlice'
const Users = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({type: 'GET_ALL_USERS'})}>add</button>
    </div>
  )
}

export default Users;