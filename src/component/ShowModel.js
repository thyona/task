import React from "react";

const MyModel = ({closeModel}) =>{
    return(
        <>
            <div className="modal-wrapper"></div>
            <div className="model-container">
            <h2 className="h2">STAY TUNED</h2>
            <p className="p">I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.</p>
            <button className="model-btn" onClick={closeModel}>Accept It</button>
            </div>
        </>
    )
}
export default MyModel;