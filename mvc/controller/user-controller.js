const User = require('../model/user-api-model');


const UserController = {
  createUser: async (req, res) => {
    try {

    //console.log(req.body);
      const {first_name, last_name, cnic, mobile_number, status } = req.body;

        if (!first_name || !last_name || !cnic || !mobile_number || !status) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      const user = {
        
        first_name, 
        last_name, 
        cnic, 
        mobile_number, 
        status
      };

      await User.insert(user);

      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  fetchAllUsers: async(req, res)=>{

 console.log(res);  
 try {
          const users = await User.fetchAll();
          return res.status(200).json(users);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
     
  },

  fetchUserById: async(req, res)=>{
    //console.log("model 1")    
    try {
        
            
             const users = await User.fetchById();
             return res.status(200).json(users.find((user) => user.id == req.params.id));
           } catch (error) {
             console.error(error);
             return res.status(500).json({ message: 'Internal server error' });
           }
        
     },

     updateUserById: async(req, res)=>{
        console.log("model 1")    
        try {

            console.log(req.body);
              const {first_name, last_name, cnic, mobile_number, status, id } = req.body;
              //const {id} = req.params.id;
        
                if (!first_name || !last_name || !cnic || !mobile_number || !status || !id) {
                return res.status(400).json({ message: 'give all data' });
              }
        
              const user = {
                
                first_name, 
                last_name, 
                cnic, 
                mobile_number, 
                status,
                id
              };
        
              await User.updateUser(user);
        
              return res.status(201).json({ message: 'User updated successfully' });
            } catch (error) {
                 console.error(error);
                 return res.status(500).json({ message: 'Internal server error' });
               }
            
         },
    
         deleteUserById: async(req, res)=>{
            console.log("model 1")    
            try {
    
                console.log(req.body);
                  const {id } = req.body;
                  //const {id} = req.params.id;
            
                    if (!id) {
                    return res.status(400).json({ message: 'id not given' });
                  }
            
                  const user = {
                      id
                  };
            
                  await User.deleteById(user);
            
                  return res.status(201).json({ message: 'User deleted successfully' });
                } catch (error) {
                     console.error(error);
                     return res.status(500).json({ message: 'Internal server error' });
                   }
                
             },
  
};




module.exports = UserController;












// const user = require('../model/user-api-model');

// const createUser = function(req, res) {
// const newUser = new user(req.body);
// //handles null error
// if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//   res.status(400).send({ error:true, message: 'Please provide all required field' });
// }else{
// user.create(newUser, function(err, employee) {
//   if (err)
//   res.send(err);
//   res.json({error:false,message:"Employee added successfully!",data:employee});
// });
// }
// };