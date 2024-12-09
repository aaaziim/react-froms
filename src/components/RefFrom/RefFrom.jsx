import { useEffect } from "react";
import { useRef } from "react";

const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    useEffect(() => {
        nameRef.current.focus()
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={nameRef} type="text" name="name" />
                <br></br>
                <input ref={emailRef} type="email" defaultValue='john@api.com' name="email" />
                <br></br>
                <input ref={passwordRef} type="password" name="password" id="" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;