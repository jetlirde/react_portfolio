import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import projekti1 from '../images/projekti1.png'
import Projekti2 from '../images/Projekti2.png'


class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
               
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={projekti1} alt="myImage" />
                        <div className={classes.h1}>
                          
                            <a href="https://www.des-tech.ch/" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Projekti2} alt="myImage" />
                        <div className={classes.h2}>
                            
                            <a href="https://www.autoworld-ag.ch/" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>
               
                </Carousel>
          
            </div>
        )
    }
}
export default CarouselImages