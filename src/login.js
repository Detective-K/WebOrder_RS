//import App from './App';


class App extends React.Component{

    render(){
        return(
                    <div className="wrapper fadeInDown">
                        <div id="formContent">

                    <div className="fadeIn first">

                             <a className="navbar-brand top-navbar-brand" href="#"><img src="http://192.168.150.33/AttendanceSystem/public/images/logo2.png"/> APEX</a>
                    </div>


                    <form>

                      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                      <input type="submit" formaction="./index.html" className="fadeIn fourth " value="Log In" />
                    </form>


                    <div id="formFooter">

                    </div>

              </div>
            </div>
        );
    }
};



ReactDOM.render(<App />, document.getElementById('root'));


