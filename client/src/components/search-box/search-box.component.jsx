import React, {Component} from 'react';
import {connect} from 'react-redux';
import './search-box.style.css';
import {searchCourses} from '../../actions/myactions';



class SearchBox extends Component{
  constructor(props){
    super(props);

    this.state={
      searchUpdate:'',
      finalSearch:''
    }
  }

  updateSearch=e=>{
    this.setState({
      searchUpdate:e.target.value
    })
    this.setState({
      finalSearch:e.target.value
    });
  }

  getSearch=e=>{
    e.preventDefault();
    this.setState({
      finalSearch:this.state.searchUpdate
    });
    this.props.searchCourses(this.state.finalSearch)
  }


  render(){
     const {search,updateSearch,placeholder}=this.props;
     return (
       <div className="search-box">
          <form onSubmit={this.getSearch}>
            <input
              id="courseSearch"
              type="text"
              className="search-bar"
              value={search}
              onChange={this.updateSearch}
              placeholder={placeholder}
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search" />
              </button>
          </form>
      </div>

  );
}

}

const mapStateToProps=(state)=>{
  return {
    user:state.auth
  };
}

export default connect(mapStateToProps,{searchCourses})(SearchBox);
