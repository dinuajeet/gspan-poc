import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';

function UserList() {
  const [users, setUsers] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  
  const [currentPage, setCurrentPage] = useState(1);  
  const [pageSize] = useState(5);  

  useEffect(() => {
    axios.get('http://localhost:5000/users')  
      .then((response) => {
        setUsers(response.data);  
        setLoading(false);  
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);  
      });
  }, []);  

  
  const indexOfLastUser = currentPage * pageSize;
  const indexOfFirstUser = indexOfLastUser - pageSize;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); 

  
  const onPageChange = (page) => {
    setCurrentPage(page);  
  };

  return (
    <div className="App">
      <h1>User List</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {!loading && !error && (
        <>
          <ul>
            {currentUsers.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> ({user.username}) - {user.email}
              </li>
            ))}
          </ul>

        
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={users.length} 
            onChange={onPageChange}  
            showSizeChanger={false} 
            align="end"  
          />
        </>
      )}
    </div>
  );
}

export default UserList;