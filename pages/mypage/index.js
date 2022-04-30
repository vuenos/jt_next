import {useState, useEffect} from 'react';
import axios from "axios";

const Mypage = () => {
  const [user, setUser] = useState({});

  const getProfile = async () => {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    try {
      const { data, status } = await axios.get('http://localhost:8888/api/users/profile', config );
      console.log(`#####`, data);
      if (status === 200) {
        setUser(data);
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>
      <h1>Mypage</h1>
      <h2>{user.email}<br />{user.name}</h2>
    </div>
  );
};

export default Mypage;
