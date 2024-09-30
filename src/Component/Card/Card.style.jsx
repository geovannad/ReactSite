import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 270px;
  height: 310px;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 20px;
  
  &:hover button {
    opacity: 1;
  }
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
`;

export const Icons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10px;
  right: 10px;
`;

export const IconButton = styled.img`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  padding: 5px;
  margin: 5px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
  z-index: -1;
  background-color: #f5f5f5;
`;

export const ProductImage = styled.img`
  
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 15px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CurrentPrice = styled.span`
  color: #e74c3c;
  font-size: 18px;
  font-weight: bold;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
`;

export const Rating = styled.div`
  margin-top: 10px;
  display: flex;
  
  align-items: center;
  gap: 5px;
`;

export const Star = styled.i`
  color: ${({ active }) => (active ? '#f1c40f' : '#ccc')};
`;

export const RatingText = styled.span`
  color: #555;
  font-size: 14px;
`;

export const AddToCartButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%;
  border-radius: 5px;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  opacity: 0; 
  transition: opacity 0.3s ease-in-out;
  width: 270px;
  height: 40px;
  &:hover {
    background-color: #333;
  }
`;
