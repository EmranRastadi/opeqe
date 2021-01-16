import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './Data.json';

// import Data from './Data';


class App extends Component {


    render() {
        return (<div>
                {console.log(Data)}
                <div className="scroll" style={{background: "#fed200"}}>
                    <div className="container"
                         style={{width: "90%"}}>
                        <nav style={{background: "#fed200", position: 'fixed', zIndex: 9, right: 0}}
                             className={`scroll_nav`}>
                            <div className="nav-wrapper"
                                 style={{padding: "0 60px"}}>
                                <a
                                   className="brand-logo"
                                   style={{marginTop: "10px"}}>
                                    <img src="img/opeqe-logo.svg" alt=""/>
                                </a> <a 
                                        data-target="mobile-demo"
                                        className="sidenav-trigger"> < i className="material-icons"
                                                                         style={{color: "#000000"}}> menu </i></a>
                                <ul className="right hide-on-med-and-down top_menu">
                                    <li>< a 
                                            className="rol"> Reservation </a></li>
                                    <li>< a 
                                            className="rol"> Orders </a></li>
                                    <li>< a 
                                            className="rol"> Locations </a></li>
                                    <li>< a 
                                            className="border"> login </a></li>
                                    <li>< a 
                                            className="fulls"> Sign Up </a></li>
                                    <li>< a 
                                            className="iconss"> < i style={{marginTop: "-10px"}}
                                                                    className="material-icons"> shopping_cart </i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <ul className="sidenav" id="mobile-demo">
                            <li>< a > Reservation </a></li>
                            <li>< a > Orders </a></li>
                            <li>< a > Locations </a></li>
                             <li>< a className="border"> login </a></li>
                                    <li>< a 
                                            className="fulls"> Sign Up </a></li>
                                    <li>< a 
                                            className="iconss"> < i style={{marginTop: "0px"}}
                                                                    className="material-icons"> shopping_cart </i></a>
                                    </li>
                        </ul>
                    </div>
                </div>
                <div className="top_page">
                </div>
                <div className="container"
                     style={{width: "90%", marginTop: "20px"}}>
                    <div className="row">
                        <div className="col s12">


                            <div className="row">

                                <div className="col s12">

                                    <div
                                        className="slider_product">
                                        <div className="top_slider">
                                            <h1 style={{fontSize: "26px"}}> Sandwich </h1> <span
                                            className="mini_move"> </span></div>
                                        <div className="gallery js-flickity"
                                             style={{marginTop: "15px"}}
                                             data-flickity-options='{ "wrapAround": true }'>

                                            {
                                                Data.map(item => {
                                                    if (item.type === "Sandwich") {
                                                        let happy;
                                                        let dis;
                                                        if (item.discount)
                                                        {
                                                            happy = true;
                                                        }else{
                                                            happy = false;
                                                        }
                                                        return (
                                                            <div className="gallery-cell">
                                                                <div className="product_box">
                                                                    <div className="img_pro"
                                                                         description="">
                                                                        <img src={item.img} alt={item.name}/>
                                                                        {happy ? <span id="happy_hour">happy hour</span> :  '' }</div>
                                                                    <div className="pro_content">
                                                                        <h1 style={{fontSize: "18px"}}>{item.name}</h1>
                                                                        <h1
                                                                            style={{
                                                                                fontSize: "16px",
                                                                                color: "#026764"
                                                                            }}>{item.restName}</h1> <
                                                                        h1 style={{
                                                                        fontSize: "16px",
                                                                        color: "#616161"
                                                                    }}>{item.location}</h1>
                                                                        <div style={{marginTop: "5px"}}>
        <span style={{float: "left"}}> < i className="material-icons"
                                           style={{fontSize: "16px"}}> timer </i> {item.time}</span>
                                                                            <span className="badge">${happy ? Number(item.price - ((item.price * item.discount) / 100)).toFixed(2)  : item.price }</span>
                                                                            <span id="free_pick"> Free pickup </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }


                                        </div>


                                    </div>

                                </div>




                                <div className="col s12">

                                    <div
                                        className="slider_product">
                                        <div className="top_slider">
                                            <h1 style={{fontSize: "26px"}}> BreakFast </h1> <span
                                            className="mini_move"> </span></div>
                                        <div className="gallery js-flickity"
                                             style={{marginTop: "15px"}}
                                             data-flickity-options='{ "wrapAround": true }'>

                                            {
                                                Data.map(item => {
                                                    if (item.type === "Breakfast") {
                                                        let happy;
                                                        let dis;
                                                        if (item.discount)
                                                        {
                                                            happy = true;
                                                        }else{
                                                            happy = false;
                                                        }
                                                        return (
                                                            <div className="gallery-cell">
                                                                <div className="product_box">
                                                                    <div className="img_pro"
                                                                         description="">
                                                                        <img src={item.img} alt={item.name}/>
                                                                         {happy ? <span id="happy_hour">happy hour</span> :  '' }</div>
                                                                    <div className="pro_content">
                                                                        <h1 style={{fontSize: "18px"}}>{item.name}</h1>
                                                                        <h1
                                                                            style={{
                                                                                fontSize: "16px",
                                                                                color: "#026764"
                                                                            }}>{item.restName}</h1> <
                                                                        h1 style={{
                                                                        fontSize: "16px",
                                                                        color: "#616161"
                                                                    }}>{item.location}</h1>
                                                                        <div style={{marginTop: "5px"}}>
        <span style={{float: "left"}}> < i className="material-icons"
                                           style={{fontSize: "16px"}}> timer </i> {item.time}</span>
                                                                            <span className="badge">${happy ? item.price - ((item.price * item.discount) / 100)  : item.price }</span>
                                                                            <span id="free_pick"> Free pickup </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }


                                        </div>


                                    </div>

                                </div>








                            </div>


                        </div>
                    </div>
                </div>


                <footer className="page-footer"
                        style={{
                            position: "relative",
                            background: "#000000 !important"
                        }}>
                    <div id="over_box"></div>
                    <div className="container"
                         style={{width: "45%"}}>
                        <div className="row"
                             style={{position: "relative"}}>
                            <div className="main_svg_box">
                                <img
                                    src="img/footershape.svg"
                                    className="svg_img"/>
                                <div id="top_board">
                                </div>
                                <div
                                    id="bottom_board">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container"
                        style={{
                            backgroundColor: "#000000",
                            width: "80%"
                        }}>
                        <div className="row">
                            <div
                                className="col s12">
                                <div
                                    className="footer_menu_top">
                                    <ul>
                                        <li> Location
                                        </li>
                                        <li> Terms
                                        </li>
                                        <li> Gallery
                                        </li>
                                        <li> Support
                                        </li>
                                        <li> Services
                                        </li>
                                        <li> About
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div
                                className="col s12"
                                style={{marginTop: "15px"}}>
                                <div
                                    className="col s12 l3"
                                    style={{marginBottom: "20px"}}>
                                    <h1
                                        style={{
                                            fontSize: "23px",
                                            fontWeight: "bold"
                                        }}> Main
                                        Menu </h1>
                                    <ul
                                        className="mini_menu">
                                        <li> Pickup
                                        </li>
                                        <li> Delivery
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="col s12 l3"
                                    style={{marginBottom: "20px"}}>
                                    <h1
                                        style={{
                                            fontSize: "23px",
                                            fontWeight: "bold"
                                        }}> Orders </h1>
                                    <ul
                                        className="mini_menu">
                                        <li> Upcoming
                                            Orders
                                        </li>
                                        <li> Recent
                                            Orders
                                        </li>
                                    </ul>
                                </div>


                                <div
                                    className="col s12 l3"
                                    style={{marginBottom: "20px"}}>
                                    <h1
                                        style={{
                                            fontSize: "23px",
                                            fontWeight: "bold"
                                        }}> Reservation </h1>
                                    <ul
                                        className="mini_menu">
                                        <li> Recent
                                            Reservation
                                        </li>
                                        <li> Wait
                                            To
                                            Be
                                            Stated
                                        </li>
                                    </ul>
                                </div>


                                <div
                                    className="col s12 l3"
                                    style={{marginBottom: "20px"}}>
                                    <h1
                                        style={{
                                            fontSize: "23px",
                                            fontWeight: "bold"
                                        }}> Profile </h1>
                                    <ul
                                        className="mini_menu">
                                        <li> Promos
                                            &
                                            Credits
                                        </li>
                                        <li> Rewards
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="col s12 l3"
                                    style={{marginBottom: "20px"}}>
                                    <h1
                                        style={{
                                            fontSize: "23px",
                                            fontWeight: "bold"
                                        }}> Support </h1>
                                    <ul
                                        className="mini_menu">
                                        <li> Contact
                                            us
                                        </li>
                                        <li> Live
                                            Chat
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className="col s12"
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px"
                                }}>
                                <h1
                                    style={{
                                        fontSize: "23px",
                                        fontWeight: "bold"
                                    }}> Special
                                    Offers </h1>
                                <ul
                                    className="mini_menu">
                                    <li> Happy
                                        Hour(Egg
                                        Burger
                                        with
                                        Truffle
                                        Mayo)
                                    </li>
                                    <li> Happy
                                        Hour(California
                                        Chicken
                                        Salad)
                                    </li>
                                    <li> Happy
                                        Hour(Pad
                                        Thai)
                                    </li>
                                    <li> Happy
                                        Hour(Quarter
                                        Dark
                                        and
                                        Leg)
                                    </li>
                                </ul>
                            </div>

                            <div className="divider"></div>

                            <div
                                className="col s12"
                                style={{marginBottom: "15px"}}>
                                <h1
                                    style={{fontSize: "18px"}}>
                                    Delight
                                    customers
                                    everywhere
                                    with
                                    a
                                    branded
                                    custom
                                    -
                                    built
                                    native
                                    iOS,
                                    native
                                    Android
                                    and
                                    Installable
                                    Website
                                    Application.Opeqe
                                    is
                                    reliable,
                                    fast
                                    and
                                    commission
                                    free
                                    all
                                    -
                                    in
                                    -one
                                    ordering
                                    solutions
                                    for
                                    multi
                                    -
                                    location
                                    or
                                    single
                                    location
                                    restaurants. </h1>

                                <div
                                    className="col s12 l6"
                                    style={{marginTop: "25px"}}>
                                    <span> & copy; 2021 OPEQE INC </span> &nbsp;&nbsp; | &nbsp;&nbsp; <span> & copy; Terms & Conditions </span> &nbsp;&nbsp; | &nbsp;&nbsp;
                                    <span> & copy; Privacy Policy </span>
                                </div>
                                <div
                                    className="col s12 l6"
                                    id="icon_motion">
        <span> <img src="img/youtube.png"/>
            </span> <span> <img
                                    src="img/instagram.png"/>
                </span> <span> <img
                                    src="img/twitter.png"/>
                    </span> <span> <img
                                    src="img/facebook-app-logo.png"/>
                        </span></div>

                            </div>

                        </div>
                    </div>
                </footer>


            </div>
        );
    }

}

export default App;