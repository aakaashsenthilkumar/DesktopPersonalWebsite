import React, { useState, useRef, useEffect } from 'react';
import Window from './components/Window';
import Terminal from './components/Terminal';
import wallpaper from "./assets/ubuntubg.jpg";
import AboutWindow from "./content/AboutWindow";
import ExperienceWindow from "./content/ExperienceWindow";
import ProjectsWindow from "./content/ProjectsWindow";
import FilesWindow from "./content/FilesWindow"; // <-- import FilesWindow

export default function App(){
  const [wins,setWins]=useState([]);
  const topZ=useRef(10);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const open=(id,title,comp)=>{
    setWins(w=>{
      if(w.find(x=>x.id===id)) return w;
      return [...w,{id,title,comp,z:++topZ.current,pos:{x:200,y:200}}];
    });
  };

  const bringToFront=id=>{
    setWins(w=>w.map(x=>x.id===id?{...x,z:++topZ.current}:x));
  };
  
  const close=id=>setWins(w=>w.filter(x=>x.id!==id));

  return(
    <div>
      <div
        className="wallpaper"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />

      <div className="topbar">
        <div className="topbar-left">
          <span>Aakaash</span>
        </div>

        <div className="topbar-center">
          <span>
            {now.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }).replace(",", "")}
          </span>
        </div>

        <div className="topbar-right">
          <img src="/src/assets/signal.png" className="topbar-icon" />
          <img src="/src/assets/wifi.png" className="topbar-icon" />
          <img src="/src/assets/sound.png" className="topbar-icon" />
          <img src="/src/assets/charge.png" className="topbar-icon" />
        </div>
      </div>

      <div className="leftbar">
        <img src="/src/assets/user.png" onClick={() => open('about','About', <AboutWindow />)} />
        <img src="/src/assets/settings.png" onClick={() => open('exp','Experience', <ExperienceWindow />)} />
        <img src="/src/assets/web-page.png" onClick={() => open('proj','Projects', <ProjectsWindow />)} />
        <img src="/src/assets/terminal2.png" onClick={()=>open('term','Terminal',<Terminal/>)}/>
        <img src="/src/assets/open-folder.png" onClick={()=>open('files','Files',<FilesWindow />)}/> {/* <-- use FilesWindow */}
      </div>

      {wins.map(w => (
        <Window
          key={w.id}
          id={w.id}
          title={w.title}
          defaultPos={w.pos}
          z={w.z}
          onClose={() => close(w.id)}
          bringToFront={bringToFront}
        >
          {w.comp}
        </Window>
      ))}
    </div>
  );
}