import styled from "styled-components";
import { mainWidth } from "../../../constants/utils";

export const Body = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Title = styled.div`
  width: 100%;
  font-family: WorkSans-ExtraLight;
  text-align: center;
  font-size: 50px;
  letter-spacing: 0.15px;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const ShareButton = styled.button.attrs(props => ({
  type: "button"
}))`
  margin-right: ${(100 - mainWidth) / 2}%;
  margin-bottom: 10px;
  bottom: 50px;
  width: 100px;
  height: 30px;
  border: 0;
  align-self: flex-end;
  background: white;
  color: black;
  font-size: 15px;
  :hover {
    background-color: #666;
    color: white;
  }
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const WishListContainer = styled.div`
  margin-left: ${(100 - mainWidth) / 2}%;
  margin-right: ${(100 - mainWidth) / 2}%;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  justify-content: flex-start;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const WishItem = styled.div`
  padding-left: 9px;
  padding-right: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const AddWishItem = styled.div`
  width: 178px;
  height: 178px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;
export const WishItemImage = styled.img.attrs(props => ({
  alt: "banner",
  src: props.src
}))`
  width: 178px;
  height: 178px;
  object-fit: cover;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const ReceivedItemImage = styled.img.attrs(props => ({
  alt: "banner",
  src: props.src
}))`
  width: 121px;
  height: 121px;
  object-fit: cover;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Plus = styled.div`
  font-family: WorkSans-ExtraLight;
  font-size: 100px;
  text-align: center;
  borderborder: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const WishItemLabel = styled.div`
  font-family: Futura Light;
  font-size: 15px;
  letter-spacing: ;
  text-align: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const ReceivedItemsLabel = styled.div`
  width: ${mainWidth}%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: Futura Light;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: ;
  text-align: left;
  color: white;
  background-color: black;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;
