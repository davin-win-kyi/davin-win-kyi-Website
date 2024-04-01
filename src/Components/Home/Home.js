import './Home.css'

import React, {useState, useEffect, useRef} from 'react';

export function Home() {

  const [open, setOpen] = useState(false);

  const [dropdown, setDropdown] = useState('drop_down_icon.png')

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        setDropdown('drop_down_icon.png');
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


  /*
  Function used to toggle the drop down
  */
  const toggleDropDown = () => {
    setDropdown(prevState => {
      return prevState === 'drop_down_icon.png' ? 'img/close icon.webp' : 'drop_down_icon.png';
    })
  }

  const handleClick = () => {
    toggleDropDown();
    setOpen(!open);
  }


  return (
    <div className="App">

      <div className="home-elements">
        <img className="profile-photo" src={'newest_profile_photo.png'}></img>
        <div>
          <p className="home-name">Davin Win Kyi</p>
          <p className="home-description">Current Graduate Researcher in Makeability <br></br>
            Studying AR/VR, Human Computer Interaction(HCI) <br></br>
            and Accessibility </p>
        </div>

        <div>
          <a href="https://drive.google.com/file/d/173AAasbF66ZX1EUa88uzUN6o-4kdKU4C/view?usp=sharing">
            <img className="home-social-first" src="img/CV icon-2.png"></img>
          </a>

          <a href="https://twitter.com/DavinWinKyi">
            <img className="home-social-other" src="img/x-social-media-logo-icon.webp"></img>
          </a>

          <a href="https://github.com/davin-win-kyi">
            <img className="home-social-other" src="img/github icon.jpg"></img>
          </a>

          <a href="https://www.linkedin.com/in/davin-kyi/">
            <img className="home-social-other" src="img/linkedin icon.png"></img>
          </a>
        </div>
      </div>



      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={handleClick}>
          <img src={dropdown}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Davin Win Kyi<br/><span>Undergraduate Research Assistant</span></h3>
          <ul>
            <DropDownItem img={"img/home.png"} text={"Home"} website={"/website/"} />
            <DropDownItem img={"img/resume.jpeg"} text={"CV"} website={"https://drive.google.com/file/d/173AAasbF66ZX1EUa88uzUN6o-4kdKU4C/view?usp=sharing"}/>
            <DropDownItem img={"img/contact.jpeg"} text={"Contact"} website={"/website/Contact"}/>
            <DropDownItem img={"img/projects.png"} text={"Projects"} website={"/website/Projects"}/>
            <DropDownItem img={"img/about me.png"} text={"About me"} website={"/website/About"}/>
            <DropDownItem img={"img/teaching icon.jpeg"} text={"Teaching"} website={"/website/Teaching"}/>
          </ul>
        </div>
      </div>

      <div className="background"></div>

    </div>
  );
}

function DropDownItem(props) {
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a href={props.website}> {props.text} </a>
    </li>
  );
}