import { useState } from "react"
import {ToastContainer, toast} from "react-toastify";


function App(){

    const [form, setForm] = useState({
        name: "",
        file: null
    });

    const [sub, setSub] = useState(null);
    const [preview, setPreview] = useState(null);


    function validate(){
        if(form.name.trim() === ""){
            toast.error("Username can't be empty");
            return false;
        }
        if(!form.file){
            toast.error("Please upload the profile image");
            return false;
        }
        return true;
    }

    function handleForm(e){

        const {name,value} = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleImage(e){
        const file = e.target.files[0];
        if(file){
            const url = URL.createObjectURL(file);

            setForm({
                ...form,
                file: file
            })

            setPreview(url);
        }
    }

    function save(e){
        e.preventDefault();
        if(validate()){
            setSub(form);
            toast.success("Profile submitted succesfully!")
        }
    }

    return(<>
        <h1>User Profile Using Toast Notification</h1>

        <form onSubmit={save}>
            <input type="text" placeholder="Enter your name" name="name" value={form.name} onChange={handleForm}/> <br /> <br />

            <input type="file" name="file" onChange={handleImage}/> <br /> <br />

            <button>Submit</button>

            
        </form>
        {sub && (
            <div>
                <h1>User Profile</h1>
                <h3>{sub.name}</h3>
                <img src={preview} alt="" />
            </div>
        )}

        <ToastContainer/>
    
    </>)
}
export default App