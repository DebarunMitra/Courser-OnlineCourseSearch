import React, {Component} from 'react';
import {connect} from 'react-redux';
import './pagination.style.css';
import {paginationCourses} from '../../actions/myactions';


class Pagination extends Component{
  constructor(props){
    super(props);
  }

  getPage=e=>{
    for (let i = 1; i <= 6; i++) {
      //change the selected page color
    if (i == e.target.value) {
        document.getElementById(i).className="pagination-active";
    } else {
        document.getElementById(i).className="";
    }
  }

  let page=e.target.value,
      subject=(document.getElementById("courseSearch").value)?document.getElementById("courseSearch").value:"blank";

  this.props.paginationCourses(subject,page);

}

  render(){

     return (
       <div className="pagination-container">
       <div className="pagination">
          <input type="button" className="pagination-newer" value="PREV" />
            <span className="pagination-inner">
                 <input id="1" type="button" className="pagination-active" onClick={this.getPage} value="1" />
                 <input id="2" type="button" onClick={this.getPage} value="2" />
                 <input id="3" type="button" onClick={this.getPage} value="3" />
                 <input id="4" type="button" onClick={this.getPage} value="4" />
                 <input id="5" type="button" onClick={this.getPage} value="5" />
                 <input id="6" type="button" onClick={this.getPage} value="6" />
            </span>
          <input type="button" className="pagination-older" value="NEXT" />
        </div>
      </div>
    );
  }
}

export default connect(null,{paginationCourses})(Pagination);
