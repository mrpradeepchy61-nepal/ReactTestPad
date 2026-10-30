import { useState } from "react";


function App(){

    const [form, setForm] = useState({
      name: "",
      email: "",
      pass: ""
    });
    
    const [sub, setSub] = useState(null);
    const [error, setError] = useState({});

    function Validate(){
      const newError = {};

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if(form.name.trim() === ""){
        newError.name = "Employee name must not be empty"
      }

      if(!form.email.match(emailRegex)){
        newError.email = "Email must be in valid format";
      }

      if(form.pass.length <= 6){
        newError.pass = "Password must contain at least 6 characters"
      }

      setError(newError);

      return Object.keys(newError).length == 0;

    }


    function formHandle(e){
      const {name, value} = e.target;

      setForm({
        ...form,
        [name] : value
      });

    }

    function save(e){
      e.preventDefault();

      if(Validate()){
        setSub(form)
        alert("Registration successful");
      };

    }


  return(<>

    <h1>Employee Registration Form</h1>

    <form onSubmit={save}>
      <input type="text" placeholder="Enter your name" value={form.name} name="name" onChange={formHandle}/> <br />
      {error.name && (<span style={{color:"red"}}>{error.name}</span>)} <br />

      <input type="email" placeholder="Enter your email" value={form.email} name="email" onChange={formHandle}/> <br />
      {error.email && (<span style={{color:"red"}}>{error.email}</span>)} <br />
      
      <input type="password" placeholder="Enter your password" value={form.pass} name="pass" onChange={formHandle}/> <br />
      {error.pass && (<span style={{color:"red"}}>{error.pass}</span>)} <br />

      <button type="submit">Login</button>
    </form>

   

  </>)
}
export default App;