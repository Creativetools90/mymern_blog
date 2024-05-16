import React from 'react'

const Info = () => {
  return (
    <div className="infoContainer">
    <div className="wrap">
      <div className="left">
        <div className="infoIng">
          <img src="/pic.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <p className="date">
          busnuess travel <span> - may 2, 2024</span>
        </p>
        <div className="i_head">
          <h2 className="infoHeading">your most unhappy constomor are</h2>
          <h2 className="infoHeading">your gratest source of learning</h2>
        </div>
        <p className="infoPera">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          ducimus molestiae saepe impedit doloremque cumque! Magni impedit
          necessitatibus quam natus?
        </p>
        <div className="infoprofile">
          <img src="/profile.png" alt="profile" />
          <div className="pro">
            <h3 className="profilename">creativemoon</h3>
            <p>ceo of creativemoon</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info