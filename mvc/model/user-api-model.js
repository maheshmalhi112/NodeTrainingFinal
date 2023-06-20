const conn = require('../../connection');

const User = {
  insert: (user) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (first_name, last_name, cnic, mobile_number, status) VALUES (?, ?, ?, ?, ?)';
      const values = [user.first_name, user.last_name, user.cnic, user.mobile_number, user.status];

      conn.query(query, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  fetchAll: ()=>{
    return new Promise((resolve, reject)=>{
        const query = 'Select * from users'
        conn.query(query, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })

    })
  },
  
  fetchById: ()=>{
    return new Promise((resolve, reject)=>{
        const query = 'Select * from users'
        
        conn.query(query, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })

    })
  },
  
  updateUser: (user)=>{
    return new Promise((resolve, reject)=>{
        const query = 'UPDATE users SET first_name = ?, last_name =?, cnic=?, mobile_number=?, status=? WHERE id=?';
        const values = [user.first_name, user.last_name, user.cnic, user.mobile_number, user.status, user.id];
        
        conn.query(query, values, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })

    })
  },

  deleteById: (user)=>{
    return new Promise((resolve, reject)=>{
        const query = 'DELETE FROM users WHERE id = ?';
        const value = user.id;
        conn.query(query, value, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })

    })
  },
  
};

module.exports = User;
