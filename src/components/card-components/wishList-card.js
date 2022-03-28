import './cards.css'
import { GoX } from "react-icons/go";
const WishlistCard=({productObj})=>{
    const{price,imageUrl,title,description,productRating}=productObj
    return <div className="flex-V-center-VH productCard"><div className="ver-card pos-rel-Ecase">
    <img src={imageUrl} alt="images" />
    <div className="flex-V-center-VH">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
      <button className="btn primary-btn p-card-btn">add to cart</button>
    </div>
    <div className="card-badge">
      <button className="like-icon icon-sm" >
        <GoX/>
      </button>
    </div>
    <div className="static-rating-container ratingBadge">
        <div className="flex-H-center-V">
       {productRating}<span className="fa fa-star fa-1x checked"></span>
    </div></div>

  </div></div>
}

export {WishlistCard}