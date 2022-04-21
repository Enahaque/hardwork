const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Pritivi khovi-e- nirmom')
});

const users = [
  {id:1, name:"Navana", email:"navana@gmail.com", phone:"01716444444"},
  {id:2, name:"Kavana", email:"navana@gmail.com", phone:"01716444444"},
  {id:3, name:"Mavana", email:"navana@gmail.com", phone:"01716444444"},
  {id:4, name:"Javana", email:"navana@gmail.com", phone:"01716444444"},
  {id:5, name:"Havana", email:"navana@gmail.com", phone:"01716444444"},
  {id:6, name:"Lavana", email:"navana@gmail.com", phone:"01716444444"},
  {id:7, name:"Bavana", email:"navana@gmail.com", phone:"01716444444"},
];

app.get('/users',(req,res)=>{
  res.send(users);
});

app.get('/user/:id',(req,res)=>{
  console.log(req.params);
  // const id = req.params.id;
  // const id = (req.params.id);
  const id = parseFloat(req.params.id);
  // const user = users[id];
  // const user = users.find(u=>u.id == id);
  const user = users.find(u=>u.id === id);
  // res.send('finding user');
  res.send(user);
})

app.post('/user',(req,res)=>{
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send();
})

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`)
  console.log('Listening to port',port);
});
