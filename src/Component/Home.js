
import Navbar from './Navbar'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import MovingText from 'react-moving-text'


import LoadingScreen from 'react-loading-screen';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import React, { useState } from 'react';
import Select from 'react-select';
import { BsArrowUpRight } from 'react-icons/bs';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const options = [
  { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Italian', label: 'Italian' },
];


const slideImages = [
  {
    url: 'https://i.stack.imgur.com/GxJxH.jpg',
    caption: 'Slide 1'
  },
  
];


export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (

    <div>
    
 

      <Navbar />
      <div className="home">
        <div className="intro">
        <MovingText
  type="fadeIn"
  duration="1000ms"
  delay="0.25s"
  direction="normal"
  timing="ease-in"
  iteration="1"
  fillMode="none">
  <span className='firsthead'>Initiatial's</span>: Begin your journey
 
</MovingText>
  </div>
  <div className="extracontent">
    <div className='left' > <span>Meet local Initial's users  </span> 
    <div className="leftcontent">Blogs are one of the most easiest and the most difficult things to start with. With right guidance and instances it can be a cakewalk</div>
    </div>
    <div className='right' > <li className='setright' > <a href="https://garyvaynerchuk.chttps//garyvaynerchuk.com/om/" target="_blank">Meet Gary Vaynerchuk <BsArrowUpRight/></a> </li>
    <li className='setright' > <a href="https://www.lifehack.org/">Meet Leon Ho <BsArrowUpRight/></a> </li>
    <li className='setright' > <a href="https://moz.com/">Meet Rand Fishkin <BsArrowUpRight/></a> </li>
    <li className='setright' > <a href="https://www.smartpassiveincome.com/">Meet Pat Flynn <BsArrowUpRight/></a> </li> </div>
  </div>

<div className="reviews">

  <div className="reviewinner">Explore The World With Others
  <div className="reviewcontent">The world we see as today is not as large a it was before so let's connect and make this a better place to live in</div>
  </div>
 
 
  <div id='reviewbtn'> <button className='btn btn-primary' > Start Blogging</button> </div>

</div>
<div className="contacts">
<div className="upper">
  <div className='upperdetails'> <span>Our Contributors</span> 
  <div id='underupperdetails' > <li className='lidetail'> Satyajit Behra</li>
  <li  className='lidetail'>Kamal Khushboo Jena</li>
  <li className='lidetail'> Sonali Hensh</li>
  <li  className='lidetail'>Anushka Das</li></div>
   </div>
  <div className='upperdetails' >  <span> Community</span>
  <div id='underupperdetails' > <li className='lidetail'>Twitter</li>
  <li  className='lidetail'>Linkedlin</li>
  <li className='lidetail'></li>
 
   </div>
  </div>
  <div className='upperdetails' > <span>Our Developers</span> 
  
  <div id='underupperdetails' > 
  <li  className='lidetail'>Jignyasa Mishra</li>

 
   </div>
  </div>
</div>
<div className="lower"> <a className='contacticon' href="https://www.facebook.com/" target="_blank"><BsFacebook /></a>
<a className='contacticon' href="https://www.instagram.com/"target="_blank"><BsInstagram/></a>
<a className='contacticon' href="https://in.linkedin.com/" target="_blank"><BsLinkedin/></a>
<a className='contacticon' href="https://twitter.com/i/flow/login" target="_blank"><BsTwitter/></a>
<Select id='dropdown' placeholder="Select Language"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <div className="terms">
        <li className='one'>Terms of Service</li>
        <li className='one'>Privacy</li>
        <li className='one'>Content Policy</li>
      </div>
 </div>

</div>


      </div>
    </div>
  )
}
