import './App.css';
import {ContactPanel, TextPanel, Project, ProjectProps} from './Project';
import React from 'react';

var PropsTLOC: ProjectProps = {
  videoUrl : "https://www.youtube.com/embed/ZK8lyD_yh94",
  backgroundImg: "/img/Screenshot_TLOC_1.png",
  id: "TLOC",
  link: "textpanel2"
};

var PropsSDO: ProjectProps = {
  videoUrl : "https://www.youtube.com/embed/zF5Fqemjghg",
  backgroundImg: "/img/Screenshot_SDO_1.png",
  id: "SDO",
  link: "contactpanel"
};

function App() {
  React.useEffect(() => {
    const player = document.getElementById("audio") as HTMLAudioElement;
    player.play();
    player.volume = 0.1;
  }, []);

  return (
    <div className="App">
      <audio id="audio" src={"main_theme.mp3"}></audio>
      <TextPanel text={"Hi there, I'm Kilian Le Calvez."} link={PropsTLOC.id} id="textpanel1"></TextPanel>
      <Project {...PropsTLOC}></Project>
      <TextPanel text={"I'm trying to break in the game dev industry !"} link={PropsSDO.id} id="textpanel2"></TextPanel>
      <Project {...PropsSDO}></Project>
      <ContactPanel></ContactPanel>
    </div>
  );
}

export default App;
