function WelcomeMessage({ name, language }){
    return(
      <h3>{language === "en" ? `Hello, ${name}!` : `Bonjour, ${name}!`}</h3>
    )
}

function App(){
  return(<>
    <WelcomeMessage name="Alice" language="en" />
    <WelcomeMessage name="Chloe" language="fr" />
  </>)
}
export default App;