import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './randolphTitle.png';
//import logo from "../resources/projectResources/Randolph/randolphTitle.png"

export class ProjectItem extends Component {
  getStyle = () => {
      return {
        background: '#f4f4f4',
        padding: '10px',
        //borderBottom: '1px #ccc dotted',  
        //float: 'center',
        display: 'flex',
        flexDirection: 'row',
        textDecoration: this.props.projectItem.ready ? 'line-through' : 'none'
      }
  }

  markReady = (e) => {
      console.log(this.props)
  }

  //getTitle = (t) => {
  getTitle(t) {
    var retList;
    var i = 0;
    for(i=0;i<t.length;i++) {
      retList += "<span className='w" + i + "'>" + t[i] + "</span>";
    }
    return retList;
  }

  render() {
    const { id, title, logo } = this.props.projectItem;
    let titleImage = projectFolder(`./${logo}`);
    //console.log(logo);
    var titleHtml = this.getTitle(title);
    return (
      <div>
        <div className="container-fluid image-cropper">
          <img src={titleImage} alt="project logo" className="img"/>
        </div>
        <p>
          <div id="title_arc">
            {title.split("").map((v,i) => {return (<span className={'w'+i}>{v}</span>);})}
          </div>
        </p>
      </div>
    )
  }
}

ProjectItem.propTypes = {
    projectItem: PropTypes.object.isRequired
}

const projectFolder = require.context('../resources/projectResources', true)


//const imgStyle = {
//  maxWidth: '300px',
//  maxHeight: '300px'
//}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ProjectItem


//<input type="checkbox" onChange={this.props.markReady.bind(this, id)}/> {' '}
//<button onClick={this.props.delProject.bind(this, id)} style={btnStyle}>X</button>