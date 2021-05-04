import React from 'react';

const Title = ({page}) => {
    return (
        <div style={{display: "flex", 
                    margin: "0 12% 1rem", 
                    fontSize: "1.8rem", 
                    borderBottom: "2px solid #007CC7", 
                    fontWeight: "200", 
                    fontFamily: "Antonio, sans-serif"}}> 
            {page}
        </div>
    )
}

export default Title;
