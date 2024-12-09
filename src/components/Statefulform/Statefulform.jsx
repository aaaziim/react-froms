import { useState } from "react";

const Statefulform = () => {

    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@alpha.com");
    const [password, setPassword] = useState("Azim1234")
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        password.length < 6 ?
            setError("Password Must Be 6 Character or Longer")
            :
            setError("")
        console.log(`
            Hola! ${name}.
            Your Email is : ${email}.
            Your Password is : ${password}
            Thank You!`)
    }

    const handleNameOnChange = e => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleEmailOnChange = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePasswordOnChange = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    onChange={handleNameOnChange} type="text" name="name" value={name} />
                <br></br>
                <input
                    onChange={handleEmailOnChange}
                    type="email" name="email" value={email} />
                <br></br>
                <input
                    onChange={handlePasswordOnChange}
                    type="password" name="password" value={password} />
                <br></br>
                <input type="submit" value="Submit" />
                <br></br>
                {error && <p>${error}</p>}
            </form>
        </div>
    );
};

export default Statefulform;