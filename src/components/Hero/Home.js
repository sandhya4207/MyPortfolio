import React from "react"
import "./Home.css"
import hero from "../pic/sandhyam.png"
import skill1 from "../pic/rt.png"
import skill2 from "../pic/bt5.png"
import skill3 from "../pic/ja3.jpg"
import skill4 from "../pic/spring-3.svg"
import skill5 from "../pic/mui2.png"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Sandhya Rekha</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Full Stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Who is passionate about making fully responsive end to end websites with 100% client satisfaction. I love to solve real-world problems. I have a passion for learning about new topics which increases work efficiency better day by day. I'm strategic, goal-oriented & always work with an end goal in mind. 
</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                   <a href="https://www.linkedin.com/in/sandhya-rekha-bandaru-40111620b/"><i class='fab fa-linkedin-in'></i></a> 
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill4} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill5} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home