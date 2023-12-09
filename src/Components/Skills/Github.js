import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../../App.css"
function Github() {
    var initialURL = "https://github-readme-stats.vercel.app/api?username=yuvrajjangir&show_icons=true&hide_border=true&theme=synthwave";
    var initialURL2 = "https://github-readme-streak-stats.herokuapp.com?user=yuvrajjangir&theme=shades-of-purple&hide_border=true";
function reloadImage() {
  var img = document.getElementById('github-stats-card');
  var themeIndex = img.src.indexOf('theme='); // Find the index of 'theme=' in the URL
  var timestamp = new Date().getTime();

  if (themeIndex !== -1) { // If 'theme=' parameter exists
    var urlWithoutTheme = img.src.substring(0, themeIndex); // Extract URL before 'theme='
    img.src = urlWithoutTheme + 'theme=synthwave&t=' + timestamp; // Reconstruct the URL with the timestamp
  } else {
    img.src = initialURL + '&t=' + timestamp; // If 'theme=' parameter doesn't exist, append timestamp directly
  }
} 

function reloadStreakImage() {
    var img = document.getElementById('github-streak-stats');
  var themeIndex = img.src.indexOf('theme='); // Find the index of 'theme=' in the URL
  var timestamp = new Date().getTime();

  if (themeIndex !== -1) { // If 'theme=' parameter exists
    var urlWithoutTheme = img.src.substring(0, themeIndex); // Extract URL before 'theme='
    img.src = urlWithoutTheme + 'theme=shades-of-purple&hide_border=true&t=' + timestamp; // Reconstruct the URL with the timestamp
  } else {
    img.src = initialURL2 + '&t=' + timestamp; // If 'theme=' parameter doesn't exist, append timestamp directly
  }
} 
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px",color:"white" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
      style={{padding:"20px"}}
        id="calender"
        className="react-activity-calendar"
        username="yuvrajjangir"
        blockSize={18}
        blockMargin={7}
        color="#c084f5"
        fontSize={16}
      />  
      <h1 className="project-heading" style={{ marginTop: "1rem" }}>
        Github <strong className="purple">streak</strong>
      </h1>   
      <img  src="https://github-readme-streak-stats.herokuapp.com?user=yuvrajjangir&theme=shades-of-purple&hide_border=true" id="github-streak-stats" className="stats" onMouseOver={reloadStreakImage} alt="git"/>

      <h1 className="project-heading" style={{ paddingTop: "10px" }}>
        Github <strong className="purple">Top languages</strong>
      </h1>   
      <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=yuvrajjangir&layout=compact" id="github-top-langs" className="stats" alt="git"/>

      <h1 className="project-heading" style={{ marginTop: "14px" }}>
        Github <strong className="purple">Stats</strong>
      </h1>   
      <img  src= "https://github-readme-stats.vercel.app/api?username=yuvrajjangir&show_icons=true&hide_border=true&theme=synthwave" id="github-stats-card" className="stats" onMouseOver={reloadImage} alt="git"/>
    </Row>
  );
}
export default Github;
