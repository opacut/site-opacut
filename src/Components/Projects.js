import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

//import './App.css';

class Projects extends Component {

    render() {
    //console.log(this.props.projs)
    return this.props.projects.map((y) => (
        <div className="col col-md-4">
            <ProjectItem key={y.id} projectItem={y} markReady={this.props.markReady} delProject={this.props.delProject}/>
        </div>
    ));
  }
}

const divStyle = {
    display: 'flex',
    flexDirection: 'row'
}

// Proptypes
Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;
