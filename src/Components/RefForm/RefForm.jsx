import { useEffect, useRef } from "react";

const RefForm = () => {
    const RrfName = useRef(null)
    const RefPhone = useRef(null)
    const RefEmail = useRef(null)

    useEffect(()=>{
        RrfName.current.focus()
    },[])
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(RrfName.current.value);
        console.log(RefPhone.current.value);
        console.log(RefEmail.current.value);      
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={RrfName} type="text" name="name" />
        <br />
        <input ref={RefEmail} type="email" name="email" />
        <br />
        <input ref={RefPhone} type="text" name="phone" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default RefForm
