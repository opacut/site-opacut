import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import About from './Components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

//function App() {
class App extends Component {
  state = {
    projects: []
  }

  componentDidMount(){
    this.setState({ projects: require('./resources/projects.json')});
  }

  // Toggle Ready
  markReady = (id) => {
    this.setState({ projects: this.state.projects.map(y => {
      if (y.id === id) {
        y.ready = !y.ready
      }
      return y;
    }) });
  }

  // Delete Project
  delProject = (id) => {
    this.setState({ projects: [...this.state.projects.filter(y => y.id !== id)] });
  }

  // Add Project
  addProject = (title) => {
    const newProject = {
      id: uuid.v4(),
      title: title,
      ready: true
    }
    this.setState({ projects: [...this.state.projects, newProject] })
  }

  render() {
    //console.log(this.state.projs)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddProject addProject={this.addProject}/>
                <div className="row flexbox">
                  <Projects projects={this.state.projects} markReady={this.markReady} delProject={this.delProject}/>    
                </div>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>        
        </div>
      </Router>
    );
  }
}

export default App;

/* 
{
  id: uuid.v4(),
  title: 'Randolph',
  logo: 'none',
  ready: false
},
{
  id: uuid.v4(),
  title: 'Dreamquest',
  logo: 'none',
  ready: false
},
{
  id: uuid.v4(),
  title: 'Elements',
  logo: 'none',
  ready: false
} */