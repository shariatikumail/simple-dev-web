import './login.css'

export default function Login() {
  return (

    <div className="login_container">
       <form>
          <label>LOGIN</label>
          <div className="ser">
            <input id='emailINP' type="email" placeholder="Email" />
            <input id='passwordINP' type="password" placeholder="Password" />
            <button className="sumbitBtn" type="submit">Login</button>
          </div>
       </form>
    </div>

  );
};
