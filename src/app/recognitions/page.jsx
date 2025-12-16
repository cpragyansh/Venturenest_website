import React from 'react'
import MainPage from '../Components/Mainpage/Mainpage'
import "./recog.css"

export default function Recognitions() {
  return (
    <div>
      <MainPage headingText="Recognitions "/>



      <div className="recognitions-main-container">
  {/* <!-- Recognition Box 1 --> */}
  <div className="recognitions-box">
    <div className="recognitions-image-div">
      <img src="assets/recognitions-1-logo-img.jpg" alt="" className="recognition-img" />
    </div>
    <div className="recognitions-description">
      <h1 className="recognitions-main-head">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem ab sequi enim quasi, mollitia tempore possimus corporis consectetur maxime.
      </h1>
      <p className="recognitions-para">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nemo nobis corporis labore aliquam mollitia dicta, atque ea consequuntur delectus nostrum a tenetur. Architecto et aspernatur explicabo maiores accusantium odit, ad cumque iusto. Tenetur iusto nulla facere? Natus, consequuntur ab.      </p>
    </div>
  </div>

  {/* <!-- Recognition Box 2 (Even Box) --> */}
  <div className="recognitions-box even-recognitions-box">
    <div className="recognitions-image-div">
      <img src="assets/recognitions-1-logo-img.jpg" alt="" className="recognition-img" />
    </div>
    <div className="recognitions-description">
      <h1 className="recognitions-main-head">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iste modi tempore asperiores tenetur repellendus nostrum in facilis numquam deleniti?      </h1>
      <p className="recognitions-para">
      </p>
    </div>
  </div>
</div>

    </div>
  )
}
