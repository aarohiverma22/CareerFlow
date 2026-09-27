import LoginFormSection from "./componenets/LoginFormSection"
import LoginLeftSection from "./componenets/LoginLeftSection"

const Login = () => {
  return (
    <div className="flex w-full h-screen bg-white">
        <LoginLeftSection/>
        <LoginFormSection/>
    </div>
  )
}

export default Login