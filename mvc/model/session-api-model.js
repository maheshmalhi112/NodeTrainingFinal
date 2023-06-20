const conn = require('../../connection');

const Session = {
  insert: (session) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO session (entry_pass_date, entry_pass_gate, is_approved, user_id, status) VALUES (?, ?, ?, ?, ?)';
      const values = [session.entry_pass_date, session.entry_pass_gate, session.is_approved, session.user_id, session.status];

      conn.query(query, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  updateSessionIsApproval: (session)=>{
    return new Promise((resolve, reject)=>{
        const query = 'UPDATE session SET is_approved = ? WHERE id=?';
        const values = [session.is_approved, session.id];
        
        conn.query(query, values, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })

    })
  },

  deleteSessionById :(session)=>{
    return new Promise((resolve, reject)=>{
      const query = 'DELETE from session where id =?';
      const value = [session.id];

      conn.query(query, value, (error, result)=>{
        if(error){
          reject(error)
        }else{
          resolve(result)
        }
      })
      
    })
  },

  fetchSessionDateUserName: (session)=>{
    return new Promise((resolve, reject)=>{
        const query = 'SELECT s.entry_pass_date AS DATE, u.first_name AS NAME FROM SESSION s JOIN users u ON s.user_id = u.id WHERE u.first_name ="'+ session.name+'"AND s.entry_pass_date =+' `${session.date}`        
        conn.query(query, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })

    })
  },
};


module.exports = Session;