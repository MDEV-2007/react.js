import React from 'react'
import './style/navbar.css'
import Carusel from './carusel'
import Section from './section/section.jsx'
import Card from './card/card.jsx'


export default function Navbar() {


    return (
        <>

            <div className="navbar">
                <div className="logo">
                    <h1>NotJustMadinah</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href=""><i className="fa-solid fa-house"></i> <span>Home</span></a> |

                        </li>
                        <li>
                            <a href=""><i className="fa-solid fa-building-columns"></i> <span>University</span></a> |

                        </li>
                        <li>
                            <a href=""><i className="fa-brands fa-aws"></i> <span>Services</span></a> |

                        </li>
                        <li>
                            <a href=""><i className="fa-solid fa-building"></i> <span>Our compny</span></a> |

                        </li>
                        <li>
                            <a href=""><i className="fa-regular fa-address-book"></i> <span>Contact Us</span></a>

                        </li>
                    </ul>
                </div>
                <div className="model">
                    <button className='login'>Konsultatsiya</button>
                    
                </div>
            </div>

            <Carusel></Carusel>
            <Section></Section>
            <Card></Card>

        </>
    )
}
