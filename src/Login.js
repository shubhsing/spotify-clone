import './Login.css'
import { loginUrl } from './spotify'

function Login() {
  return (
    <div className='login'>
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-attempts-clarify-lack-google-cast-support-13.png" width="850" height="450"  alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login