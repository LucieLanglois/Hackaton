var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
   }
   mongoose.connect('mongodb+srv://Admin:weather@cluster0.n05jq.mongodb.net/Ticetac?retryWrites=true&w=majority',
      options,        
      function(err) {
       console.log(err);
      }
   );