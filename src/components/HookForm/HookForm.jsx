import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState("")
    // const [email, handleEmailChange] = useInputState("")
    const nameState = useInputState("")
    const emailState = useInputState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameState.value)
        console.log(emailState.value)
        // console.log(email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input {...nameState} type="text" name="name" />
                <br></br>
                <input
                    {...emailState}
                    type="email" name="email" />
                {/* <input value={name}
                    onChange={handleNameChange} type="text" name="name" />
                <br></br>
                <input
                    value={email}
                    onChange={handleEmailChange}
                    type="email" name="email" /> */}
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;