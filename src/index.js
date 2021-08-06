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


const PageTitle = (props) => {
    return (
        <div className="row color-Apex  text-center mb-3">
            <div className="offset-md-3 col-md-6">
                {props.head}
            </div>
        </div>
    )
};
class NewOrder extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modalSignUP">
                    {this.props.btname}
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
            </div>);
    }
}

class ModalCt extends React.Component {
    render() {
        return (
            <div>
                {this.props.btncontrol}
                <div className="modal fade" id={this.props.modalID} tabindex="-1" role="dialog" aria-labelledby={this.props.modalID} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" >{this.props.head}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class AccordionCt extends React.Component {
    render() {
        return (
            <div className="w-100 " id={this.props.accodion}>
                <div className="card">
                    <div className="card-header no-padding-TB" >
                        <h5 className="mb-0">
                            <button className="btn btn-link accordionBtn " data-toggle="collapse" data-target={"#" + this.props.collapse} aria-expanded="true" aria-controls={this.props.collapse}>
                                <legend> {this.props.head}</legend>
                            </button>
                        </h5>
                    </div>

                    <div id={this.props.collapse} className="collapse " aria-labelledby="headingOne" data-parent={this.props.accodion}>
                        <div className="card-body">
                            {this.props.body}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class NavTabs extends React.Component {
    render() {
        return (
            <dl className="row no-gutters">
                <dd className="col-12">

                    <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href={"#" + this.props.home} role="tab" aria-controls={this.props.home} aria-selected="true">{this.props.head}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href={"#" + this.props.profile} role="tab" aria-controls={this.props.profile} aria-selected="false">{this.props.head2}</a>
                        </li>
                    </ul>
                    <div class="tab-content" >
                        <div class="tab-pane fade show active" id={this.props.home} role="tabpanel" aria-labelledby="home-tab">{this.props.body}</div>
                        <div class="tab-pane fade" id={this.props.profile} role="tabpanel" aria-labelledby="profile-tab">{this.props.body2}</div>
                    </div>
                </dd>
            </dl>
        );
    }
}

class NavOneTabs extends React.Component {
    render() {
        return (
            <dl className="row no-gutters">
                <dd className="col-12">

                    <ul class="nav nav-tabs mb-3" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href={"#" + this.props.home} role="tab" aria-controls={this.props.home} aria-selected="true">{this.props.head}</a>
                        </li>
                    </ul>
                    <div class="tab-content" >
                        <div class="tab-pane fade show active" id={this.props.home} role="tabpanel" aria-labelledby="home-tab">{this.props.body}</div>
                    </div>
                </dd>
            </dl>
        );
    }
}

class Order extends React.Component {
    static displayName = Order.name;
    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateApiData();
    }

   async populateApiData() {
        const feStr = {};
       feStr["CustId"] = 'BAJ003';
       feStr["Ostatus"] = '0';
       const response = await fetch("https://localhost:44363/api/Order/OrderList?feStr=" + JSON.stringify(feStr), {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
    static renderOrderTable(forecasts) {
        return (
            <div id="home" class="container tab-pane active"> <br />
            {forecasts.map(forecast =>
            <dl class="row no-gutters">
                <dd class="col-sm-12">
                        <h4><span class="badge badge-secondary">{forecast.OrderDate} </span></h4>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header no-padding-LR no-padding-TB " id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link accordionBtn no-padding-LR" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <legend>      <div className="row no-gutters">
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 ">{forecast.OrderId}</div>
                                                <div className="col-6  col-sm-6 col-md-6 col-lg-6 ">{forecast.Pono}</div>
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
                                                                            <dd className="col-7 col-sm-7">0 %</dd>

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
                                                    <a class="dropdown-item" href="#/Gearbox">Gearbox</a>
                                                    <a class="dropdown-item" href="#/RackPinion">Rack / Pinion</a>
                                                    <a class="dropdown-item" href="#/GearboxRackPinion">Gearbox + Rack + Pinion</a>
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
                )}
                </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Order.renderOrderTable(this.state.forecasts);
        return (
            <main role="main" className="container-fluid">
                <br />
                <br />
                <br />
                <PageTitle head={<h3>Orders to APEX</h3>} />
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4"> <input type="search" id="search" value="" className="form-control" placeholder="Search" /> </div>
                    <div className="col-lg-4 col-lg-offset-4">
                        <NewOrder btname="Add New Order" />
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
                            {contents}
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
class Gearbox extends React.Component {
    render() {
        return (
            <main role="main" className="container-fluid"> <br />
                <br />
                <br />
                <PageTitle head={<h3>Gearbox + Motor</h3>} />
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header no-padding-TB" id="headingOne">
                                    <button className="btn btn-link accordionBtn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <legend>Select Motor</legend>
                                    </button>
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
                                                <dl className="row">
                                                    <dt className="col-3">
                                                        <label>Brand</label>
                                                    </dt>
                                                    <dd className="col-9">

                                                        <select name="month" className="form-control form-control-xs">
                                                            <option value="00"></option>
                                                            <option value="01">ABB</option>
                                                            <option value="02">ALLEN BRADLEY</option>
                                                            <option value="03">ALLEN BRADLEY</option>
                                                        </select>
                                                    </dd>
                                                    <dt className="col-3">
                                                        <label>Model</label>
                                                    </dt>
                                                    <dd className="col-9">
                                                        <select name="month" className="form-control form-control-xs">
                                                            <optgroup>
                                                                <option value="00"></option>
                                                                <option value="BMP0701F_PCD82+ATV32H037N4,ATV320U04N4"  >BMP0701F_PCD82+ATV32H037N4,ATV320U04N4</option>
                                                                <option value="8C1.1.30.1.xxxxxx.G.xxB">8C1.1.30.1.xxxxxx.G.xxB</option>
                                                                <option value="1326AB-A1G-11-xx">1326AB-A1G-11-xx</option>
                                                            </optgroup>
                                                        </select>
                                                    </dd>
                                                </dl>
                                                <dl className="row">
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
                                                            <input type="text" className="form-control" id="inputKg" placeholder="(Kg . cm2)" />
                                                            <small className="form-text  text-danger">To calculate the moment of inertia: <a href="https://www.apexdyna.com/dynamax.aspx" className="text-danger" target="_blank" > GO TO !!</a></small>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-12 text-center ">
                                                        <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp;&nbsp; Check &nbsp;&nbsp;&nbsp;</button>
                                                    </dt>
                                                </dl>

                                            </div>
                                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <dl className="row">
                                                    <dt className="col-12 col-xl-6">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text motor-Dimension">Mount Type</span>
                                                            </div>
                                                            <div class="input-group-prepend">
                                                                <select class="form-control">
                                                                    <option value="N">Flange Mount</option>
                                                                    <option value="Y">Face Mount</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </dt>
                                                    <dt className="col-12 col-xl-6">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text motor-Dimension">Motor Interface</span>
                                                            </div>
                                                            <div class="input-group-prepend">
                                                                <select class="form-control">
                                                                    <option value="N">Square</option>
                                                                    <option value="Y">Round</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dd class="col-12 text-center">
                                                        <img src="http://www.apexdyna.com/weborder/image/moto_photo2.png" className="img-thumbnail" />
                                                    </dd>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-12 text-center text-danger">* Required </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-8 input-group">
                                                        <select className="form-control bg-F0" >
                                                            <option value="" selected disabled>LA / LA1</option>
                                                            <option>LA</option>
                                                            <option>LA1</option>
                                                        </select>
                                                        <input type="text" className="form-control" />
                                                        <span className="text-danger">*</span>
                                                    </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LC</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span className="text-danger">*</span>
                                                        </div>
                                                    </dt>
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LZ</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span className="text-danger">*</span>
                                                        </div>
                                                    </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-6">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LT</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span>&nbsp;&nbsp;</span>
                                                        </div>
                                                    </dt>
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LG</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span>&nbsp;&nbsp;</span>
                                                        </div>
                                                    </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LB</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span className="text-danger">*</span>
                                                        </div>
                                                    </dt>
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">S &nbsp;</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span className="text-danger">*</span>
                                                        </div>
                                                    </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LR</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span className="text-danger">*</span>
                                                        </div>
                                                    </dt>
                                                    <dt className="col-6 ">
                                                        <div class="input-group ">
                                                            <div class="input-group-prepend ">
                                                                <span class="input-group-text">LE</span>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                            <span>&nbsp;&nbsp;</span>
                                                        </div>
                                                    </dt>
                                                </dl>
                                                <dl className="row">
                                                    <dt className="col-12 text-center ">
                                                        <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp;&nbsp; Check &nbsp;&nbsp;&nbsp;</button>
                                                    </dt>
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
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp;&nbsp; Check &nbsp;&nbsp;&nbsp;</button>
                                                        </div>
                                                    </div>
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
                                            <dt className="col-12 text-center text-danger">If there is no motor information, to select gearbox only.</dt>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-12 text-center">
                                                <div class="btn-toolbar d-inline-block" role="toolbar" aria-label="Toolbar with button groups">
                                                    <div class="btn-group mr-2 " role="group" aria-label="First group">
                                                        <button type="button" class="btn btn-success btn-sm active"> &nbsp; Standard &nbsp;  &nbsp;</button>
                                                    </div>
                                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                                        <button type="button" class="btn btn-warning btn-sm">Unlimited 1</button>
                                                    </div>
                                                    <div class="btn-group" role="group" aria-label="Third group">
                                                        <button type="button" class="btn btn-danger btn-sm">Unlimited 2</button>
                                                    </div>
                                                </div>
                                            </dt>
                                        </dl><br />
                                        <dl className="row">
                                            <dt className="col-6 col-sm-6 col-md-6">

                                                <a href="#" data-toggle="modal" data-target="#gearboxInfoModal"  > <label className="text-dark">Gearbox</label> <i class="fas fa-info-circle fa-lg"></i>
                                                </a>

                                                <div class="modal fade" id="gearboxInfoModal">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">Information</h4>
                                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <dl className="row">
                                                                    <dd className="col-12 text-danger">XXXXXXXXXXXXXXXX</dd>
                                                                </dl>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

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
                                        </dl><br />
                                        <dl className="row">
                                            <dt className="col-12 text-center" >
                                                <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp;&nbsp; Check &nbsp;&nbsp;&nbsp;</button>
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

                                            <dd class=" col-12 text-center">
                                                <img src="http://www.apexdyna.com/images/gearbox/pro_samll01.png" width="191" height="180" />
                                            </dd>

                                            <dt class="col-12 text-center">
                                                <h5 class="card-title">Ordering Code</h5>
                                                <h4 class="card-text"><span class="badge badge-primary">AB090 - 003 - S2 - P2 /</span></h4>
                                                <h4 class="card-text"><span class="badge badge-primary">ABB 8C1.1.30.1.xxxxxx.G.xxB</span></h4>
                                            </dt>

                                        </dl><br />
                                        <hr />
                                        <Downloaddrawing />
                                        <hr />
                                        <dl className="row no-gutters">
                                            <dt className="col-12"><h5>Bom</h5></dt>  
                                            <dt className="col-3" >List</dt> <dd className="col-9">Spec</dd>
                                            <dt className="col-3" >Gearbox</dt> <dd className="col-9">AB090003S2P2 / A0100030122</dd>
                                            <dt className="col-3" >Adapter</dt> <dd className="col-9">AD-W90-M100-3 / S0401300503</dd>
                                            <dt className="col-3" >Fix Plate</dt> <dd className="col-9">[No need]</dd>
                                            <dt className="col-3" >Bushing</dt> <dd className="col-9">[No need]</dd>
                                            <dt className="col-3" >Screw </dt> <dd className="col-9">SW-1-M8X1.25P-L25 / 2111B108025</dd>
                                            <dt className="col-3" >Washer </dt> <dd className="col-9">WS-B1-D8 / 22120100501</dd>
                                        </dl><br />
                                        <hr />

                                        <dl className="row no-gutters  ">
                                            <dd className="col-12">
                                                <AccordionCt collapse="collapseGS" accordion="accordionGS" head={<dt className="col-12"><h5>Gearbox Specification</h5></dt>}
                                                    body={
                                                        <dl className="row">
                                                            <dt className="col-5" >Model </dt> <dd className="col-7">AB090 - 003 - S2 - P2</dd>
                                                            <dt className="col-5" >Ratio </dt> <dd className="col-7">3</dd>
                                                            <dt className="col-5" >Shaft Option </dt> <dd className="col-7">S2: Keyway</dd>
                                                            <dt className="col-5" >Backlash </dt> <dd className="col-7">P2: Standard Backlash</dd>
                                                            <dt className="col-5" >Output Torque</dt> <dd className="col-7">130 Nm</dd>
                                                            <dt className="col-5" >Rated Speed</dt> <dd className="col-7">4000 rpm</dd>
                                                            <dt className="col-5" >Max. Torque</dt> <dd className="col-7">234 Nm</dd>
                                                            <dt className="col-5" >Max. Speed</dt> <dd className="col-7">8000 rpm</dd>
                                                            <dt className="col-5" >Inertia</dt> <dd className="col-7">0.61 kgcm<font size="1"><sup>^2</sup></font></dd>
                                                            <dt className="col-5" >Weight </dt> <dd className="col-7">3.70 kg</dd>
                                                            <dt className="col-5" >No Load </dt> <dd className="col-7">0.67 Nm<sup><font color="red">(3)</font></sup></dd>
                                                        </dl>
                                                    }
                                                />
                                            </dd>
                                        </dl>
                                        <hr />
                                        <dl className="row no-gutters">
                                            <dd className="col-12">
                                                <AccordionCt head={<dt className="col-12"><h5>Motor Specification</h5></dt>} collapse="collapseMS" accordion="accordionMS"
                                                    body={
                                                        <div className="row">
                                                            <dt className="col-5" >Brand </dt> <dd className="col-7">ABB</dd>
                                                            <dt className="col-5" >Model </dt> <dd className="col-7">8C1.1.30.1.xxxxxx.G.xxB</dd>
                                                            <dt className="col-5" >Motor Shaft</dt> <dd className="col-7">19 mm</dd>
                                                            <dt className="col-5" >Output Power </dt> <dd className="col-7">0.38 Kw</dd>
                                                            <dt className="col-5" >Rated Speed </dt> <dd className="col-7">3000 rpm</dd>
                                                            <dt className="col-5" >Rated Torque</dt> <dd className="col-7">1.20 Nm</dd>
                                                            <dt className="col-5" >Max. Speed</dt> <dd className="col-7">3000 rpm</dd>
                                                            <dt className="col-5" >Peak Torque</dt> <dd className="col-7">4.60 Nm</dd>
                                                            <dt className="col-5" >Inertia</dt> <dd className="col-7">0.90 kgcm<font size="1"><sup>^2</sup></font></dd>
                                                        </div>
                                                    } />
                                            </dd>
                                        </dl>
                                        <hr />
                                        <dl className="row no-gutters bg-F0  text-danger  small">
                                            <dt className="col-2" >(*) </dt> <dd className="col-10">Without giving the max. moment of inertia of application or giving a wrong value, the warranty could be invalid in case of a gearbox damage due to the back-drive torque from application.</dd>
                                            <dt className="col-2" >Note (1) </dt> <dd className="col-10">The available piece-no. in stock is variable depending on incoming orders in the time.</dd>
                                            <dt className="col-2" >Note (2)</dt> <dd className="col-10">The gearboxes in stock are filled with standard grease. For non-standard grease or any customization please contact APEX.</dd>
                                            <dt className="col-2" >Note (3)</dt> <dd className="col-10">The values are measured by gearbox with ratio = 10 without loading at 3,000 rpm, or at the Nominal Input Speed(n<sub>1N</sub>).</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <div id="accordion4">
                            <div className="card">
                                <div className="card-header no-padding-TB" id="headingFour">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link accordionBtn " data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            <legend>Add to Order</legend>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseFour" className="collapse " aria-labelledby="headingOne" data-parent="#accordion4">
                                    <div className="card-body">
                                        <dl className="row no-gutters">
                                            <dt className="col-9"><h5>Bom</h5></dt>  <dt className="col-3 text-right"><h5>Stock<sup className="text-danger">(1)</sup></h5></dt>
                                            <dt className="col-3" >List</dt> <dd className="col-6">Spec</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Gearbox</dt> <dd className="col-5">AB090003S2P2 / A0100030122</dd><dd className="col-4 text-right">{">"}100 pcs<sup className="text-danger" >(2)</sup></dd>
                                            <dt className="col-3" >Adapter</dt> <dd className="col-5">AD-W90-M100-3 / S0401300503</dd><dd className="col-4 text-right">Re-Stocking</dd>
                                            <dt className="col-3" >Fix Plate</dt> <dd className="col-6">[No need]</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Bushing</dt> <dd className="col-6">[No need]</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Screw </dt> <dd className="col-6">SW-1-M8X1.25P-L25 / 2111B108025</dd><dd className="col-3"></dd>
                                            <dt className="col-3" >Washer </dt> <dd className="col-6">WS-B1-D8 / 22120100501</dd><dd className="col-3"></dd>
                                        </dl><br />
                                        <dl className="row">
                                            <dt className="col-4">
                                                <label>Order Piece No.</label>
                                            </dt>
                                            <dd className="col-8">
                                                <input type="text" className="form-control" />
                                            </dd>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-4">
                                                <label>To Order No.</label>
                                            </dt>
                                            <dd className="col-8">
                                                <select className="form-control form-control-xs" >
                                                    <option value="AA00051004051/Heidelberg 00041980230">AA00051004051/Heidelberg 00041980230</option>
                                                    <option value="AA00051004052">AA00051004052</option>
                                                    <option value="AA00051004053">AA00051004053</option>
                                                </select>
                                            </dd>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-12 text-center">
                                                <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp; &nbsp; Add to Order &nbsp; &nbsp;</button>
                                            </dt>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-12 text-center">
                                                <NewOrder btname="Add to New Order" />
                                            </dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </dl>
            </main>
        );
    }
};

const Downloaddrawing = () => {
    return (
        <dl className="row no-gutters bg-F0 text-center">
            <dt className="col-12"><h5>Download</h5></dt>
            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">&nbsp;&nbsp; PDF &nbsp;&nbsp;</button> </dt>
            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">&nbsp;&nbsp; DXF &nbsp;&nbsp;</button> </dt>
            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">&nbsp;&nbsp; IGS &nbsp;&nbsp;</button> </dt>
            <dt className="col-3" ><button type="button" className="btn btn btn-success btn-sm">&nbsp;&nbsp; STP &nbsp;&nbsp;</button> </dt>
            <dt className="col-12">&nbsp;</dt><br />
        </dl>
    );
};

const AddtoOrder = () => {
    return (
        <dl className="row bg-F0 no-gutters">
            <dt className="col-12 text-center mb-3"><h5>Add to Order</h5></dt>
            <dt className="col-4 mb-3">
                <label>Order Piece No.</label>
            </dt>
            <dd className="col-8 mb-3">
                <input type="text" className="form-control" />
            </dd>

            <dt className="col-4 mb-3">
                <label>To Order No.</label>
            </dt>
            <dd className="col-8 mb-3">
                <select className="form-control form-control-xs" >
                    <option value="AA00051004051/Heidelberg 00041980230">AA00051004051/Heidelberg 00041980230</option>
                    <option value="AA00051004052">AA00051004052</option>
                    <option value="AA00051004053">AA00051004053</option>
                </select>
            </dd>
            <dt className="col-12 text-center  mb-3">
                <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp; &nbsp; Add to Order &nbsp; &nbsp;</button>
            </dt>
            <dt className="col-12 text-center mb-3">
                <NewOrder btname="Add to New Order" />
            </dt>
        </dl>
    );
};

const AddtoOrderMerge = () => {
    return (
        <div>
            <dl className="row  no-gutters">
                <dt className="col-8  mb-3">List</dt>
                <dt className="col-4  mb-3 text-right">Stock</dt>
            </dl>
            <dl className="row bg-F0 no-gutters">

                <dt className="col-3 mb-3">
                    Gearbox
                </dt>
                <dt className="col-5 col-lg-6  mb-3">
                    AD140 - 016 - P2 / ABB 8C1.1.30.1.xxxxxx.G.xxB
                </dt>
                <dt className=" col-4  col-lg-3  mb-3 text-right ">
                    Re-Stocking
                </dt>
                <dt className="offset-3 col-5 col-lg-6 mb-3 ">
                    Standard Lubrication
                </dt>
                <dt className="col-4 col-lg-3  mb-3 text-right ">
                    Oil / Gel
                </dt>
                <dt className="col-12 mb-3  ">
                    <select className="form-control">
                        <option>Oil / Gel (Standard)</option>
                        <option>Grease</option>
                    </select>
                </dt>
                <dt className="col-4 mb-5  ">Order Piece No.</dt>
                <dd className="offset-4 col-4  mb-5 text-right">
                    <input type="text" className="form-control col-8 col-xl-4" />
                </dd>
            </dl>
            <dl className="row bg-F0 no-gutters">
                <dt className="col-3 mb-3">
                    Rack
                </dt>
                <dt className="col-5  col-lg-6 mb-3">
                    0504R100C10 / Mn5 / Q4 / Right-Hand Helical / 1000 (49x39) mm / Carbon Steel
                </dt>
                <dt className="col-4 col-lg-3  mb-3 text-right ">
                    Re-Stocking
                </dt>
                <dt className="col-4 mb-5  ">Order Piece No.</dt>
                <dd className="offset-4 col-4   mb-5 text-right">
                    <input type="text" className="form-control col-8 col-xl-4" />
                </dd>
            </dl>
            <dl className="row bg-F0 no-gutters">
                <dt className="col-3 mb-3">
                    Pinion
                </dt>
                <dt className="col-5  col-lg-6 mb-3">
                    C05L21B080 / Mn5 / Left-Hand Helical / Z21 / Alloy Steel
                </dt>
                <dt className="col-4 col-lg-3  mb-3 text-right">
                    >50 pcs
                </dt>
                <dt className="col-4 mb-5  ">Order Piece No.</dt>
                <dd className="offset-4 col-4  mb-5 text-right">
                    <input type="text" className="form-control col-8 col-xl-4" />
                </dd>

                <dt className="col-4 col-xl-3 mb-3">
                    <label>To Order No.</label>
                </dt>
                <dd className="col-8 col-xl-9 mb-3">
                    <select className="form-control form-control-xs" >
                        <option value="AA00051004051/Heidelberg 00041980230">AA00051004051/Heidelberg 00041980230</option>
                        <option value="AA00051004052">AA00051004052</option>
                        <option value="AA00051004053">AA00051004053</option>
                    </select>
                </dd>
                <dt className="col-12 text-center  mb-3">
                    <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp; &nbsp; Add to Order &nbsp; &nbsp;</button>
                </dt>
                <dt className="col-12 text-center mb-3">
                    <NewOrder btname="Add to New Order" />
                </dt>
            </dl>
        </div>
    );
};


const RPTabBody = () => {
    return (
        <dl className="row">
            <dd className="col-12">
                <dl className="row">
                    <dt className="col-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <select className="form-control ">
                                    <option value="APEX" selected>APEX</option>
                                    <option value="ATLANTA">ATLANTA</option>
                                    <option value="ATLANTA">ATLANTAaaaaa</option>
                                </select>
                            </div>
                            <input type="text" class="form-control" placeholder="Order Code No" />
                        </div>
                    </dt>
                    <dt className="col-12 text-center">
                        <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check&nbsp;&nbsp;&nbsp;</button>
                    </dt>
                </dl><br />
                <dl className="row  ">
                    <dt className="col-4">Brand</dt> <dd className="col-8">APEX</dd>
                    <dt className="col-4">Order Code</dt> <dd className="col-8">0106R050C10</dd>
                    <dt className="col-4">Description</dt> <dd className="col-8">Mn1 / Q6 / Right-Hand Helical / 500 (15x15) mm / Carbon Steel</dd>
                    <dt className="col-4">Stock Number</dt> <dd className="col-8">{">100 pcs"}</dd>
                </dl><br />
                <Downloaddrawing />
                <AddtoOrder />
            </dd>
        </dl>


    );
};



class RackCt extends React.Component {
    render() {
        const RackTabBody = () => {
            return (
                <dl className="row">
                    <dd className="col-12">
                        <dl className="row">
                            <dt className="col-12">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab">Module</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected>1</option>
                                            <option >1.5</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab">Quality</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected>6</option>
                                            <option >6M</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Helical Angle</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected>Right-Hand Helical</option>
                                            <option >Straight</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12 ">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab">Length </span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected="selected" value="500">500</option>
                                            <option selected="selected" value="1000">1000</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12 ">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab">Material</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected="selected" value="Carbon Steel">Carbon Steel</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12 ">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab ">	Screw Holes</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option value="1">Standard</option>
                                            <option value="0">Without</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab">Coating</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected="selected" value="0">None</option>
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>
                            <dt className="col-12">
                                <div className="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text rack-Lab">Interface</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <select class="form-control">
                                            <option selected="selected" value="0">None</option>
                                            <option value="90">A1</option>
                                        </select>
                                    </div>
                                </div>
                            </dt>

                        </dl>
                        <dl className="row">
                            <dt className="col-12  text-center ">
                                <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check&nbsp;&nbsp;&nbsp;</button>
                            </dt>
                        </dl> <br />
                        <dl className="row  ">
                            <dt className="col-4">Order Code</dt> <dd className="col-8">0106R050C10</dd>
                            <dt className="col-4">Description</dt> <dd className="col-8">Mn1 / Q6 / Right-Hand Helical / 500 (15x15) mm / Carbon Steel</dd>
                            <dt className="col-4">Stock Number</dt> <dd className="col-8">{">100 pcs"}</dd>
                        </dl><br />
                        <Downloaddrawing />
                        <AddtoOrder />

                    </dd>
                </dl>
            );
        };
        return (
            <NavTabs head="SELECTION I" head2="SELECTION II" home="Rackhome" profile="Rackprofile" body={<RPTabBody />} body2={<RackTabBody />} />
        );
    }
}

const PinionTabBody = () => {
    return (
        <dl className="row">
            <dd className="col-12">
                <dl className="row">
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion">A Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeA.png" className="img-thumbnail " />
                    </dt>
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion2" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion2">B Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeB.png" className="img-thumbnail " />
                    </dt>
                </dl>
                <dl className="row">
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion3" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion3">C Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeC.png" className="img-thumbnail " />
                    </dt>
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion4" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion4">D Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeD.png" className="img-thumbnail " />
                    </dt>
                </dl>
                <dl className="row">
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion5" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion5">E Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeE.png" className="img-thumbnail " />
                    </dt>
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion6" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion6">F Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeF.png" className="img-thumbnail " />
                    </dt>
                </dl>
                <dl className="row">
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion7" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion7">G Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeG.png" className="img-thumbnail " />
                    </dt>
                    <dt className="col-6 col-xl-6">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="RalPinion8" name="RalPinion" class="custom-control-input" />
                            <label class="custom-control-label" for="RalPinion8">H Series</label>
                        </div>
                        <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeH.png" className="img-thumbnail " />
                    </dt>
                </dl><br />
                <dl className="row">
                    <dt className="col-12">
                        <div className="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text rack-Lab">Module</span>
                            </div>
                            <div class="input-group-prepend">
                                <select class="form-control">
                                    <option selected>1</option>
                                    <option >1.5</option>
                                </select>
                            </div>
                        </div>
                    </dt>
                    <dt className="col-12">
                        <div className="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Helical Angle</span>
                            </div>
                            <div class="input-group-prepend">
                                <select class="form-control">
                                    <option selected>Right-Hand Helical</option>
                                    <option >Straight</option>
                                </select>
                            </div>
                        </div>
                    </dt>
                    <dt className="col-12">
                        <div className="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text rack-Lab">No. of Teeth</span>
                            </div>
                            <div class="input-group-prepend">
                                <select class="form-control">
                                    <option selected>17</option>
                                    <option >20</option>
                                </select>
                            </div>
                        </div>
                    </dt>
                    <dt className="col-12">
                        <div className="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text rack-Lab">Sub-Series </span>
                            </div>
                            <div class="input-group-prepend">
                                <select class="form-control">
                                    <option selected>B031</option>
                                </select>
                            </div>
                        </div>
                    </dt>
                </dl>
                <dl className="row">
                    <dt className="col-12  text-center ">
                        <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check&nbsp;&nbsp;&nbsp;</button>
                    </dt>
                </dl> <br />
                <dl className="row  ">
                    <dt className="col-4">Order Code</dt> <dd className="col-8">0106R050C10</dd>
                    <dt className="col-4">Description</dt> <dd className="col-8">Mn1 / Q6 / Right-Hand Helical / 500 (15x15) mm / Carbon Steel</dd>
                    <dt className="col-4">Stock Number</dt> <dd className="col-8">{">100 pcs"}</dd>
                </dl><br />
                <Downloaddrawing />
                <AddtoOrder />
            </dd>
        </dl>
    );
};

class PinionCt extends React.Component {
    render() {
        return (
            <NavTabs head="SELECTION I" head2="SELECTION II" home="Pinionhome" profile="Pinionprofile" body={<RPTabBody />} body2={<PinionTabBody />} />
        );
    }
}



class AccessoryCt extends React.Component {
    render() {
        const ACRTabBody = () => {
            return (
                <dl className="row">
                    <dd className="col-12">
                        <dl className="row">
                            <dt className="col-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <select className="form-control ">
                                            <option value="A">Rack Gauge for Installation</option>
                                            <option value="B">Shrink-Disc</option>
                                            <option value="F">L Series of Gearbox</option>
                                        </select>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Order Code No" />
                                </div>
                            </dt>
                            <dt className="col-12 text-center">
                                <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check&nbsp;&nbsp;&nbsp;</button>
                            </dt>
                        </dl>
                        <dl className="row  ">
                            <dt className="col-4">Order Code</dt> <dd className="col-8">B020</dd>
                            <dt className="col-4">Prat No.</dt> <dd className="col-8">Z0947900001</dd>
                            <dt className="col-4">Description</dt> <dd className="col-8">Mn1-D2-L20(B020)</dd>
                        </dl><br />
                        <AddtoOrder />

                    </dd>
                </dl>
            );
        };
        return (
            <NavOneTabs head="SELECTION I" head2="SELECTION II" home="Accessoryhome" profile="Accessoryprofile" body={<ACRTabBody />} />
        );
    }
}



class CustomizedOrderCt extends React.Component {
    render() {
        const CustomizedOrderTabBody = () => {
            return (
                <dl className="row">
                    <dd className="col-12">
                        <dl className="row">
                            <dt className="col-4">
                                Customizing Drawing No.
                        </dt>
                            <dt className="col-8">

                                <input type="text" class="form-control" placeholder="Customizing Drawing No." />
                            </dt>
                        </dl>
                        <dl className="row">                    <dt className="col-12 text-center">
                            <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check&nbsp;&nbsp;&nbsp;</button>
                        </dt></dl>
                        <dl className="row  ">
                            <dt className="col-4">Order Code</dt> <dd className="col-8">B020</dd>
                            <dt className="col-4">Prat No.</dt> <dd className="col-8">Z0947900001</dd>
                            <dt className="col-4">Description</dt> <dd className="col-8">Mn1-D2-L20(B020)</dd>
                        </dl><br />
                        <AddtoOrder />

                    </dd>
                </dl>


            );
        };
        return (
            <NavOneTabs head="SELECTION I" home="CustomizedOrderhome" profile="CustomizedOrderprofile" body={<CustomizedOrderTabBody />} />
        );
    }
}


class RackPinion extends React.Component {
    render() {
        return (
            <main role="main" className="container-fluid"> <br />
                <br />
                <br />
                <PageTitle head={<h3>Rack + Pinion</h3>} />
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head="Rack" accordion="accordion" collapse="collapse1" body={<RackCt />} />
                    </div>
                </dl>
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head="Pinion" accordion="accordion2" collapse="collapse2" body={<PinionCt />} />
                    </div>
                </dl>
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head="Accessory" accordion="accordion3" collapse="collapse3" body={<AccessoryCt />} />
                    </div>
                </dl>
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head={<div>Re-Order of <br /> Customized Rack / Pinion </div>} accordion="accordion4" collapse="collapse4" body={<CustomizedOrderCt />} />
                    </div>
                </dl>
            </main>
        );
    }
}

class GearboxRackPinion extends React.Component {
    render() {
        const GRPstep1 = () => (
            <dl className="row">
                <dd className="col-12">

                    <dl className="row text-center">
                        <dt className=" col-12">
                            <img src="http://www.apexdyna.com/weborder/image/motion.gif" width="400px" />
                            <img src="http://www.apexdyna.com/weborder/image/gear3.png" width="400px" />
                        </dt>
                    </dl>
                    <dl className="row no-gutters ">
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Weight of load M</span>
                                </div>
                                <div class="input-group-prepend col-3   no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">Kg</span>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Velocity V</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2">m/s</span>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Acceleration time</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">sec</span>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Running time</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">sec</span>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Deceleration time</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">sec</span>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text  GRPstp1Lab">Idle time</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">sec</span>
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Duty cycle (ED)</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">%</span>
                                </div>

                                <div class="input-group-prepend  px-1 pt-2  ">
                                    <ModalCt btncontrol={
                                        <a href="#" data-toggle="modal" data-target="#GRPmodal" ><i class="fas fa-info-circle fa-lg"></i>
                                        </a>
                                    }
                                        modalID="GRPmodal" head="Information"
                                        body={
                                            <img src="../weborder_rs/public/image/DutyED.png" className="img-thumbnail" />
                                        }
                                    />
                                </div>

                            </div>

                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab ">Safety factor</span>
                                </div>
                                <div class="input-group-prepend col-3  no-padding-LR">
                                    <input type="text" className="form-control" />

                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text GRPstp1Lab2 ">1~10</span>
                                </div>
                                <div className="input-group-prepend  px-1 pt-2 ">
                                    <ModalCt btncontrol={
                                        <a href="#" data-toggle="modal" data-target="#GRPmodal2" ><i class="fas fa-info-circle fa-lg"></i>
                                        </a>
                                    }
                                        modalID="GRPmodal2" head="Information"
                                        body={
                                            <dl className="row">
                                                <dd className="col-12 text-center text-danger">
                                                    For ED ≥ 60%, Safety factor ≥ 2 is recommended.
                                        </dd>
                                            </dl>
                                        }
                                    />
                                </div>
                            </div>
                        </dd>
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text  GRPstp1Lab">Angle θ</span>
                                </div>

                                <div class="input-group-prepend col-3  no-padding-LR ">
                                    <input type="text" className="form-control " />

                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text  ">Degree</span>
                                </div>
                            </div>
                        </dd>

                    </dl>
                    <dl className="row text-center">
                        <dd className="col-12"> <Link to="/GRPstep1" > <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check &nbsp;&nbsp;&nbsp;</button></Link></dd>
                    </dl>
                </dd>
            </dl>
        );
        const GRPstep2 = () => (
            <dl className="row">
                <dd className="col-12">
                    <dl className="row ">
                        <dd className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text font-weight-bold ">The Feed-Force for the application</span>
                                </div>
                                <div class="input-group-prepend ">
                                    <span class="input-group-text color-Apex ">396.2</span>
                                    <span class="input-group-text   ">N</span>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="row ">
                        <dt className="col-12">
                            <h3>Pinion</h3>
                        </dt>
                    </dl>
                    <dl className="row">
                        <dt className="col-6 col-xl-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="RalPinion" name="RalPinion" class="custom-control-input" />
                                <label class="custom-control-label" for="RalPinion">A Series</label>
                            </div>
                            <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeA.png" className="img-thumbnail " />
                        </dt>
                        <dt className="col-6 col-xl-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="RalPinion2" name="RalPinion" class="custom-control-input" />
                                <label class="custom-control-label" for="RalPinion2">B Series</label>
                            </div>
                            <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeB.png" className="img-thumbnail " />
                        </dt>
                    </dl>
                    <dl className="row">
                        <dt className="col-6 col-xl-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="RalPinion3" name="RalPinion" class="custom-control-input" />
                                <label class="custom-control-label" for="RalPinion3">C Series</label>
                            </div>
                            <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeC.png" className="img-thumbnail " />
                        </dt>
                        <dt className="col-6 col-xl-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="RalPinion4" name="RalPinion" class="custom-control-input" />
                                <label class="custom-control-label" for="RalPinion4">D Series</label>
                            </div>
                            <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeD.png" className="img-thumbnail " />
                        </dt>
                    </dl>
                    <dl className="row">
                        <dt className="col-6 col-xl-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="RalPinion5" name="RalPinion" class="custom-control-input" />
                                <label class="custom-control-label" for="RalPinion5">E Series</label>
                            </div>
                            <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeE.png" className="img-thumbnail " />
                        </dt>
                        <dt className="col-6 col-xl-6">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="RalPinion6" name="RalPinion" class="custom-control-input" />
                                <label class="custom-control-label" for="RalPinion6">F Series</label>
                            </div>
                            <img src="http://www.apexdyna.com/weborder/image/Pinion_TypeF.png" className="img-thumbnail " />
                        </dt>
                    </dl>
                    <dl className="row">
                        <dd className="col-12">
                            <div class="input-group">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text  rack-Lab ">Helical Angle</span>
                                </div>
                                <div class="input-group-prepend ">
                                    <select className="form-control" >
                                        <option></option>
                                        <option>Helical</option>
                                        <option>Straight</option>
                                    </select>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="row">
                        <dd className="col-12">
                            <div class="input-group ">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text  rack-Lab  ">Supporting  Gearbox Model</span>
                                </div>
                                <div class="input-group-prepend ">
                                    <select className="form-control" >
                                        <option></option>
                                        <option>AP, APK</option>
                                        <option>AD, ADR, ADS</option>
                                    </select>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="row">
                        <dd className="col-12">
                            <div class="input-group ">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text  rack-Lab  ">To Combine Rack Quality</span>
                                </div>
                                <div class="input-group-prepend ">
                                    <select className="form-control" >
                                        <option></option>
                                        <option>Q4</option>
                                        <option>Q5</option>
                                    </select>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="row text-center">
                        <dd className="col-12">  <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check &nbsp;&nbsp;&nbsp;</button></dd>
                    </dl>
                    <dl className="row"><dt className="col-12 text-center"><h5>Helical / B Series / Rack : Q4 </h5></dt></dl>
                    <dl className="row">
                        <dd className="col-12">
                            <table class="table-bordered w-100">
                                <thead>
                                    <tr className="text-center">
                                        <th scope="col">Select</th>


                                        <th scope="col">Module <br /> No.</th>
                                        <th scope="col">Teeth <br /> No.</th>

                                        <th scope="col">F2T <br /> (N)</th>
                                        <th scope="col">T2B <br /> (Nm)</th>
                                        <th scope="col">d <br /> (mm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <th scope="row"><button type="button" className="btn btn-success btn-sm">Select</button> </th>


                                        <td>5</td>
                                        <td>12</td>

                                        <td>31259</td>
                                        <td>995</td>
                                        <td>63.662</td>
                                    </tr>
                                    <tr className="text-center">
                                        <th scope="row"><button type="button" className="btn btn-success btn-sm">Select</button> </th>

                                        <td>5</td>
                                        <td>14</td>

                                        <td>42142</td>
                                        <td>1565</td>
                                        <td>74.272</td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                    <dl className="row"><dt className="col-12 text-center"><h5> Application Parameter </h5></dt></dl>
                    <dl className="row grid-bd mb-5">
                        <dt className="col-8">F2T (N)</dt> <div className="col-4">31259</div>
                        <dt className="col-8">T2B (Nm)</dt> <div className="col-4">995</div>
                        <dt className="col-8">d (mm)</dt> <div className="col-4">63.662</div>
                        <dt className="col-8">The Feed-Force for the application</dt> <div className="col-4">396.2(N)</div>
                        <dt className="col-8">The Speed of Pinion</dt> <div className="col-4">300 (RPM)</div>
                        <dt className="col-8">The Driving Torque (T2B) for the application</dt> <div className="col-4">12.6 (Nm)</div>
                    </dl>
                    <dl className="row no-gutters">
                        <dt className="col-12 mb-3">Pinion : C Series, Mn5, Z21, Helical, B080</dt>
                        <dt className="col-lg-8 col-xl-8  mb-3">Rack : Mn5, Q4, Helical, Length : &nbsp;
                          </dt>
                        <dt className="col-lg-4 col-xl-4  input-group  mb-3">
                            <select className="form-control col-xl-6">
                                <option>1000</option>
                            </select> &nbsp;mm
                        </dt>

                        <dt className="col-5 col-xl-8 input-group mb-3">  Material :
                        
                        </dt>
                        <dd className="col-7 col-xl-4 mb-3">
                            <select className="form-control">
                                <option>Carbon Steel</option>
                            </select>
                        </dd>
                        <dt className="col-5 col-xl-8 input-group mb-3"> Screw Holes :
                        
                        </dt>
                        <dd className="col-7 col-xl-4 mb-3">
                            <select className="form-control">
                                <option>Standard</option>
                                <option>Without</option>
                            </select>
                        </dd>
                        <dt className="col-5 col-xl-8 input-group mb-3">
                            Coating :
                        </dt>
                        <dd className="col-7 col-xl-4 mb-3">
                            <select className="form-control">
                                <option>None</option>
                            </select>
                        </dd>
                    </dl>
                    <dl className="row no-gutters">
                        <dt className="col-5 col-xl-8">Input estimated <br /> Motor Speed</dt> <dd className="col-3 col-xl-2"><input type="text" className="form-control" /></dd><dd className="col-3 col-xl-2"> RPM</dd>
                    </dl>
                    <dl className="row text-center">
                        <dd className="col-12">  <button class="btn btn-success btn-sm" type="button">&nbsp;&nbsp;&nbsp;Check &nbsp;&nbsp;&nbsp;</button></dd>
                    </dl>
                </dd>
            </dl>
        );
        const GRPstep3 = () => (
            <dl className="row">
                <dd className="col-12">
                    <dl className="row">
                        <dt className="col-12 text-center">
                            <h5>Summary of  Application Parameter</h5>
                        </dt>
                    </dl>
                    <dl className="row grid-bd">
                        <dt className="col-8">Feed-Force</dt> <div className="col-4">396.2(N)</div>
                        <dt className="col-8">Speed of Pinion</dt> <div className="col-4">300 (RPM)</div>
                        <dt className="col-8">Driving Torque (T2B)</dt> <div className="col-4">12.6 (Nm)</div>
                        <dt className="col-8">Estimated Motor Speed</dt> <div className="col-4">3500 (RPM)</div>
                        <dt className="col-8">Max. Reduction Ratio of Gearbox</dt> <div className="col-4">11.7</div>
                        <dt className="col-8">Min. Nominal Torque of Motor</dt> <div className="col-4">0.6 (Nm)</div>
                    </dl>

                    <dl className="row">
                        <dd className="col-12">
                            <AccordionCt head="Select Motor" accordion="accordionGRPgb" collapse="accordionGRPgb" body={<GRPselectmotor />} />
                        </dd>
                    </dl>
                    <dl className="row">
                        <dd className="col-12">
                            <AccordionCt head="Select Gearbox" accordion="accordionGRPgb2" collapse="accordionGRPgb2" body={<GRPselectGB />} />
                        </dd>
                    </dl>
                    <dl className="row">
                        <dd className="col-12">
                            <AccordionCt head="Summary of gearbox parameter" accordion="accordionGRPgb3" collapse="accordionGRPgb3" body={<GRPresult />} />
                        </dd>
                    </dl>
                </dd>
            </dl>
        );
        const GRPselectmotor = () => (
            <div>
                <dl className="row">
                    <dt className="col-3">
                        <label>Brand</label>
                    </dt>
                    <dd className="col-9">

                        <select name="month" className="form-control form-control-xs">
                            <option value="00"></option>
                            <option value="01">ABB</option>
                            <option value="02">ALLEN BRADLEY</option>
                            <option value="03">ALLEN BRADLEY</option>
                        </select>
                    </dd>
                    <dt className="col-3">
                        <label>Model</label>
                    </dt>
                    <dd className="col-9">
                        <select name="month" className="form-control form-control-xs">
                            <optgroup>
                                <option value="00"></option>
                                <option value="BMP0701F_PCD82+ATV32H037N4,ATV320U04N4"  >BMP0701F_PCD82+ATV32H037N4,ATV320U04N4</option>
                                <option value="8C1.1.30.1.xxxxxx.G.xxB">8C1.1.30.1.xxxxxx.G.xxB</option>
                                <option value="1326AB-A1G-11-xx">1326AB-A1G-11-xx</option>
                            </optgroup>
                        </select>
                    </dd>
                </dl>
                <dl className="row">
                    <dt className="col-12 text-center ">
                        <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp;&nbsp; Check &nbsp;&nbsp;&nbsp;</button>
                    </dt>
                </dl>
            </div>
        );
        const GRPselectGB = () => (
            <div>
                <dl className="row">
                    <dt className="col-12 text-center">
                        <div class="btn-toolbar d-inline-block" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group mr-2 " role="group" aria-label="First group">
                                <button type="button" class="btn btn-success btn-sm active"> &nbsp; Standard &nbsp;  &nbsp;</button>
                            </div>
                            <div class="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-warning btn-sm">Unlimited 1</button>
                            </div>
                        </div>
                    </dt>
                </dl><br />
                <dl className="row">
                    <dt className="col-6 col-sm-6 col-md-6">

                        <a href="#" data-toggle="modal" data-target="#gearboxInfoModal"  > <label className="text-dark">Gearbox</label> <i class="fas fa-info-circle fa-lg"></i>
                        </a>

                        <div class="modal fade" id="gearboxInfoModal">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Information</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <dl className="row">
                                            <dd className="col-12 text-danger">Material of AT series: Stainless</dd>
                                            <dd className="col-12 text-danger">Material of ATB series: Carbon Steel with Phosphate</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                        <label>Backlash</label>
                        <select name="month" className="form-control form-control-xs" disabled>
                            <option value="P0">P0</option>
                            <option value="P1">P1</option>
                        </select>
                    </dt>
                </dl><br />
                <dl className="row">
                    <dt className="col-12 text-center" >
                        <button type="button" className=" btn btn-success btn-sm">&nbsp;&nbsp;&nbsp; Check &nbsp;&nbsp;&nbsp;</button>
                    </dt>
                </dl>
            </div>
        );
        const GRPresult = () => (
            <div>
                <dl className="row no-gutters">

                    <dd class=" col-12 text-center">
                        <img src="http://www.apexdyna.com/images/gearbox/pro_samll01.png" width="191" height="180" />
                    </dd>

                    <dt class="col-12 text-center">
                        <h5 class="card-title">Ordering Code</h5>
                        <h4 class="card-text"><span class="badge badge-primary">AB090 - 003 - S2 - P2 /</span></h4>
                        <h4 class="card-text"><span class="badge badge-primary">ABB 8C1.1.30.1.xxxxxx.G.xxB</span></h4>
                    </dt>

                </dl><br />
                <hr />
                <Downloaddrawing />
                <hr />

                <dl className="row no-gutters  ">
                    <dd className="col-12">
                        <AccordionCt collapse="collapseGS" accordion="accordionGS" head={<dt className="col-12"><h5>Gearbox Specification</h5></dt>}
                            body={
                                <dl className="row">
                                    <dt className="col-5" >Model </dt> <dd className="col-7">AB090 - 003 - S2 - P2</dd>
                                    <dt className="col-5" >Ratio </dt> <dd className="col-7">3</dd>
                                    <dt className="col-5" >Shaft Option </dt> <dd className="col-7">S2: Keyway</dd>
                                    <dt className="col-5" >Backlash </dt> <dd className="col-7">P2: Standard Backlash</dd>
                                    <dt className="col-5" >Output Torque</dt> <dd className="col-7">130 Nm</dd>
                                    <dt className="col-5" >Rated Speed</dt> <dd className="col-7">4000 rpm</dd>
                                    <dt className="col-5" >Max. Torque</dt> <dd className="col-7">234 Nm</dd>
                                    <dt className="col-5" >Max. Speed</dt> <dd className="col-7">8000 rpm</dd>
                                    <dt className="col-5" >Inertia</dt> <dd className="col-7">0.61 kgcm<font size="1"><sup>^2</sup></font></dd>
                                    <dt className="col-5" >Weight </dt> <dd className="col-7">3.70 kg</dd>
                                    <dt className="col-5" >No Load </dt> <dd className="col-7">0.67 Nm<sup><font color="red">(3)</font></sup></dd>
                                </dl>
                            }
                        />
                    </dd>
                </dl>
                <hr />
                <dl className="row no-gutters">
                    <dd className="col-12">
                        <AccordionCt head={<dt className="col-12"><h5>Motor Specification</h5></dt>} collapse="collapseMS" accordion="accordionMS"
                            body={
                                <div className="row">
                                    <dt className="col-4" >Brand </dt> <dd className="col-8">ABB</dd>
                                    <dt className="col-4" >Model </dt> <dd className="col-8">8C1.1.30.1.xxxxxx.G.xxB</dd>
                                    <dt className="col-4" >Motor Shaft</dt> <dd className="col-8">19 mm</dd>
                                    <dt className="col-4" >Output Power </dt> <dd className="col-8">0.38 Kw</dd>
                                    <dt className="col-4" >Rated Speed </dt> <dd className="col-8">3000 rpm</dd>
                                    <dt className="col-4" >Rated Torque</dt> <dd className="col-8">1.20 Nm</dd>
                                    <dt className="col-4" >Max. Speed</dt> <dd className="col-8">3000 rpm</dd>
                                    <dt className="col-4" >Peak Torque</dt> <dd className="col-8">4.60 Nm</dd>
                                    <dt className="col-4" >Inertia</dt> <dd className="col-8">0.90 kgcm<font size="1"><sup>^2</sup></font></dd>
                                </div>
                            } />
                    </dd>
                </dl>
                <hr />
            </div>
        );
        return (
            <main role="main" className="container-fluid"> <br />
                <br />
                <br />
                <PageTitle head={<h3>Gearbox + Rack + Pinion</h3>} />
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head={<div>STEP 1 <br /> Application Parameter </div>} accordion="accordionGRP" collapse="collapseGRP" body={<GRPstep1 />} />
                    </div>
                </dl>
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head={<div> STEP 2 <br /> Select Pinion Model </div>} accordion="accordionGRP2" collapse="collapseGRP2" body={<GRPstep2 />} />
                    </div>
                </dl>
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head={<div>STEP 3 <br />Select Motor and Gearbox</div>} accordion="accordionGRP3" collapse="collapseGRP3" body={<GRPstep3 />} />
                    </div>
                </dl>
                <dl className="row">
                    <div className="offset-md-3 col-md-6">
                        <AccordionCt head={<div>STEP 4 <br /> Add to Order </div>} accordion="accordionGRP4" collapse="collapseGRP4" body={<AddtoOrderMerge />} />
                    </div>
                </dl>
            </main>
        );
    }
}




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
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            DesignTool
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item nav-link" to="/Gearbox">Gearbox</Link>
                            <Link className="dropdown-item nav-link" to="/RackPinion">Rack / Pinion</Link>
                            <Link className="dropdown-item nav-link" to="/GearboxRackPinion">Gearbox + Rack + Pinion</Link>
                        </div>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="btn btn-outline-success my-2 my-sm-0" formaction="./login.html" value="Sing Out" type="submit" />
                </form>
            </div>
        </nav>
        <Route path="/" exact component={Order} />
        <Route path="/Gearbox" component={Gearbox} />
        <Route path="/RackPinion" component={RackPinion} />
        <Route path="/GearboxRackPinion" component={GearboxRackPinion} />
    </ReactRouterDOM.HashRouter>

)


ReactDOM.render(<App />, document.querySelector('#root'));