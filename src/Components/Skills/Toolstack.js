import React from "react";
import repl from "../../Images/replit-icon-seeklogo.com.svg";
import codesand from "../../Images/Codesandbox-fotor-2023122020022.png";
import git from "../../Images/Untitled design-fotor-2023122019559.png";
import vs from "../../Images/visual-studio-code-icon.png";
import netl from "../../Images/netlify-icon-seeklogo.com.svg";
import slack from "../../Images/slack.png";
import jira from "../../Images/jira.svg";
import confluence from "../../Images/confluence.avif";
import lens from "../../Images/lens.svg";
import tableplus from "../../Images/tableplus.png";
import googleconsole from "../../Images/googleconsole.png";
import mongodbcompass from "../../Images/mongodbcompass.webp";
import redisinsight from "../../Images/redisinsight.png";
import mysqlworkbench from "../../Images/mysql.webp";
import postman from "../../Images/postman.svg";
import dbeaver from "../../Images/dbeaver.png";

function Toolstack() {
  return (
    <div
      className="tools"
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <div className="skills-card">
        <img
          style={{ width: "85px" }}
          src={codesand}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          CodeSandBox
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "85px" }}
          src={repl}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Replit
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={git}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Github
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={lens}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Lens
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={tableplus}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          TablePlus
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={vs}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          VsCode
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "90%" }}
          src={netl}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Netlify
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={slack}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Slack
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={jira}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Jira
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={confluence}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Confluence
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={googleconsole}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          GoogleConsole
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={mongodbcompass}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Compass
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={redisinsight}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          RedisInsight
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={mysqlworkbench}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          WorkBench
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={postman}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          Postman
        </p>
      </div>
      <div className="skills-card">
        <img
          style={{ width: "80%" }}
          src={dbeaver}
          className="skills-card-img"
          alt="skill"
        />
        <p className="skills-card-name" style={{ fontSize: "20px" }}>
          DBeaver
        </p>
      </div>
    </div>
  );
}

export default Toolstack;
