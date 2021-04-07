//import App from './App';


//className=NameName App extends React.Component{




//    render(){
//        return(
//                    <div className=NameNameName="wrapper fadeInDown">
//                        <div id="formContent">

//                    <div className=NameNameName="fadeIn first">

//                             <a className=NameNameName="navbar-brand top-navbar-brand" href="#"><img src="http://192.168.150.33/AttendanceSystem/public/images/logo2.png"/> APEX</a>
//                    </div>


//                    <form>

//                      <input type="text" id="login" className=NameNameName="fadeIn second" name="login" placeholder="login" />
//                      <input type="text" id="password" className=NameNameName="fadeIn third" name="login" placeholder="password"/>
//                      <input type="submit" className=NameNameName="fadeIn fourth" value="Log In" />
//                    </form>


//                    <div id="formFooter">

//                    </div>

//              </div>
//            </div>
//        );
//    }
//};



//ReactDOM.render(<App />, document.getElementById('root'));



class Order extends React.Component {

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4"> <input type="search" id="search" value="" className="form-control" placeholder="Search" /> </div>
                    <div className="col-lg-4 col-lg-offset-4">
                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modalSignUP">
                            Add Orders
                                </button>
                        <div className="modal fade" id="modalSignUP" tabindex="-1" role="dialog" aria-labelledby="ModalLSignUP" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalLSignUP">Add New Orders</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">P.O. NO</span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="P.O. NO" aria-label="P.O. NO" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">Currency</span>
                                                    </div>
                                                    <select className="form-control" id="currencySel">
                                                        <option></option>
                                                        <option>TWD</option>
                                                        <option>USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">Delivery way</span>
                                                    </div>
                                                    <select className="form-control" id="deliverySel">
                                                        <option>By UPS</option>
                                                        <option>BY DHL</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">Order Date</span>
                                                    </div>
                                                    <input type="text" className="form-control" value="2021/04/01" aria-describedby="basic-addon1" disabled />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">Delivery date</span>
                                                    </div>
                                                    <input type="date" class="form-control" id="deliveryDate" name="deliveryDate" />
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-success">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table" id="table">
                            <thead>
                                <tr>
                                    <th>Not Confirmed</th>
                                    <th>In processing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan='2'>
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link accordionBtn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <legend>      <div className="row">
                                                                <div className="col-md-3">AA00031003100</div>
                                                                <div className="col-md-3">OB21032902</div>
                                                                <div className="col-md-3">2021/03/29</div>
                                                            </div></legend>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <table className="table table-sm table-striped" >
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Ordering Code</th>
                                                                    <th scope="col">{"Q'ty"}</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>AB142-005-S2-P2 / YASKAWA SGM7G-30A</td>
                                                                    <td>5</td>
                                                                    <td>3,715</td>
                                                                    <td>

                                                                        <button type="button" className="btn btn-success btn-sm  " data-toggle="modal" data-target="#exampleModalCenter">
                                                                            Detail
                                                                    </button>

                                                                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                                                <div className="modal-content">
                                                                                    <div className="modal-header">
                                                                                        <h5 className="modal-title" id="exampleModalLongTitle">Detail</h5>
                                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                            <span aria-hidden="true">&times;</span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <dl className="row">
                                                                                            <dt className="col-sm-3">Part No.</dt>
                                                                                            <dd className="col-sm-9">A0100050322</dd>
                                                                                            <dt className="col-sm-3">Discount</dt>
                                                                                            <dd className="col-sm-9">0</dd>

                                                                                            <dt className="col-sm-3">Total</dt>
                                                                                            <dd className="col-sm-9">433</dd>

                                                                                            <dt className="col-sm-4">Lubrication</dt>
                                                                                            <dd className="col-sm-8">Grease</dd>
                                                                                            <dt className="col-sm-4">Warranty</dt>
                                                                                            <dd className="col-sm-8">yes<sup><font color="red">(2)</font></sup></dd>
                                                                                            <dt className="col-sm-4">Memo</dt>
                                                                                            <dd className="col-sm-8"></dd>
                                                                                            <dt className="col-sm-4">Customization</dt>
                                                                                            <dd className="col-sm-8">NEW STYLE LOW FRICTION</dd>
                                                                                        </dl>
                                                                                        <dl className="row">
                                                                                            <dt className="col-sm-12"><font color="red">(1)&nbsp;Non-standard lubrication.</font></dt>
                                                                                            <dt className="col-sm-12"><font color="red">(2)&nbsp;WARNING!!&nbsp;<sup>(*)</sup></font></dt>
                                                                                            <dt className="col-sm-12"><font color="red">(3)&nbsp;WARNING!!&nbsp;&nbsp;No Warranty by the selected ratio.</font></dt>
                                                                                            <dt className="col-sm-12"><font color="red">(4)&nbsp;WARNING!!&nbsp;&nbsp;No Warranty due to exceeding back-drive torque from application.</font></dt>
                                                                                            <dt className="col-sm-12"><font color="red">*&nbsp;Price for reference only. For the real price, refer to P/I.</font></dt>
                                                                                        </dl>
                                                                                    </div>


