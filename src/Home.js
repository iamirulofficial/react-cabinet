import react from 'react';
import './style.css'
import wava from './the-wawa-foundation-1.svg'
import log from './log.png'
import App from './App'
import logo from './logo.png'
import OldPlan from './OldPlan';
class Home extends react.Component{
    constructor(props){
        super(props);
        this.state = {'view':'create'}
    }
    updateView = (scr,event) => {
        event.preventDefault();
        console.log(scr)
        this.setState({view:scr})
    }
    render(){
        return(
            <div className="main">
                <div id="menu">
                    <div className="nav-bar" >
                        <center><img height="50" width="50" src={logo} alt="techolution-logo" style={{marginTop:"50px"}} /></center>
                        <img height="70" src={wava} alt="wawa-logo" />
                        <br />
                        <ul>
                            <li>
                                <a href="/" onClick={(event)=> this.updateView('create',event)} className="side_link">
                                    <div>
                                        <i className="fa fa-home" aria-hidden="true"></i> &nbsp; Create Planogram
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" onClick={(event)=> this.updateView('view',event)} className="side_link">
                                    <div>
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i> &nbsp; My Planograms
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content_panel" id="content">
                    <div className="header_menu">
                        <div>
                            <a href="/"> <img src={log} alt="login-logo" className="img_head"/></a>
                        </div>
                    </div>
                    <div className="card_layout">
                        {this.state.view ==="create" && <App />}
                        {this.state.view ==="view" && <OldPlan />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;