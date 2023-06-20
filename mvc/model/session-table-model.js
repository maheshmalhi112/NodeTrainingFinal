var connection = require('../../connection');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS SESSION (
    id INT PRIMARY KEY AUTO_INCREMENT,
    entry_pass_date DATETIME NOT NULL,
    entry_pass_gate VARCHAR(255) NOT NULL,
    is_approved BOOLEAN NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id), 
    status INT
)
`;

connection.query(createTableQuery, (error, results) => {
  if (error) {
    console.error('Error creating table:', error);
  } else {
    console.log('Table created successfully');
  }
});

connection.end((error) => {
    if (error) {
      console.error('Error closing database connection:', error);
    } else {
      console.log('Database connection closed');
    }
  });