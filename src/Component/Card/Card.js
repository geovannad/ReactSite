import React from "react";
import {
  ProductCard,
  DiscountTag,
  Icons,
  IconButton,
  ProductImageWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  Price,
  CurrentPrice,
  OldPrice,
  Rating,
  Star,
  RatingText,
  AddToCartButton
} from "./Card.style";
import coracao from "../../Assets/coracao.png";
import olho from "../../Assets/olho.png";

function Card({ rating, name, img, price, oldPrice, reviews, discount }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} active={i < rating}>&#9733;</Star>);
    }
    return stars;
  };

  return (
    <ProductCard>
      {discount && <DiscountTag>{discount}</DiscountTag>}

      <Icons>
        <IconButton src={coracao} alt="Favorite" />
        <IconButton src={olho} alt="View" />
      </Icons>

      <ProductImageWrapper>
        <ProductImage src={img} alt={name} />
        <AddToCartButton>Add To Cart</AddToCartButton>
      </ProductImageWrapper>

      <ProductInfo>
        <ProductName>{name}</ProductName>

        <Price>
          <CurrentPrice>${price}</CurrentPrice>
          {oldPrice && <OldPrice>${oldPrice}</OldPrice>}
        </Price>

        <Rating>
          {renderStars(rating)}
          <RatingText>({reviews})</RatingText>
        </Rating>
      </ProductInfo>
    </ProductCard>
  );
}

export default Card;
