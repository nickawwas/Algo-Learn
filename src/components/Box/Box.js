import React, {useState} from 'react'
import './Box.css'

const Box = props => {
    const [open, setOpen] = useState(false);

    return (
        <div className="center">
            <div className="containerized">
                <div className="top">
                    {props.title}

                    <svg className={open ? 'box-opened' : 'box'} onClick={() => setOpen(!open)}
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/>
                    </svg>
                </div>
            
                <div className={open ? 'algos-opened' : 'algos'}>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default Box;
