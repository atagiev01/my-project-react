import React from 'react'
import '/Users/asimtaghiyev/Desktop/project/src/Styles/card.css'

function Card(props) {
  const { src, title , Marka , price} = props;
  return (
    
    <div className="container page-wrapper grid-item">
  <div className="page-inner">
    <div className="row">
      <div className="el-wrapper">
        <div className="box-up ">
          <img className="img"  src={src} alt=""></img>
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">{title}</span>
              <span className="p-company">{Marka}</span>
            </div>
            <div className="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
        </div>
        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>
          <a className="cart" href="/#">
            <span className="price">{price}$</span>
            <span className="add-to-cart">
              <span className="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Card;