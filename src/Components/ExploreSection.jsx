import React from 'react'
import styled from 'styled-components'
import {IoLogoInstagram} from "react-icons/io5" 
import Marquee from 'react-fast-marquee'

import insta_1 from "../Assets/instaPosts/insta_1.jpg"
import insta_2 from "../Assets/instaPosts/insta_2.jpg"
import insta_3 from "../Assets/instaPosts/insta_3.jpg"
import insta_4 from "../Assets/instaPosts/insta_4.jpg"


const Post1 = styled.div`
    background: url(${insta_1});
  background-position: bottom; 
  background-repeat: no-repeat; 
  background-size: cover;
  min-width: 20.3rem;
  height: 20rem;
  position: relative;
  margin-right: .1em;


  &:before {
    content: '';
    position: absolute;
    visibility: none;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in ;
  }

  &:hover:before {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Post2 = styled.div`
    background: url(${insta_2});
  background-position: bottom; 
  background-repeat: no-repeat; 
  background-size: cover;
  min-width: 20.3rem;
  height: 20rem;
  position: relative;
  margin-right: .1em;



  &:before {
    content: '';
    position: absolute;
    visibility: none;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in ;
  }

  &:hover:before {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Post3 = styled.div`
    background: url(${insta_3});
  background-position: bottom; 
  background-repeat: no-repeat; 
  background-size: cover;
  min-width: 20.3rem;
  height: 20rem;
  position: relative;
  margin-right: .1em;



  &:before {
    content: '';
    position: absolute;
    visibility: none;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in ;
  }

  &:hover:before {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Post4 = styled.div`
    background: url(${insta_4});
  background-position: bottom right; 
  background-repeat: no-repeat; 
  background-size: cover;
  min-width: 20.3rem;
  height: 20rem;
  position: relative;
  margin-right: .1em;



  &:before {
    content: '';
    position: absolute;
    visibility: none;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in ;
  }

  &:hover:before {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`


const ExploreSection = () => {
  return (
    <section className='mb-14'>
      <div className='relative w-full mb-8'>
        <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2'>
          <h1 className='text-3xl text-center font-body py-2'>Explore Our Instagram</h1>
        </div>
      </div>


      <Marquee pauseOnHover={true} direction="left" speed={15}>
        <Post1>
          <IoLogoInstagram className='text-white font-bold z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </Post1>
        <Post2>
          <IoLogoInstagram className='text-white font-bold z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </Post2>
        <Post3>
          <IoLogoInstagram className='text-white font-bold z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </Post3>
        <Post4>
          <IoLogoInstagram className='text-white font-bold z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </Post4>   
    </Marquee>    

    </section>
  )
}

export default ExploreSection
