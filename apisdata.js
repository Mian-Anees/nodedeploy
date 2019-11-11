const mongoose=require('mongoose');



function signup(id,id1) {

   const idname=id;
   const idpasscode=id1;
   mongoose.connect('mongodb+srv://Miananees:Mian12345@gettingstarted-jtf43.mongodb.net/test?retryWrites=true&w=majority',{

      useNewUrlParser:true,
      useUnifiedTopology: true
   });

   
}
module.exports.signup=signup;