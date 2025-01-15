import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="profileCard.jpg" alt="profilePhoto" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML5+CSS 🙂" color="red" />
      <Skill skill="JavaScript 👩‍💻" color="blue" />
      <Skill skill="React 😎" color="pink" />
      <Skill skill="Python 🥰" color="yellow" />
      <Skill skill="Java 👋" color="purple" />
      <Skill skill="MySQL 💕" color="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      {props.skill}
    </div>
  );
}

function Intro() {
  return (
    <div className="body">
      <h1>Lucie Lu</h1>
      <p>
        Fron-end web developer, I like go to gym and hiking, travel! I like to
        try new things and different foods!
      </p>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
