
function ProfileCard({name, age, isOnline}){
  return(
  <>
    <h1>{name}</h1>
    <h2>{age}</h2>
    
    {
      isOnline ? 
        <h2 style={{color: "green"}}>Online</h2> : <h2 style={{color: "grey"}}>Offline</h2>
    }
  
  </>
  )
}

function App(){
  return(<>
  <ProfileCard name="Alice" age={23} isOnline={true}/>
  <ProfileCard name="Bob" age={21} isOnline={false}/>
  <ProfileCard name="Carlos" age={25} isOnline={true}/>
  </>)
}
export default App;