import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'

const About = () => { 
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get('/users')
      .then((users) => {
        console.log(users);
        setUsers(users.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>About</div>
  )
}

export default About