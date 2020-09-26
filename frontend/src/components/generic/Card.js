import React from "react";

const Card = ({children, width, height}) => {
    const styles = {
        div : {
            background : "#FFFFFF 0% 0% no-repeat padding-box" ,
            borderRadius : "20px",
            boxShadow : "0px 2px 4px #00000033",
            opacity : "1",
            margin : "10px 10px 10px 10px",
            width : width,
            height : height
        }
    }
    return(
        <div style={styles.div}>

        {children}

        </div>
)
}

export default Card;