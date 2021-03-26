//import App from './App';


//class App extends React.Component{




//    render(){
//        return(
//                    <div className="wrapper fadeInDown">
//                        <div id="formContent">

//                    <div className="fadeIn first">

//                             <a className="navbar-brand top-navbar-brand" href="#"><img src="http://192.168.150.33/AttendanceSystem/public/images/logo2.png"/> APEX</a>
//                    </div>


//                    <form>

//                      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
//                      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
//                      <input type="submit" className="fadeIn fourth" value="Log In" />
//                    </form>


//                    <div id="formFooter">

//                    </div>

//              </div>
//            </div>
//        );
//    }
//};



//ReactDOM.render(<App />, document.getElementById('root'));



     const Link = ReactRouterDOM.Link;
      const Route = ReactRouterDOM.Route;


      const App = () => (
        <ReactRouterDOM.HashRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </ReactRouterDOM.HashRouter>
      )

      const Home = () => <h1>Home</h1>
      const Login = () => <h1>Login</h1>
      const Register = () => <h1>Register</h1>

      ReactDOM.render(<App />, document.querySelector('#root'));