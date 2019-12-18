import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import './header.style.css';

class Header extends Component{

render(){
  const rederContect = ()=>{
    switch(this.props.user){
            case null:
              return (
                <React.Fragment>
                  <li><a href="/auth/google">Sign Up</a></li>
                </React.Fragment>
          );
            case false:
                return  <li><a href="/auth/google">Sign Up</a></li>
            default:
              //console.log(this.props.user);
                 return(
                     <React.Fragment>
                       <li><a href="/auth/logout">Logout</a></li>
                       <li><Link to="/profile">Profile</Link></li>
                      <li><a href="https://storyyo.herokuapp.com/auth/google">StoryYO</a></li>
                     </React.Fragment>
                 )
        }
  };

  return (
          <nav>
             <div className="bar-color navbar">
              <Link to={this.props.user ? '/profile' : '/'} className="brand-logo">Courser</Link>
              <ul id="nav-mobile" className="ul-position">
                {rederContect()}
             </ul>
             </div>
         </nav>
  );
}

}

const mapStateToProps=(state)=>{
  return {
    user:state.auth
  };
}

export default connect(mapStateToProps)(Header);
