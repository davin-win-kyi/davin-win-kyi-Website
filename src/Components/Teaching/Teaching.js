import './Teaching.css'

import React, {useState, useEffect, useRef} from 'react';

export function Teaching() {

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

      <div className="teaching-main">
        <p className="teaching-title">Courses Taught</p>
        <div className="teaching-classes">
          <div className="teaching-class">
            <img className="teaching-class-img" src="img/CSE340_spring2024.png"></img>
            <p className="teaching-class-text">
              <p>Course Taught: CSE 340 Spring 2024</p>
              <p className="teaching-class-text-duties">Duties: Course material creation and testing, leading sections of 70+ students, hosting office hours for 70+ students</p>
            </p>
          </div>
        </div>

        <div className="teaching-classes">
          <div className="teaching-class">
            <img className="teaching-class-img" src="img/CSE 340.png"></img>
            <p className="teaching-class-text">
              <p>Course Taught: CSE 340 Autumn 2023</p>
              <p className="teaching-class-text-duties">Duties: Administrative duties and overseeing of course organization</p>
            </p>
          </div>
        </div>

        <div className="teaching-classes">
          <div className="teaching-class">
            <img className="teaching-class-img" src="img/CSE 340.png"></img>
            <p className="teaching-class-text">
              <p>Course Taught: CSE 340 Spring 2023</p>
              <p className="teaching-class-text-duties">Duties: Course material creation and testing, grading assignments, leading sections of 20+ students, hosting office hours for 40+ students</p>
            </p>
          </div>
        </div>

        <div className="teaching-classes">
          <div className="teaching-class">
            <img className="teaching-class-img" src="img/CSE340_sp2023.jpeg"></img>
            <p className="teaching-class-text">
              <p>Course Taught: CSE 340 Winter 2023</p>
              <p className="teaching-class-text-duties">Duties: Course material creation and testing, grading assignments, leading sections of 20+ students, hosting office hours for 40+ students</p>
            </p>
          </div>
        </div>

        <div className="teaching-classes">
          <div className="teaching-class">
            <img className="teaching-class-img-last" src="img/CSE 414 icon.jpeg"></img>
            <p className="teaching-class-text">
              <p>Course Taught: CSE 414 Autumn 2022</p>
              <p className="teaching-class-text-duties">Duties: Leading sections of 30+ students, hosting office hours for 300+ students</p>
            </p>
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