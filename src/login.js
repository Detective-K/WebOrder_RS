//import App from './App';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
        this.loginClick = this.loginClick.bind(this);
    }

    loginClick() {
        fetch("http://127.0.0.1/APEX-API/api/order", {
            method: 'GET',
            body: JSON.stringify({})
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            return res.json();
        }).then(function (JS) {
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
                        <input type="submit" formaction="./index.html" className="fadeIn fourth " value="Log In" />
                        <input onClick={this.loginClick} className="fadeIn fourth " value="Log In2" />
                    </form>


                    <div id="formFooter">

                    </div>

                </div>
            </div>
        );
    }
};



ReactDOM.render(<App />, document.getElementById('root'));


