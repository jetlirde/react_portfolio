import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> I Am <b>Jetlir Destani</b> and I am currently working as freelancer Wordpress Developer. Bachelor degree - Universiteti Publik i Prizrenit “Ukshin Hoti”
                                                 Fakulteti “Shkencat Kompjuterike” Drejtimi: “Desing Software”.Currently - University for Business and Technology
                                                  Master "Computer Science and Engineering"-
                                                  Specialization:Statistical Data Science  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;