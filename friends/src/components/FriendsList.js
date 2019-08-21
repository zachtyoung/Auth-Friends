import React,{useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () =>{
  const [friends, setFriends] = useState(null)
  const [credentials, setCredentials] = useState({name:'', age:'', email:''})

  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => setFriends(res.data))
  },[friends]);

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };
  
  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', credentials)
    .then(res => console.log(res))
  
  };
    return (
        <div>
        {friends && friends.map(el => <h1 key={el.id}>{el.name}</h1>)}
        <form onSubmit={addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={credentials.name}
          onChange={handleChange}
          />
            <input
            type="text"
            name="age"
            placeholder="Age"
            value={credentials.age}
          onChange={handleChange}
          />
            <input
            type="text"
            name="email"
            placeholder="Email"
            value={credentials.email}
          onChange={handleChange}
          />
          <button>Add Friend</button>
        </form>
        </div>
        )
}
export default FriendsList

