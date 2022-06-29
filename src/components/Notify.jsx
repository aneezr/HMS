import React from "react";

const Notify = ({noti}) =>{
    return(
        <div className="notify-con-body">        
            {
            noti.map((item,idx)=><div className="notify-con-body-item"><div>{item.content}</div><div>{new Date().toLocaleString('en-GB')}</div></div>)
            }
            {/* <div className="notify-con-body-item"><div>You</div><div>{new Date().toLocaleString('en-GB')}</div></div> */}
        </div>
    )
}

export default Notify;