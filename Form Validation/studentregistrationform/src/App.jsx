import { useState } from "react";


function App(){

  const [form, setForm] = useState({
    name: "",
    course: "",
    gender: "",
    terms: false
  });


  const [sub, setSub] = useState(null);
  const [error, setError] = useState({});

  function validate(){
    const newError = {};

    if(form.name.trim() === ""){
      newError.name = "Username can't be empty"
    }

    if(form.course === ""){
      newError.course = "Please select the course"
    }

    if(form.gender === ""){
      newError.gender = "Please select the gender"
    }

    if(!form.terms){
      newError.terms = "Please accept the terms and conditions"
    }

    setError(newError);
    
    return Object.keys(newError).length == 0;
  }

  function handleForm(e){
    const {name, value, type, checked} = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });

  }

  function save(e){
    e.preventDefault();
    if(validate()){
      setSub(form);
      alert("Registration Successful");
    }
    
  };

  return(<>
    <h1>Student Registration Form</h1>

    <form onSubmit={save}>
      <input type="text" placeholder="Enter your name" name="name" value={form.name} onChange={handleForm}/> <br />
      {error.name && (<span style={{color: "red"}}>{error.name}</span>)} <br />

      <select name="course" value={form.course} onChange={handleForm}> <br />
        <option value="">Select Course</option>
        <option value="React Development">React Development</option>
        <option value="AWS Cloud">AWS Cloud</option>
        <option value="Java Programming">Java Programming</option>
      </select>
      {error.course && (<span style={{color: "red"}}>{error.course}</span>)} <br /> <br />

      <label htmlFor="gender">Gender</label>
      <input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleForm}/> Male
      <input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleForm}/> Female <br />
      {error.gender && (<span style={{color: "red"}}>{error.gender}</span>)} <br />

      <input type="checkbox" name="terms" checked={form.terms} onChange={handleForm}/>
      <label htmlFor="">I accept the Terms and Conditions</label> <br />
      {error.terms && (<span style={{color: "red"}}>{error.terms}</span>)} <br />

      <button>Submit</button>
    </form>
  
  </>)
}

export default App;