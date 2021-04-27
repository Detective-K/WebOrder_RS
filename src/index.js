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
            <main role="main" className="container-fluid">
                <br />
                <br />
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

                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#home">Not Confirmed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#menu1">In Processing</a>
                            </li>

                        </ul>
                        <div class="tab-content">
                            <div id="home" class="container tab-pane active"> <br />
                                <dl class="row no-gutters">
                                    <dd class="col-sm-12">
                                        <h4><span class="badge badge-secondary">2021/03/29</span></h4>
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header no-padding-LR no-padding-TB " id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link accordionBtn no-padding-LR" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <legend>      <div className="row no-gutters">
                                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 ">AA00031003100</div>
                                                                <div className="col-6  col-sm-6 col-md-6 col-lg-6 ">OB21032902</div>
                                                            </div></legend>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <table className="table table-sm table-striped table-bordered" >
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="4" >
                                                                        <div className="row">
                                                                            <div className="  col-6 col-sm-5 col-md-7 col-lg-7 col-xl-7    ">Ordering Code </div>
                                                                            <div className="col-3 col-sm-3  col-md-2  col-lg-1 col-xl-1  text-right">{"Q'ty"}</div>
                                                                            <div className="col-3 col-sm-3 col-md-2   col-lg-2 col-xl-2  text-right">Unit Price</div>
                                                                            <div className="col-1 col-sm-1 col-md-12  col-lg-12 col-xl-2  text-right "></div>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="4">
                                                                        <div className="row">
                                                                            <div className="col-12  col-sm-6 col-md-7 col-lg-7 col-xl-7  "> AB142-005-S2-P2 / YASKAWA SGM7G-30A</div>
                                                                            <div className="col-9  col-sm-2 col-md-2 col-lg-1 col-xl-1 text-right ">5</div>
                                                                            <div className="col-3 col-sm-3  col-md-2 col-lg-2 col-xl-2 text-right">3,715</div>
                                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-2  col-xl-2 text-right">
                                                                                <button type="button" className="btn btn-info btn-sm  " data-toggle="modal" data-target="#Modal1">
                                                                                    Detail
                                                                                </button>
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <button type="button" class="btn btn-danger btn-sm">
                                                                                    <i class="fas fa-trash-alt"></i>
                                                                                </button>
                                                                            </div>
                                                                            <div className="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                                <div className="modal-dialog modal-dialog-centered" role="document">
                                                                                    <div className="modal-content">
                                                                                        <div className="modal-header">
                                                                                            <h5 className="modal-title" id="exampleModalLongTitle">AB142-005-S2-P2 / YASKAWA SGM7G-30A</h5>
                                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                <span aria-hidden="true">&times;</span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div className="modal-body">
                                                                                            <dl className="row">
                                                                                                <dt className="col-5 col-sm-5">{"Quantity"}</dt>
                                                                                                <dd className="col-7 col-sm-7">5</dd>
                                                                                                <dt className="col-5 col-sm-5">Unit Price</dt>
                                                                                                <dd className="col-7 col-sm-7">3,715</dd>
                                                                                                <dt className="col-5 col-sm-5">Part No.</dt>
                                                                                                <dd className="col-7 col-sm-7">A0101041021</dd>
                                                                                                <dt className="col-5 col-sm-5">Discount</dt>
                                                                                                <dd className="col-7 col-sm-7">0</dd>

                                                                                                <dt className="col-5 col-sm-5">Total Price</dt>
                                                                                                <dd className="col-7 col-sm-7">15,748</dd>
                                                                                                <dt className="col-5 col-sm-5">Currency</dt>
                                                                                                <dd className="col-7 col-sm-7">TWD</dd>

                                                                                                <dt className="col-5 col-sm-5">Lubrication</dt>
                                                                                                <dd className="col-7 col-sm-7">Oil / Gel</dd>
                                                                                                <dt className="col-5 col-sm-5">Warranty</dt>
                                                                                                <dd className="col-7 col-sm-7">Yes<sup><font color="red">(2)</font></sup></dd>
                                                                                                <dt className="col-5 col-sm-5">Memo</dt>
                                                                                                <dd className="col-7 col-sm-7"></dd>
                                                                                                <dt className="col-5 col-sm-5">Customization</dt>
                                                                                                <dd className="col-7 col-sm-7"></dd>
                                                                                            </dl>
                                                                                            <dl className="row">
                                                                                                <dt className="col-sm-12 description-red text-danger">(1)&nbsp;Non-standard lubrication.</dt>
                                                                                                <dt className="col-sm-12 description-red text-danger">(2)&nbsp;WARNING!!&nbsp;<sup>(*)</sup>></dt>
                                                                                                <dt className="col-sm-12 description-red text-danger">(3)&nbsp;WARNING!!&nbsp;&nbsp;No Warranty by the selected ratio.</dt>
                                                                                                <dt className="col-sm-12 description-red text-danger">(4)&nbsp;WARNING!!&nbsp;&nbsp;No Warranty due to exceeding back-drive </dt>
                                                                                                <dt className="col-sm-12 description-red text-danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;torque from application.</dt>
                                                                                                <dt className="col-sm-12 description-red text-danger">*&nbsp;Price for reference only. For the real price, refer to P/I.</dt>
                                                                                            </dl>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan="4">
                                                                        <div className="row">
                                                                            <div className="col-12  col-sm-6 col-md-7 col-lg-7 col-xl-7  "> PAII090-005-S2 / MITSUBISHI HG-KR73 </div>
                                                                            <div className="col-9  col-sm-2 col-md-2 col-lg-1 col-xl-1 text-right ">11</div>
                                                                            <div className="col-3 col-sm-3  col-md-2 col-lg-2 col-xl-2 text-right">4,431</div>
                                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-2  col-xl-2 text-right">
                                                                                <button type="button" className="btn btn-info btn-sm  " data-toggle="modal" data-target="#Modal2">
                                                                                    Detail
                                                                                </button>
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <button type="button" class="btn btn-danger btn-sm">
                                                                                    <i class="fas fa-trash-alt"></i>
                                                                                </button>
                                                                            </div>
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
                                                                                                <dt className="col-5 col-sm-5">Part No.</dt>
                                                                                                <dd className="col-7 col-sm-7">A0101041021</dd>
                                                                                                <dt className="col-5 col-sm-5">Discount</dt>
                                                                                                <dd className="col-7 col-sm-7">0</dd>

                                                                                                <dt className="col-5 col-sm-5">Total</dt>
                                                                                                <dd className="col-7 col-sm-7">15,748</dd>

                                                                                                <dt className="col-5 col-sm-5">Lubrication</dt>
                                                                                                <dd className="col-7 col-sm-7">Oil / Gel</dd>
                                                                                                <dt className="col-5 col-sm-5">Warranty</dt>
                                                                                                <dd className="col-7 col-sm-7">Yes<sup><font color="red">(2)</font></sup></dd>
                                                                                                <dt className="col-5 col-sm-5">Memo</dt>
                                                                                                <dd className="col-7 col-sm-7"></dd>
                                                                                                <dt className="col-5 col-sm-5">Customization</dt>
                                                                                                <dd className="col-7 col-sm-7"></dd>
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
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <dl className="row">
                                                            <dd className="col text-center">
                                                                <div class="btn-group" role="group">
                                                                    <button id="btnGroupDrop1" type="button" className="btn btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        Add Item
                                                                     </button>
                                                                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                        <a class="dropdown-item" href="#/DesignTool">Design Tool Gearbox</a>
                                                                        <a class="dropdown-item" href="#/DesignTool">Design Tool Rack and Pinion</a>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </dd>
                                </dl>


                            </div>
                            <div id="menu1" class="container tab-pane fade"><br />
                                <dl class="row no-gutters">
                                    <dd class="col-sm-12">
                                        <div id="accordion3">
                                            <div className="card">
                                                <div className="card-header no-padding-LR  " id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link accordionBtn no-padding-LR" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                            <legend>      <div className="row no-gutters">
                                                                <div className="col-5 col-sm-5 col-md-4 col-lg-4 ">AA00031003100</div>
                                                                <div className="col-3  col-sm-3 col-md-4 col-lg-4 ">OB21032902</div>
                                                                <div className="col-4  col-sm-4 col-md-4 col-lg-4">2021/03/29</div>
                                                            </div></legend>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseThree" className="collapse " aria-labelledby="headingOne" data-parent="#accordion3">
                                                    <div className="card-body">
                                                        <table className="table table-sm table-striped" >
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="4" >
                                                                        <div className="row">
                                                                            <div className="  col-6 col-sm-5 col-md-7 col-lg-7 col-xl-7      ">Ordering Code </div>
                                                                            <div className="col-3 col-sm-3  col-md-2  col-lg-1 col-xl-1  text-right">{"Q'ty"}</div>
                                                                            <div className="col-3 col-sm-3 col-md-2   col-lg-2 col-xl-2  text-right">Price</div>
                                                                            <div className="col-1 col-sm-1 col-md-12  col-lg-12 col-xl-2  text-right "></div>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="4">
                                                                        <div className="row">
                                                                            <div className="col-12  col-sm-7 col-md-7 col-lg-7 col-xl-7  "> AB142-005-S2-P2 / YASKAWA SGM7G-30A</div>
                                                                            <div className="col-12  col-sm-1 col-md-2 col-lg-1 col-xl-1 text-right ">5</div>
                                                                            <div className="col-12 col-sm-3  col-md-2 col-lg-2 col-xl-2 text-right">3,715</div>
                                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-2  col-xl-2 text-right">
                                                                                <button type="button" className="btn btn-info btn-sm  " data-toggle="modal" data-target="#Modal4">
                                                                                    Detail
                                                                                </button>

                                                                                <div className="modal fade" id="Modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                                                <tr>
                                                                    <td colSpan="4">
                                                                        <div className="row">
                                                                            <div className="col-12  col-sm-7 col-md-7 col-lg-7 col-xl-7  "> PAII090-005-S2 / MITSUBISHI HG-KR73 </div>
                                                                            <div className="col-12  col-sm-1 col-md-2 col-lg-1 col-xl-1 text-right ">11</div>
                                                                            <div className="col-12 col-sm-3  col-md-2 col-lg-2 col-xl-2 text-right">4,431</div>
                                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-2  col-xl-2 text-right">
                                                                                <button type="button" className="btn btn-info btn-sm  " data-toggle="modal" data-target="#Modal5">
                                                                                    Detail
                                                                                </button>

                                                                                <div className="modal fade" id="Modal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                    </dd>
                                </dl>

                                <dl class="row">
                                    <dd className="col-sm-12">
                                        <div id="accordion2">
                                            <div className="card">
                                                <div className="card-header no-padding-LR" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link accordionBtn no-padding-LR" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            <legend>      <div className="row  no-gutters">
                                                                <div className="col-5 col-sm-5 col-md-4 col-lg-4">BAC0011003074</div>
                                                                <div className="col-3  col-sm-3 col-md-4 col-lg-4">AC210331-2</div>
                                                                <div className="col-4  col-sm-4 col-md-4 col-lg-4">2021/03/31</div>
                                                            </div></legend>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseTwo" className="collapse " aria-labelledby="headingOne" data-parent="#accordion2">
                                                    <div className="card-body">
                                                        <table className="table table-sm table-striped" >
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="4" >

                                                                        <div className="row">
                                                                            <div className="  col-6 col-sm-5 col-md-7 col-lg-7 col-xl-7      ">Ordering Code </div>
                                                                            <div className="col-3 col-sm-3  col-md-2  col-lg-1 col-xl-1  text-right">{"Q'ty"}</div>
                                                                            <div className="col-3 col-sm-3 col-md-2   col-lg-2 col-xl-2  text-right">Price</div>
                                                                            <div className="col-1 col-sm-1 col-md-12  col-lg-12 col-xl-2  text-right "></div>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="4">
                                                                        <div className="row">
                                                                            <div className="col-12  col-sm-7 col-md-7 col-lg-7 col-xl-7  "> AB115M1-020-S2-P1 / PANASONIC MDME152G1</div>
                                                                            <div className="col-12  col-sm-1 col-md-2 col-lg-1 col-xl-1 text-right ">4</div>
                                                                            <div className="col-12 col-sm-3  col-md-2 col-lg-2 col-xl-2 text-right">3,937</div>
                                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-2  col-xl-2 text-right">
                                                                                <button type="button" className="btn btn-info btn-sm  " data-toggle="modal" data-target="#Modal2">
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
                                    </dd>
                                </dl>
                            </div>

                        </div>



                    </div>
                </div>
            </main>
        );
    }
};
class DesignTool extends React.Component {
    render() {
        return (
            <main role="main" className="container-fluid"> <br />
                <br />
                <br />
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header no-padding-TB" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link accordionBtn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <legend>Select Motor</legend>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">

                                        <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class=" nav-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Motor<br />Model</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Motor<br />Dimension</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Adapter<br />Part-No.</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <form action="r" method="post" accept-charset="utf-8" className="form" role="form">
                                                    <dl className="row">
                                                        <dd className="col-6 col-sm-6 col-md-6">
                                                            <label>Brand</label>
                                                            <select name="month" className="form-control form-control-xs">
                                                                <option value="00"></option>
                                                                <option value="01">ABB</option>
                                                                <option value="02">ALLEN BRADLEY</option>
                                                                <option value="03">ALLEN BRADLEY</option>
                                                            </select>
                                                        </dd>
                                                        <dd className="col-6 col-sm-6 col-md-6">
                                                            <label>Model</label>
                                                            <select name="month" className="form-control form-control-xs">
                                                                <option value="00"></option>
                                                                <option value="8C1.1.30.1.xxxxxx.G.xxB">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                                <option value="1326AB-A1G-11-xx">1326AB-A1G-11-xx</option>
                                                            </select>
                                                        </dd>
                                                        <dd className="col-12">
                                                            <div class="form-group">
                                                                <label for="inputKg">
                                                                    <a href="#" data-toggle="modal" data-target="#motorInfoModal" >The max. Moment of Inertia of Application  <i class="fas fa-info-circle fa-lg"></i>
                                                                    </a>

                                                                    <div class="modal fade" id="motorInfoModal">
                                                                        <div class="modal-dialog modal-dialog-centered">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header">
                                                                                    <h4 class="modal-title">Information</h4>
                                                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                                                </div>
                                                                                <div class="modal-body">
                                                                                    <dl className="row">
                                                                                        <dt className="col-2 text-danger">(*)</dt> <dd className="col-10 text-danger">Without giving the max. moment of inertia of application or giving a wrong value, the warranty could be invalid in case of a gearbox damage due to the back-drive torque from application. </dd>
                                                                                        <dt className="col-2 text-danger">(**)</dt> <dd className="col-10 text-danger">Material of AT series: Stainless<br />Material of ATB series: Carbon Steel with Phosphate<br />Material of AExxxS / AERxxxS series: Full Stainless</dd>
                                                                                    </dl>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                                <input type="text" class="form-control" id="inputKg" placeholder="(Kg . cm2)" />
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </form>
                                            </div>
                                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <dl className="row">
                                                    <dd class="col-12 text-center">
                                                        <img src="http://www.apexdyna.com/weborder/image/moto_photo2.png" width="444px" height="220px" />
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="inputAdapter">Adapter Part-No.</label>
                                                        <input type="text" class="form-control" id="inputAdapter" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputMotorShaft">Motor Shaft</label>
                                                        <input type="text" class="form-control" id="inputMotorShaft" />
                                                    </div>

                                                    <button type="submit" class="btn btn-success btn-sm">Confirm</button>
                                                </form>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br />
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div id="accordion2">
                            <div className="card">
                                <div className="card-header no-padding-TB" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link accordionBtn " data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <legend>Select Gearbox </legend>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseTwo" className="collapse " aria-labelledby="headingOne" data-parent="#accordion2">
                                    <div className="card-body">
                                        <dl className="row">
                                            <dt className="col-12">
                                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                    <div class="btn-group mr-2 " role="group" aria-label="First group">
                                                        <button type="button" class="btn btn-success btn-sm">Standard</button>
                                                    </div>
                                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                                        <button type="button" class="btn btn-success btn-sm">Unlimited 1</button>
                                                    </div>
                                                    <div class="btn-group" role="group" aria-label="Third group">
                                                        <button type="button" class="btn btn-success btn-sm">Unlimited 2</button>
                                                    </div>
                                                </div>
                                            </dt>
                                        </dl><br />
                                        <dl className="row">
                                            <dt className="col-6 col-sm-6 col-md-6">
                                                <label>GearBox</label>
                                                <select name="month" className="form-control form-control-xs" disabled>
                                                    <option value="R01" selected="selected">AB Series</option>
                                                    <option value="R02">ABR Series</option>
                                                </select>
                                            </dt>
                                            <dt className="col-6 col-sm-6 col-md-6">
                                                <label>Model</label>
                                                <select name="month" className="form-control form-control-xs" disabled>
                                                    <option selected="selected" value="AB090">AB090</option>
                                                    <option value="AB090A">AB090A</option>
                                                </select>
                                            </dt>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-6 col-sm-6 col-md-6">
                                                <label>Ratio</label>
                                                <select name="month" className="form-control form-control-xs" disabled>
                                                    <option selected="selected" value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </dt>
                                            <dt className="col-6 col-sm-6 col-md-6">
                                                <label>Shaft Option</label>
                                                <select name="month" className="form-control form-control-xs" disabled>
                                                    <option selected="selected" value="S2">S2</option>
                                                    <option value="S3">S3</option>
                                                </select>
                                            </dt>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-6 col-sm-6 col-md-6">
                                                <label>Backlash</label>
                                                <select name="month" className="form-control form-control-xs" disabled>
                                                    <option value="P0">P0</option>
                                                    <option value="P1">P1</option>
                                                </select>
                                            </dt>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-12 text-center" >
                                                <button type="button" className=" btn btn-success btn-sm">Check</button>
                                            </dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br />
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div id="accordion3">
                            <div className="card">
                                <div className="card-header no-padding-TB" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link accordionBtn " data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <legend> Result</legend>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseThree" className="collapse " aria-labelledby="headingOne" data-parent="#accordion3">
                                    <div className="card-body">

                                        <dl className="row no-gutters">
                                            <dd class="col-12 text-center">
                                                <img src="http://www.apexdyna.com/images/gearbox/pro_samll01.png" width="80px" height="80px" />
                                            </dd>
                                            <dt class="col-12 text-left">
                                                <h4 class="card-title">Ordering Code</h4>
                                                <h4 class="card-text"><span class="badge badge-primary">AB090 - 003 - S2 - P2 /</span></h4>
                                                <h4 class="card-text"><span class="badge badge-primary">ABB 8C1.1.30.1.xxxxxx.G.xxB</span></h4>
                                            </dt>

                                        </dl><br />
                                        <dl className="row no-gutters bg-light ">

                                            <dt className="col-12"><h4>Download</h4></dt>
                                            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">PDF</button> </dt>
                                            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">DXF</button> </dt>
                                            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">IGS</button> </dt>
                                            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">STP</button> </dt>
                                        </dl>

                                        <dl className="row no-gutters">
                                            <dt className="col-9"><h4>List</h4></dt>  <dt className="col-3"><h4>Stock<sup className="text-danger">(1)</sup></h4></dt>
                                            <dt className="col-3" >Bom</dt> <dd className="col-6">Spec</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Gearbox</dt> <dd className="col-6">AB090 - 003 - S2 - P2 / A0100030122</dd><dd className="col-3">> 100 pcs<sup className="text-danger" >(2)</sup></dd>
                                            <dt className="col-3" >Adapter</dt> <dd className="col-6">AD-W90-M100-3 / S0401300503</dd><dd className="col-3">Re-Stocking</dd>
                                            <dt className="col-3" >FixPlate</dt> <dd className="col-6">[No need]</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Bushing</dt> <dd className="col-6">[No need]</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Screw </dt> <dd className="col-6">SW-1-M8X1.25P-L25 / 2111B108025</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Washer </dt> <dd className="col-6">WS-B1-D8 / 22120100501</dd><dd className="col-3"></dd>
                                        </dl>


                                        <dl className="row no-gutters bg-light ">
                                            <dt className="col-12"><h4>Gearbox Specification</h4></dt>
                                            <dt className="col-4" >Model </dt> <dd className="col-8">AB090 - 003 - S2 - P2</dd>
                                            <dt className="col-4" >Ratio </dt> <dd className="col-8">3</dd>
                                            <dt className="col-4" >Shaft Option </dt> <dd className="col-8">S2: Keyway</dd>
                                            <dt className="col-4" >Backlash </dt> <dd className="col-8">P2: Standard Backlash</dd>
                                            <dt className="col-4" >Adapter</dt> <dd className="col-8">P0401300503 / AD-W90-M100-3</dd>
                                            <dt className="col-4" >Output Torque</dt> <dd className="col-8">130 Nm</dd>
                                            <dt className="col-4" >Rated Speed</dt> <dd className="col-8">4000 rpm</dd>
                                            <dt className="col-4" >Max. Torque</dt> <dd className="col-8">234 Nm</dd>
                                            <dt className="col-4" >Max. Speed</dt> <dd className="col-8">8000 rpm</dd>
                                            <dt className="col-4" >Inertia</dt> <dd className="col-8">0.61 kgcm<font size="1"><sup>^2</sup></font></dd>
                                            <dt className="col-4" >Weight </dt> <dd className="col-8">3.70 kg</dd>
                                            <dt className="col-4" >No Load </dt> <dd className="col-8">0.67 Nm<sup><font color="red">(3)</font></sup></dd>
                                        </dl>

                                        <dl className="row no-gutters">
                                            <dt className="col-12"><h4>Motor Specification</h4></dt>
                                            <dt className="col-4" >Brand </dt> <dd className="col-8">ABB</dd>
                                            <dt className="col-4" >Model </dt> <dd className="col-8">8C1.1.30.1.xxxxxx.G.xxB</dd>
                                            <dt className="col-4" >Motor Shaft</dt> <dd className="col-8">19 mm</dd>
                                            <dt className="col-4" >Output Power </dt> <dd className="col-8">0.38 Kw</dd>
                                            <dt className="col-4" >Rated Speed </dt> <dd className="col-8">3000 rpm</dd>
                                            <dt className="col-4" >Rated Torque</dt> <dd className="col-8">1.20 Nm</dd>
                                            <dt className="col-4" >Max. Speed</dt> <dd className="col-8">3000 rpm</dd>
                                            <dt className="col-4" >Peak Torque</dt> <dd className="col-8">4.60 Nm</dd>
                                            <dt className="col-4" >Inertia</dt> <dd className="col-8">0.90 kgcm<font size="1"><sup>^2</sup></font></dd>
                                        </dl>

                                        <dl className="row no-gutters bg-light  text-danger ">
                                            <dt className="col-4" >(*) </dt> <dd className="col-8">Without giving the max. moment of inertia of application or giving a wrong value, the warranty could be invalid in case of a gearbox damage due to the back-drive torque from application.</dd>
                                            <dt className="col-4" >Note (1) </dt> <dd className="col-8">The available piece-no. in stock is variable depending on incoming orders in the time.</dd>
                                            <dt className="col-4" >Note (2)</dt> <dd className="col-8">The gearboxes in stock are filled with standard grease. For non-standard grease or any customization please contact APEX.</dd>
                                            <dt className="col-4" >Note (3)</dt> <dd className="col-8">The values are measured by gearbox with ratio = 10 without loading at 3,000 rpm, or at the Nominal Input Speed(n<sub>1N</sub>).</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>
            </main>





        );
    }
};

const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;


const App = () => (

    <ReactRouterDOM.HashRouter>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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