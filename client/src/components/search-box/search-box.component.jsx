import React, {Component} from 'react';
import {connect} from 'react-redux';
import './search-box.style.css';


class SearchBox extends Component{
  render(){
     const {search,updateSearch,placeholder}=this.props;
     return (
       <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
            placeholder={placeholder}
            />
        <button type="submit" className="search-button">
          <i className="fas fa-search" />
        </button>
      </div>

  );
}

}

const mapStateToProps=(state)=>{
  return {
    user:state.auth
  };
}

export default connect(mapStateToProps)(SearchBox);
