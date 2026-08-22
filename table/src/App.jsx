function StudentReport(){
  const students = [
  { id: 1, name: "Aman", marks: 85, course: "BCA", attendance: 92 },
  { id: 2, name: "Riya", marks: 45, course: "BCA", attendance: 78 },
  { id: 3, name: "Karan", marks: 72, course: "BBA", attendance: 55 },
  { id: 4, name: "Neha", marks: 30, course: "BCA", attendance: 95 },
  { id: 5, name: "Arjun", marks: 92, course: "BBA", attendance: 40 },
  { id: 6, name: "Sonia", marks: 55, course: "BCA", attendance: 65 }
];

  return(<>

    <h2>Student Performance Dashboard</h2>
    <table border="1" cellPadding="10px" borderColor="black">
      <tr style={{backgroundColor:"#2C3E50" , color: "white"}}>
        <th>Name</th>
        <th>Course</th>
        <th>Marks</th>
        <th>Attendence</th>
        <th>Final Status</th>
      </tr>

      {
        students.map((student,index)=>(
          <tr key={index} 
          style={{
            color: student.marks < 50 ? "red" : student.attendance < 60 ? "orange" : student.marks > 80 ? "green" : "black"
          }}
          >
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>{student.marks}</td>
            <td>{student.attendance}%</td>
            <td>
              {
                student.marks < 50 ? "Fail" : student.attendance<60 ? "Attendence Shortage" : "Pass" 
              }
            </td>
          </tr>
        ))
      }
    </table>

    <div class="statistics">
      <h3>Statistics</h3>
      <p>Total Students: {students.length}</p>
      <p>
        Class Average: {" "}
        {
          (students.reduce((sum, s)=> sum + s.marks, 0)/students.length).toFixed(2)
        }
      </p>
    </div>

    <div class="DeanList">
      <h3>Dean's List</h3>
      {
        students.filter((s)=> s.marks > 85).length>0 ? (
          <ul>
            {
              students.filter((s)=> s.marks>85).map((s)=>(
                <li key={s.id}>{s.name}</li>
              ))
            }
          </ul>
        ) : (
          <p>No students currently qualify  for the  Dean's List.</p>
        )
      }

    </div>

    <div class="BCA">
      <h3>BCA Honors</h3>
        <ul>
          {
            students.
            filter((s)=> s.course === "BCA" && s.marks > 50)
            .map((s)=>(
              <li key={s.id}>{s.name} - {s.marks}</li>
            ))
          }
        </ul>
          

    </div>

  </>)
}

export default StudentReport;