import React from 'react';

import Img from './contact-img.jpg'

import '../../components/Container/Container.css'

const Contact = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', borderRadius: '20px', boxShadow: '0px 7px 22px -7px #12232E', padding: '2rem', width:'600px', height: '250px', background: '#8FC1E3'}}>
            <img src={Img} style={{height: '180px', borderRadius: '50%', border: '3px solid white'}} alt='me' />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  padding: '0 2rem'}}> 
                <span className='font-test-large' style={{marginBottom: '1rem'}}> Nicholas Kawwas </span> 
                <span className='font-test'> Computer Engineer @ Concordia</span> 
                <div className='svgs' style={{display: 'flex', justifyContent: 'center', margin: '2rem  0 0'}}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.873 9.81c.085-.251.127-.509.127-.763 0-.77-.38-1.513-1.055-1.982-2.152-1.492-1.868-1.117-2.68-3.544-.338-1.014-1.321-1.7-2.429-1.696-2.653.008-2.193.153-4.335-1.354-.447-.314-.974-.471-1.501-.471s-1.054.157-1.502.471c-2.155 1.515-1.688 1.362-4.334 1.354-1.108-.003-2.09.683-2.429 1.696-.812 2.433-.534 2.055-2.68 3.544-.675.469-1.055 1.212-1.055 1.982 0 .254.042.512.127.763.83 2.428.827 1.963 0 4.38-.085.251-.127.509-.127.763 0 .77.38 1.514 1.055 1.982 2.147 1.489 1.868 1.114 2.68 3.544.338 1.014 1.321 1.7 2.429 1.696 2.654-.009 2.193-.152 4.335 1.354.447.314.974.471 1.501.471s1.054-.157 1.502-.471c2.142-1.506 1.681-1.362 4.335-1.354 1.108.003 2.09-.683 2.429-1.696.813-2.428.528-2.053 2.68-3.544.674-.468 1.054-1.212 1.054-1.982 0-.254-.042-.512-.127-.763-.831-2.427-.827-1.963 0-4.38zm-14.06 6.855h-1.995c-.183 0-.328-.155-.318-.336.034-.575.367-2.461 1.519-9.879.041-.259.261-.45.519-.45h3.672c1.964 0 3.416 1.154 3.015 3.22-.412 2.15-1.725 3.195-4.011 3.195l-1.13.001c-.463.001-.635.177-.693.59l-.578 3.659zm7.602-4.971c-.424 2.209-1.873 2.973-3.724 2.973h-.286c-.226 0-.419.167-.454.394l-.402 2.545c-.035.227-.227.394-.454.394h-1.368c-.195 0-.344-.174-.314-.366l.693-4.44.031-.028h1.077c2.618 0 4.255-1.309 4.736-3.784.406.408.549.939.549 1.499.001.267-.032.542-.084.813z"/></svg>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;
