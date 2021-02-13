import UserName from '../../asserts/UserName.png'
import Key from '../../asserts/key.svg'

const LoginPage = () => {
  return (
    <div className="loginForm">
   <h1>AdminCP</h1>
    <div className="box">
      <form className="form" name="myForm" method="POST">
        <div className="ImageRow">
        <div className="passwordImgWrapper">  
          <img style={{width:20,display:"flex",float:"left", height:20}} src={UserName} alt="username"></img>
        </div>
        <div className="passwordImgWrapper">
          <img src={Key} alt="username" />
        </div>
        </div>
        <div>
          <input type="text" name="Username" size="20" placeholder="Username" required></input>
          <input type="password" name="password" size="20" placeholder="Password" required/>
         </div>
      </form>
      <button className="btn">Login</button>
    </div>
  </div>
  )
}

export default LoginPage