                                                                                    <div className="modal-footer">
                                                                                        <button type="button" className="btn btn-secondary " data-dismiss="modal">Close</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                         &nbsp;&nbsp;&nbsp;
                                                                        <button type="button" class="btn btn-danger btn-sm">
                                                                            <i class="fas fa-trash-alt"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </td>

                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <div id="accordion2">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link accordionBtn" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            <legend>      <div className="row">
                                                                <div className="col-md-4">BAC0011003074</div>
                                                                <div className="col-md-4">AC210331-2</div>
                                                                <div className="col-md-4">2021/03/31</div>
                                                            </div></legend>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseTwo" className="collapse " aria-labelledby="headingOne" data-parent="#accordion2">
                                                    <div className="card-body">
                                                        <table className="table table-sm table-striped" >
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Ordering Code</th>
                                                                    <th scope="col">{"Q'ty"}</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colspan="4">
                                                                        <div className="row">
                                                                            <div className="col-md-7 text-right"> AB115M1-020-S2-P1 / PANASONIC MDME152G1</div>
                                                                            <div className="col-md-1 text-right">4</div>
                                                                            <div className="col-md-2 text-right">3,937</div>
                                                                            <div className="col-md-2 text-right">
                                                                                <button type="button" className="btn btn-success btn-sm  " data-toggle="modal" data-target="#Modal2">
                                                                                    Detail
                                                                                </button>

                                                                                <div className="modal fade" id="Modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                                                        <div className="modal-content">
                                                                                            <div className="modal-header">
                                                                                                <h5 className="modal-title" id="exampleModalLongTitle">Detail</h5>
                                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                    <span aria-hidden="true">&times;</span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="modal-body">
                                                                                                <dl className="row">
                                                                                                    <dt className="col-sm-3">Part No.</dt>
                                                                                                    <dd className="col-sm-9">A0101041021</dd>
                                                                                                    <dt className="col-sm-3">Discount</dt>
                                                                                                    <dd className="col-sm-9">0</dd>

                                                                                                    <dt className="col-sm-3">Total</dt>
                                                                                                    <dd className="col-sm-9">15,748</dd>

                                                                                                    <dt className="col-sm-4">Lubrication</dt>
                                                                                                    <dd className="col-sm-8">Oil / Gel</dd>
                                                                                                    <dt className="col-sm-4">Warranty</dt>
                                                                                                    <dd className="col-sm-8">yes<sup><font color="red">(2)</font></sup></dd>
                                                                                                    <dt className="col-sm-4">Memo</dt>
                                                                                                    <dd className="col-sm-8"></dd>
                                                                                                    <dt className="col-sm-4">Customization</dt>
                                                                                                    <dd className="col-sm-8"></dd>
                                                                                                </dl>
                                                                                                <dl className="row">
                                                                                                    <dt className="col-sm-12"><font color="red">(1)&nbsp;Non-standard lubrication.</font></dt>
                                                                                                    <dt className="col-sm-12"><font color="red">(2)&nbsp;WARNING!!&nbsp;<sup>(*)</sup></font></dt>
                                                                                                    <dt className="col-sm-12"><font color="red">(3)&nbsp;WARNING!!&nbsp;&nbsp;No Warranty by the selected ratio.</font></dt>
                                                                                                    <dt className="col-sm-12"><font color="red">(4)&nbsp;WARNING!!&nbsp;&nbsp;No Warranty due to exceeding back-drive torque from application.</font></dt>
                                                                                                    <dt className="col-sm-12"><font color="red">*&nbsp;Price for reference only. For the real price, refer to P/I.</font></dt>
                                                                                                </dl>
                                                                                            </div>


                                                                                            <div className="modal-footer">
                                                                                                <button type="button" className="btn btn-secondary " data-dismiss="modal">Close</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <button type="button" class="btn btn-danger btn-sm">
                                                                                    <i class="fas fa-trash-alt"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
};
class DesignTool extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="offset-md-3 col-md-6">

                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <legend>Motor GearBox Information</legend>
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <form action="r" method="post" accept-charset="utf-8" className="form" role="form">


                                        <div className="row">
                                            <div className="col-xs-6 col-md-6">
                                                <label>Brand</label>
                                                <select name="month" className="form-control input-lg">
                                                    <option value="01">ABB</option>
                                                    <option value="02">ALLEN BRADLEY</option>
                                                    <option value="03">ALLEN BRADLEY</option>
                                                </select>
                                            </div>
                                            <div className="col-xs-6 col-md-6">
                                                <label>Model</label>
                                                <select name="month" className="form-control input-lg">
                                                    <option value="8C1.1.30.1.xxxxxx.G.xxB">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                    <option value="1326AB-A1G-11-xx">1326AB-A1G-11-xx</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-12">
                                                <label>GearBox</label>
                                                <select name="month" className="form-control input-lg">
                                                    <option selected="selected" value="R01">AB Series</option>
                                                    <option value="R02">ABR Series</option>
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
                    <input className="btn btn-outline-success my-2 my-sm-0" formaction="./login.html" value="Sing Out" type="submit" />
                </form>
            </div>
        </nav>
        <Route path="/" exact component={Order} />
        <Route path="/DesignTool" component={DesignTool} />
    </ReactRouterDOM.HashRouter>

)


ReactDOM.render(<App />, document.querySelector('#root'));