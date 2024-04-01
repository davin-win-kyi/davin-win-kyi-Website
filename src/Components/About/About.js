import './About.css'

import React, {useState, useEffect, useRef} from 'react';

export function About() {

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

      <div className="aboutme-content">
        <p className="aboutme-title">About Me</p>

        <div className="aboutme-main-content">
          <img className = "aboutme-image" src="newest_profile_photo.png"></img>
          <br></br>
          <p className="aboutme-bio">
            Davin Win Kyi (ကျော်စံမြင့် kyaw san myint)
            <br></br>
            <br></br>
            Hi Everyone! My name is Davin Win Kyi. I'm currently a 1st year master's student at the Univeristy of Washington! <br></br>
            My current research interest revolve around Computer Vision, AR/VR/XR, Robotics, HCI and accessibility <br></br>
            The research I'm currently involved in makes use of AR/VR/XR to aid blind and low vision (BLV) in their navigation <br></br>
            around the University of Washington's campus and soon everywhere else! <br></br>
            <br></br>
            During my free time, I like to watch interesting youtube videos from Kurzgesagt and cutscens of popular games. <br></br>
            I also like competitive swimming, but unfortunately am not as fit as I was in my golden days. <br></br>
            <br></br>
            I love to discuss research and love chatting with those interested in my research and research in general. <br></br>
            If you would like to reach out to me, feel free to fill out my contact form or email me at davin123@cs.washington.edu.
          </p>
        </div>

        <div>
          <div>
            <p>
              Education
            </p>

          </div>
            <p>
              Experience
            </p>
          <div>

          </div>
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

      <div className="background-aboutme"></div>

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