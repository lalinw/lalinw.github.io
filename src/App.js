import React, { Component } from "react";
import './App.css';
import placeholderImage from './catlogo.PNG'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const jsonData = require('./projects.json');
    this.setState({ data: jsonData.Projects });
  }

  formatter = (proj) => {
    return (
      <div class="project-item">
        {proj.img === null 
          ? <img class="project-img" src={placeholderImage}/> 
          : <img class="project-img" src={proj.img}/>}
        
        <h4 style={{ textAlign: "center" }}>
          {proj.title} 
        </h4>
        <div class="links" style={{ textAlign: "center" }}>
          {proj.github !== null && <a href={proj.github} class="icon"><GitHubIcon/></a>}
          {proj.website !== null && <a href={proj.website} class="icon"><WebIcon/></a>}
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            {proj.lang.join(", ")}
            <br/>
            {proj.integr !== null && "Integration(s): " + proj.integr.join(", ")}
          </p>
        </div>
        <p>&emsp;{proj.descr}</p>
        
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "left" }}>Projects</h1> 
        {
          this.state.data.map((eachProject) => {
            return this.formatter(eachProject);
          })
        }
      </React.Fragment>
    );
  }
}


export default App;
