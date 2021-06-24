var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
   }
   mongoose.connect('mongodb+srv://dev2:1234@cluster0.pns7r.mongodb.net/Ticetac?retryWrites=true&w=majority',
      options,        
      function(err) {
       console.log(err);
      }
   );


