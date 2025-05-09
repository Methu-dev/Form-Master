import { useState } from "react";


const StateFullName = () => {
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [password , setPassword] = useState(null)
    const [error, setError] = useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        if (password.length < 6){
            setError("please 6 digite type your password") 
        }else{
            setError("")
        }
        console.log(name, number, password);
        
    }
    const handleChangeName = e =>{
        setName(e.target.value)
    }

    const handleChangeNumber = e =>{
        setNumber(e.target.value)
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeName} type="text" name="name" />
        <br />
        <input onChange={handleChangeNumber} type="number" name="number" />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
      
    </div>
  );
}

export default StateFullName
