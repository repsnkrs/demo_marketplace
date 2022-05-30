import './login.css';
import Button from '../../components/Button';

function Login() {
  return (
    <div className="background">
      <div className="main-container">
        <h2 className="title">LOGIN</h2>
        <input className="input-login" placeholder="Usuário" />
        <input className="input-login" placeholder="Senha" />
      </div>
      
      <div className="side-container">
        <Button
          primary={true}
          children="ENTRAR"
          onClick={() => console.log('btnClick')}
        />
      </div>
    </div>
  );
}

export default Login;