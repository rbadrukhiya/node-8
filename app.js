// crud mongodb

// npm i
// npm init -y
// npm mongoose


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

  const schema = mongoose.Schema;
  const data = new schema({
    name:({
        type:String
    }),
    email:({
        type:String
    })
  })

  const MyModel = mongoose.model('skywin', data);

  const model = new MyModel({
    name:"ravi1",
    email:"ravi1@gmail.com"
  })
//   model.save()
//   console.log('data is inserted');
  
  var get = async  ()=>{
   var data = await  MyModel.find();
    console.log(data);
  }
  get();

  var del = async (id) =>{
    var data = await MyModel.findByIdAndDelete(id)
    // console.log(id);
  }
  del('6458f60a5416d7de09c600d1')


  

