//import App from './App';


//classNameName App extends React.Component{




//    render(){
//        return(
//                    <div classNameNameName="wrapper fadeInDown">
//                        <div id="formContent">

//                    <div classNameNameName="fadeIn first">

//                             <a classNameNameName="navbar-brand top-navbar-brand" href="#"><img src="http://192.168.150.33/AttendanceSystem/public/images/logo2.png"/> APEX</a>
//                    </div>


//                    <form>

//                      <input type="text" id="login" classNameNameName="fadeIn second" name="login" placeholder="login" />
//                      <input type="text" id="password" classNameNameName="fadeIn third" name="login" placeholder="password"/>
//                      <input type="submit" classNameNameName="fadeIn fourth" value="Log In" />
//                    </form>


//                    <div id="formFooter">

//                    </div>

//              </div>
//            </div>
//        );
//    }
//};



//ReactDOM.render(<App />, document.getElementById('root'));


     
          class Order extends React.Component{

            render(){
                return(
                <div>
                    <div className="row"> <div className="col-lg-4 col-lg-offset-4"> <input type="search" id="search" value="" className="form-control" placeholder="Search"/> </div> 
                   </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table" id="table">
                                <thead>
                                    <tr>
                                        <th>First column</th>
                                        <th>Second column</th>
                                        <th>Third column</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Introducing</td>
                                        <td>jQuery</td>
                                        <td>Searchable</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem</td>
                                        <td>Ipsum</td>
                                        <td>Dolor</td>
                                    </tr>
                                    <tr>
                                        <td>Some</td>
                                        <td>More</td>
                                        <td>Data</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                 </div>   
                );
            }
        };
      class DesignTool extends React.Component{
        render(){
            return(

                                 <div className="row">
                                        <div className="offset-md-3 col-md-6">
                                        
                                        <div id="accordion">
                                          <div className="card">
                                            <div className="card-header" id="headingOne">
                                              <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <legend>Motor Information</legend>
                                                </button>
                                              </h5>
                                            </div>

                                            <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                              <div className="card-body">
                                         <form action="r" method="post" accept-charset="utf-8" className="form" role="form">   
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-12">
                                                                 <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                      <button type="button" className="btn btn-secondary signup-btn">Standard Motor</button>
                                                                      <button type="button" className="btn btn-secondary signup-btn">Mini Motor</button>
                                                                    </div>            
                                                         </div>
                                                        
                                                    </div>
                                                                       
                                                      <div className="row">
                                                        <div className="col-xs-6 col-md-6">
                                                        <label>Brand</label>   
                                                            <select name="month" class = "form-control input-lg">
                                                            <option value="01">ABB</option>
                                                            <option value="02">ALLEN BRADLEY</option>
                                                            <option value="03">ALLEN BRADLEY</option>
      
                                                            </select>                        </div>
                                                          <div className="col-xs-6 col-md-6">
                                                              <label>Mini Motor</label>   
                                                            <select name="month" class = "form-control input-lg">
                                                            <option value="01">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                            <option value="02">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                            <option value="03">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                            <option value="04">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                       
                                                            </select>                        
                                                            </div>
                                                        
                                                    
                                                    </div>
                                                    
                                                    <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                                                        Next</button>
                                            </form>                </div>
                                            </div>
                                          </div>

                                          
                                        </div>
                                        
                                        
                                        
                                           
                                          </div>
                                </div>            
               
 
            );
        }
      };

      const Login = () => <h1>Login</h1>
      const Register = () => <h1>Register</h1>

     const Link = ReactRouterDOM.Link;
      const Route = ReactRouterDOM.Route;


      const App = () => (
    
          <ReactRouterDOM.HashRouter>
        
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">APEX</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                   <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" ><Link className="nav-link" to="/">Order</Link></li>
                        <li className="nav-item" ><Link className="nav-link" to="/DesignTool">DesignTool</Link></li>
                      </ul>
              
                <form className="form-inline my-2 my-lg-0">
                  <input className="btn btn-outline-success my-2 my-sm-0"  formaction="./login.html" value = "Sing Out" type="submit"/>
                </form>
              </div>
        </nav>
               <Route path="/" exact component={Order} />
          <Route path="/DesignTool" component={DesignTool} />
        </ReactRouterDOM.HashRouter>

      )


      ReactDOM.render(<App />, document.querySelector('#root'));