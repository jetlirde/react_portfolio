import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experience and Projects <span>July(2021)-Freelancer</span></h2>
                                                    <p>I am currently working as freelancer</p>
                                                    <p>https://des-tech.ch/</p>
                                                    <p>https://www.autoworld-ag.ch/</p>
                                                    <p>https://carrosserie-dechallens.ch/</p>
                                                    <p>https://eltro-ünek.ch/</p>
                                                    <p>https://github.com/jetlirde/webPrizreni.git</p>
                                                   
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Universiteti "Ukshin Hoti" <span></span></h2>
                                                    <p>Bachelor degree - Universiteti Publik i Prizrenit “Ukshin Hoti”
                                                            Fakulteti    “Shkencat Kompjuterike” Drejtimi: “Desing Software”</p>
                                                            <p>Currently - University for Business and Technology
                                                               Master "Computer Science and Engineering"-
                                                                 Specialization:Statistical Data Science</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Higher Education  <span>2013 - 2016</span></h2>
                                                    <p>Shkolla e mesme gjimnazi “Gjon Buzuku” – Prizren Drejtimi: Gjimnazi Natyror </p>
                                                                                                       
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >CERTIFICATES</h2>
                                                    <p>Makerspace: Web development through Angular course.</p>
                                                       <p> Kict: Web Development(HTML, Css, Js, Bootsrap, Wordpress).</p>
                                                        <p>Open Data Kosovo: Web Development training - ”Building Strong and
                                                        Resilient Comunities”</p>
                                                       <p> Bootcamp(Full-Stack web developer) - Git, HTML5, CSS3, Bootsrap5,
                                                        JavaScript, React, MySQL, PHP, Laravel8, Python, Django3, Soft skills.</p>
                                                       <p> United Pixels Academy - Adobe Photoshop and Illustrator(Branding,
                                                        Packing Design and Web Design)</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
