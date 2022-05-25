import { WishlistCard, Navbar } from "../components";

import axios from "axios";
import { useCart, useWishlist } from "../customHooks";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <h1 className="text-align-center">My Wishlist</h1>

      <div className="flex-wrap">
        {wishlist.length !== 0 &&
          wishlist.map((item) => (
            <WishlistCard productObj={item} key={item._id} />
          ))}
      </div>
      {wishlist.length === 0 && (
        <h2 className="text-align-center">wishlist is empty explore more</h2>
      )}
    </>
  );
};
export { Wishlist };
