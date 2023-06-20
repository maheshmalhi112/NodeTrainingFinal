const conn = require('../../connection');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    cnic VARCHAR(13) NOT NULL UNIQUE,
    mobile_number VARCHAR(11) NOT NULL,
    status INT
  )
`;

conn.query(createTableQuery, (error, results) => {
  if (error) {
    console.error('Error creating table:', error);
  } else {
    console.log('Table created successfully');
  }
});

conn.end((error) => {
    if (error) {
      console.error('Error closing database connection:', error);
    } else {
      console.log('Database connection closed');
    }
  });