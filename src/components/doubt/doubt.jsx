import React from 'react';
import { useState } from 'react';
import nextIcon from '../img/next.svg';
import instagram from '../img/instagram.svg';
import './doubt.css'

const Doubt = () => {
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    return (
        <div className='container'>
            <h1>
                dúvidas frequentes
            </h1>

            <ul>
                <li><div className={`dropdown ${isActive ? 'active' : ''}`}>
                    <div className='dropdown-btn' onClick={(e) =>
                        setIsActive(!isActive)
                    }>
                        Dúvida 1
                        <span className='fas fa-caret-down'><img src={nextIcon} alt="show" className='show' /></span>
                    </div>
                    {isActive && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>
                                React
                            </div>
                        </div>
                    )}
                </div>
                </li>
                <li><div className={`dropdown ${isActive2 ? 'active' : ''}`}>
                    <div className='dropdown-btn' onClick={(e) =>
                        setIsActive2(!isActive2)
                    }>
                        Dúvida 2
                        <span className='fas fa-caret-down'><img src={nextIcon} alt="show" className='show' /></span>
                    </div>
                    {isActive2 && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>
                                React
                            </div>
                        </div>
                    )}
                </div>
                </li>
                <li><div className={`dropdown ${isActive3 ? 'active' : ''}`}>
                    <div className='dropdown-btn' onClick={(e) =>
                        setIsActive3(!isActive3)
                    }>
                        Dúvida 3
                        <span className='fas fa-caret-down'><img src={nextIcon} alt="show" className='show' /></span>
                    </div>
                    {isActive3 && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>
                                React
                            </div>
                        </div>
                    )}
                </div>
                </li>
                <li><div className={`dropdown ${isActive4 ? 'active' : ''}`}>
                    <div className='dropdown-btn' onClick={(e) =>
                        setIsActive4(!isActive4)
                    }>
                        Dúvida 4 
                        <span className='fas fa-caret-down'><img src={nextIcon} alt="show" className='show' /></span>
                    </div>
                    {isActive4 && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>
                                React
                            </div>
                        </div>
                    )}
                </div>
                </li>
            </ul>

            <div className='footer'>
                <div className='footer-animate'></div>
                <div className='footer-animate'></div>
                <p><img src={instagram} alt='Instagram-Logo'/></p>
            </div>
        </div>
    );
};

export default Doubt;