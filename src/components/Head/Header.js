import React,{useState} from "react";
import "./header.css";
import logo from "../pic/S2.png";
import SamplePDF from "../pic/Sandhya Rekha-JavaFullStack_Developer.pdf";
const Header = () => {

    //toggle menu
    const [mobile,setMobile]=useState(false)
    //when scroll header at top
    window.addEventListener("scroll", () => {
        const header=document.querySelecter(".header");
        header.classList.toggle('active',window.scrollY > 1000)
    })
    
    // Function will execute on click of button
  //   const onButtonClick = () => {
  //     // using Java Script method to get PDF file
  //     fetch({SamplePDF}).then(response => {
  //         response.blob().then(blob => {
  //             // Creating new object of PDF file
  //             const fileURL = window.URL.createObjectURL(blob);
  //             // Setting various property values
  //             let alink = document.createElement('a');
  //             alink.href = fileURL;
  //             alink.download = {SamplePDF};
  //             alink.click();
  //         })
  //     })
  // }



  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="pic" />
          </div>

          <div className="navlink">
            {/* <ul className="link f_flex uppercase"> */}
                <ul className={mobile ? 'nav-links-mobile': 'link f_flex uppercase'} onClick={()=>setMobile(false)}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Portifolio</a>
              </li>


              <li>
                <a href="#home">Contact</a>
              </li>
              <li>
                {" "}
                <a
        href={SamplePDF}
        download
      >
        Click to download Resume
      </a>
                {/* <button className="home-btn" onClick={onButtonClick}> Download CV
</button> */}
              </li>
            </ul>
            <button className="toggle" onClick={()=>setMobile(!mobile)}>
                {mobile ? <i className="fas fa-times"></i>:<i className="fas fa-bars open"></i>}
            </button>
          </div>
        </div>
      </header>

      <section className="demo"></section>
    </>
  );
};

export default Header;
