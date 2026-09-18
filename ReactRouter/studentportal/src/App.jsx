
import {Routes, Route} from "react-router-dom"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Student from "./component/Student"
import Profile from "./component/Profile"
import Courses from "./component/Courses"
import "./App.css"

function App(){
  return(<>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/student" element={<Student/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="courses" element={<Courses/>}/>
      </Route>
    </Routes>
  </>)
}
export default App