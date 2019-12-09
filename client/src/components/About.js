import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName:"loading",
      image:""
    };
  }

  componentDidMount() {
    if(this.props.user){
            this.setState({
                firstName:this.props.user.firstName,
                image:this.props.user.image
       })
     }
   }

render(){
  if(!this.props.user){
       this.props.history.push('/')
   }
  return (
        <section className="toggle2 cid-qv5AjKhpAC" id="toggle2-5e" data-rv-view="5623">

      <div className="container">
          <div className="row">
                  <div className="col-auto toggle-content">
                      <h2 className="mbr-section-title pb-3 align-left mbr-fonts-style display-4">
                          Toggle FAQ Template
                      </h2>

                      <div id="bootstrap-toggle" className="toggle-panel accordionStyles tab-content pt-5 mt-2">
                          <div className="card">
                              <div className="card-header" role="tab" id="headingOne">
                                  <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse1_564" aria-expanded="false" aria-controls="collapse1">
                                      <h4 className="mbr-fonts-style display-5">
                                          <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> What is Mobirise?
                                      </h4>
                                  </a>
                              </div>
                              <div id="collapse1_564" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
                                  <div className="panel-body p-4">
                                      <p className="mbr-fonts-style panel-text display-5">
                                         Mobirise is an offline app for Window and Mac to easily create small/medium websites, landing pages, online resumes and portfolios, promo sites for apps, events, services and products.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="card">
                              <div className="card-header" role="tab" id="headingTwo">
                                  <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse2_564" aria-expanded="false" aria-controls="collapse2">
                                      <h4 className="mbr-fonts-style display-5">
                                          <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> Is it good for me?
                                      </h4>
                                  </a>
                              </div>
                              <div id="collapse2_564" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo">
                                  <div className="panel-body p-4">
                                      <p className="mbr-fonts-style panel-text display-7">
                                         Mobirise is perfect for non-techies who are not familiar with the intricacies of web development and for designers who prefer to work as visually as possible, without fighting with code. Also great for pro-coders for fast prototyping and small customers' projects.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="card">
                              <div className="card-header" role="tab" id="headingThree">
                                  <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse3_564" aria-expanded="true" aria-controls="collapse3">
                                      <h4 className="mbr-fonts-style display-5">
                                          <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> Why Mobirise?
                                      </h4>
                                  </a>
                              </div>
                              <div id="collapse3_564" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                  <div className="panel-body p-4">
                                      <p className="mbr-fonts-style panel-text display-7">
                                         Key differences from traditional builders:<br/>* Minimalistic, extremely <strong>easy-to-use</strong> interface<br/>* <strong>Mobile</strong>-friendliness, latest website blocks and techniques "out-the-box"<br/>* <strong>Free</strong> for commercial and non-profit use</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              <div className="col-auto mbr-figure">
                   <img src={this.state.image} alt="Mobirise" style={{width:'40vw',height:'70vh',padding:'20px'}} title="" media-simple="true" />
              </div>
          </div>
      </div>
</section>
  );
}

}

const mapStateToProps = (state)=>{
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(About);
