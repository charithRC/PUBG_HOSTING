const express=require('express');
const teamControllers=require('../controllers/team-controllers');
const routers=express.Router();

routers.post('/createTeam',teamControllers.createTeam);
   
module.exports=routers;