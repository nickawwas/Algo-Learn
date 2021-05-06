import React from 'react';
import { Helmet } from 'react-helmet';

import Img from './contact-img.jpg'
import Title from '../../components/Title';

import './Contact.css'

const Contact = () => {
    const svgUrl = "http://www.w3.org/2000/svg";

    return (
        <>
            <Helmet>
                <title>
                    Contact Me
                </title>
                <meta 
                    name="description"
                    content="Contact Information for Concerns or Issues with Website"
                />
                <meta 
                    name="keywords"
                    content="Contact Business Github Linkedin Links"
                />
            </Helmet>
        
            <Title page="CONTACT" />
            <div className='contact-page'>
                <div className='contact-container'>
                    <img src={Img} alt='me' className='profile-pic' />
                    <div className='contact-details'> 
                        <span className='name'> Nicholas Kawwas </span> 
                        <span className='program'> Computer Software Engineer  </span> 
                        
                        <div className='svgs'>
                            {/* GITHUB, CODE DOC, EMAIL, LINKEDIN */}
                            <svg xmlns={svgUrl} width="24" height="24" viewBox="0 0 24 24" onClick={() => window.open('https://github.com/nickawwas', "_blank")}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            <svg xmlns={svgUrl} width="24" height="24" viewBox="0 0 24 24" onClick={() => window.open('https://github.com/nickawwas/Algo-Learn', "_blank")}><path d="M21.312 12.644c-.972-1.189-3.646-4.212-4.597-5.284l-1.784 1.018 4.657 5.35c.623.692.459 1.704-.376 2.239-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948-.469-.557-6.115-7.376-7.523-9.178-.469-.601-.575-1.246-.295-1.817.268-.549.842-.918 1.43-.918.919 0 1.408.655 1.549 1.215.16.641-.035 1.231-.623 1.685l1.329 1.624 7.796-4.446c1.422-1.051 1.822-2.991.93-4.513-.618-1.053-1.759-1.706-2.978-1.706-1.188 0-.793-.016-9.565 4.475-1.234.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.427 1.794 7.561 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.408-.655-1.549-1.216-.156-.629.012-1.208.604-1.654l-1.277-1.545c-.822.665-1.277 1.496-1.377 2.442-.232 2.205 1.525 3.993 3.613 3.993.596 0 1.311-.177 1.841-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.744-.24-1.454-.688-2.003zm-8.292-10.492c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.097 2.888c-.051-1.089-.579-2.081-1.455-2.732l5.248-2.686zm3.254 10.055l-4.828 2.823-.645-.781 4.805-2.808.668.766zm-6.96.238l4.75-2.777.668.768-4.773 2.791-.645-.782zm8.49 1.519l-4.881 2.854-.645-.781 4.858-2.84.668.767z"/></svg>
                            <svg xmlns={svgUrl} width="24" height="24" viewBox="0 0 24 24" onClick={() => window.open("mailto: nicholas.b.kawwas@gmail.com")}><path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z"/></svg>
                            <svg xmlns={svgUrl} width="24" height="24" viewBox="0 0 24 24" onClick={() => window.open('https://www.linkedin.com/in/nicholaskawwas/', "_blank")}><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
                        </div>
                    </div>
                </div>
            </div>　

            <Title page="MESSAGE" />
            <div className="msg-container">
                <div className="msg-section">
                    <div className="msg-welcome">
                        <div className="hello"> Hey There! </div>
                        <div className="wave"> 👋🏼 </div>
                    </div>

                    <div className="msg-experience"> I hope you enjoyed the website experience I built.  </div>

                    <div className="msg-call-to-action"> If you are in need of an aesthetic and functional website, feel free to contact me. </div>
                    <div className="msg-call-to-action"> If you enjoyed my work, consider donating to help fund the future of Algo Learn. </div>

                    <div className="msg-thanks">
                        <div className="thanks"> Thank You ! </div>
                        <div className="smile"> 😃 </div>
                    </div>
                    
                    <button className="donate" onClick={() => window.open("https://paypal.me/oddmemegod?locale.x=en_US", "_blank")}> DONATE </button>                    
                </div>
            </div>

        </>
    )
}

export default Contact;
