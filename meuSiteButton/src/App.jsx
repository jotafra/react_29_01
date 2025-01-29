
function App() {
  return (
  <div>
    <h1>Something</h1>
    <p> Exemplo 2 de componetização</p>
    <Button/>
  </div>
  );
}
function Button(){
  function click(){
    alert("Você clicou no botão Create");
  }

  return(
    <Button style={{padding:"20px 20px", fontSize:"16px", cursor:"pointer", color:"green" }} onClick={()=>click()}> ButtonCreate </Button>
    
  )
}

export default App
