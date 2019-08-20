import React,{useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () =>{
  const [friends, setFriends] = useState(null)

  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => setFriends(res.data))
  },[friends]);
    return (
        <div>
        {friends && friends.map(el => <h1 key={el.name}>{el.name}</h1>)}
        <form >
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
          <button>Add Friend</button>
        </form>
        </div>
        )
}
export default FriendsList