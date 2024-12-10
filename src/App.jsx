import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefFrom from './components/RefFrom/RefFrom'
// import SimpleForms from './components/SimpleForms/SimpleForms'
// import Statefulform from './components/Statefulform/Statefulform'

function App() {

  const handleSignUpSubmit = data => {
    console.log(`
      Congratulations ${data.name}!
      Your registration is complete.
      Your Email: ${data.email}.
      Your Password : ${data.password}`)
  }
  const handleUpdateProfile = data => {
    console.log(`
      Congratulations ${data.name}!
      Your profile is updated.
      Your Email: ${data.email}.
      Your Password : ${data.password}`)
  }
  return (
    <>
      {/* <SimpleForms></SimpleForms> */}
      {/* <Statefulform></Statefulform> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        formBtnTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
      >
        <h4>Register now!</h4>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update Profile"}
        formBtnTitle={"Update"}
        handleSubmit={handleUpdateProfile}

      >
        <h4>Stay Updated!</h4>

      </ReusableForm>
    </>
  )
}

export default App
