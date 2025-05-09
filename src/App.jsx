import './App.css'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import Simplefrom from './Components/SingleFrom/Simplefrom'
import StateFullName from './Components/StateFullName/StateFullName'

function App() {

  const handleSingUp = data =>{
    console.log("singup", data);
    
  }

  const handleUpdateProfile = data =>{
    console.log("update profile", data);
    
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Simplefrom /> */}
      {/* <StateFullName/> */}
      {/* <RefForm/> */}
      <ReusableForm
        formTitle="Sing Up"
        handleSubmit={handleSingUp}
      ></ReusableForm>
      <ReusableForm
        formTitle="Profile Update"
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      ></ReusableForm>
    </>
  );
}

export default App
