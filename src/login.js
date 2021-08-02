//import App from './App';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
        this.loginClick = this.loginClick.bind(this);
    }

    loginClick() {
        const jsondata = {};
        jsondata["username"] = login.value;
        jsondata["password"] = password.value;
        fetch("http://127.0.0.1/APEX-API/api/order", {
            method: 'POST',
            body: JSON.stringify( jsondata ),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            return res.json();
        }).then(function (JS) {
            if (JS["code"].toString() == "200") {
                window.location.href ="index.html";
            }
            alert(JS["message"].toString());
            
            console.log(JS);
        }).catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">

                        <a className="navbar-brand top-navbar-brand" href="#"><img src="http://192.168.150.33/AttendanceSystem/public/images/logo2.png" /> APEX</a>
                    </div>


                    <form>

                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="button" onClick={this.loginClick} className="fadeIn fourth " value="Log In" />
                    </form>


                    <div id="formFooter">

                    </div>

                </div>
            </div>
        );
    }
};



ReactDOM.render(<App />, document.getElementById('root'));


