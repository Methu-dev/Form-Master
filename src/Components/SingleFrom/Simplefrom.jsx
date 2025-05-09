import React from 'react'

const Simplefrom = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
        console.log("submit you button")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name'/>
        <br />
        <input type="text" name='email' />
        <br />
        <input type="text" name='phone' />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Simplefrom
