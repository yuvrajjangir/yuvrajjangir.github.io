import React from "react";
import repl from "../../Images/replit-icon-seeklogo.com.svg"
import codesand from "../../Images/code-sandbox-seeklogo.com.svg"
import git from "../../Images/Untitled design.png"
import vs from "../../Images/visual-studio-code-icon.png"
import netl from "../../Images/netlify-icon-seeklogo.com.svg"
import slack from "../../Images/slack.png"

function Toolstack() {
  return (
    <div className="tools" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="skills-card">
        <img style={{width:"85px"}} src={codesand} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>CodeSandBox</p>
      </div>
       <div className="skills-card">
       <img style={{width:"85px"}} src={repl} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>Replit</p>
      </div>
      <div className="skills-card">
       <img style={{width:"80%"}} src={git} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>Github</p>
      </div>
      <div className="skills-card">
       <img style={{width:"80%"}} src={vs} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>VsCode</p>
      </div>
      <div className="skills-card">
       <img style={{width:"90%"}} src={netl} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>Netlify</p>
      </div>
      <div className="skills-card">
       <img style={{width:"80%"}} src={slack} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>Slack</p>
      </div>
    </div>
  );
}

export default Toolstack;
