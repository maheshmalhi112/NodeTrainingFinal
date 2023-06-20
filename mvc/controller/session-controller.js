const Session = require('../model/session-api-model');


const SessionController = {
  createSession: async (req, res) => {
    try {

    //console.log(req.body);
      const {entry_pass_date, entry_pass_gate, is_approved, user_id, status } = req.body;

        if (!entry_pass_date || !entry_pass_gate || !is_approved || !user_id || !status) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      const session = {
        
        entry_pass_date, 
        entry_pass_gate, 
        is_approved, 
        user_id, status 
      };

      await Session.insert(session);

      return res.status(201).json({ message: 'Session created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateSessionApproval: async(req, res)=>{
    console.log("model 1")    
    try {

        console.log(req.body);
          const {id, is_approved } = req.body;
          //const {id} = req.params.id;
    
            if (!id) {
            return res.status(400).json({ message: 'id not found' });
          }
    
          const session = {
            is_approved,    
            id
          };
    
          await Session.updateSessionIsApproval(session);
    
          return res.status(201).json({ message: 'Session Approval Status Updated successfully' });
        } catch (error) {
             console.error(error);
             return res.status(500).json({ message: 'Internal server error' });
           }
        
     },

     deleteSession: async (req, res)=>{
      try{

        const {id} = req.body;
        if(!id){
          return res.status(400).json({message: 'id not found'});
        }
        const session ={
          id
        }

        await Session.deleteSessionById(session);
        return res.status(201).json({message: 'Session record deleted successfully'});

      }catch(error){
        console.error(error)
        return res.status(500).json({message: 'Internal server error'});

      }
     },

     searchSessionDateUserName: async(req, res)=>{
      console.log("okkkkkkkkkkkkk"); 
     // return
      try {
  
          console.log(req.body);
            const {date, name } = req.query;
            //const {id} = req.params.id;
      
              if (!date || !name) {
              return res.status(400).json({ message: 'record not found' });
            }
      
            const session = {
              date,    
              name
            };
      
            await Session.fetchSessionDateUserName(session);
      
            return res.status(201).json({ message: 'record fatched' });
          } catch (error) {
               console.error(error);
               return res.status(500).json({ message: 'Internal server error' });
             }
          
       },


};

module.exports = SessionController;












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