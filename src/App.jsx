
import './App.css'
import Form from './Cmponents/form/Form'
import FromReuse from './Cmponents/formReuse/FromReuse'

function App() {
   
  const haldleSubmit = data =>{
    console.log(data);

  }
  const hadleUpdate = data =>{
    console.log(data);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <Form></Form> */}

      <FromReuse handleClk={haldleSubmit} btnText={"Submit"} formTitle={'Sign Up'}></FromReuse>
      <FromReuse handleClk={hadleUpdate} formTitle={"Update"} btnText={"Update"}></FromReuse>
      
    </>
  )
}

export default App
