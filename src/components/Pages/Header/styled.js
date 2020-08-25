import styled from "styled-components";
import { mainWidth } from "../../../constants/utils";

export const Body = styled.div`
  width: ${mainWidth}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const LogoText = styled.span`
  padding-left: 15px;
  font-size: 30px;
  vertical-align: middle;
  text-align: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const SearchInput = styled.div`
  display: ${props => (props.visible == "false" ? "none" : "block")};
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Plus = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 30px;
  font-weight: bold;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const AvatarImg = styled.img.attrs(props => ({
  alt: props.alt,
  src: props.src
}))`
  width: 30px;
  height: 30px;
  border-radius: 1rem;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

// export const NabVar = styled.Navbar`
//   padding: 0px;
//   border: ${props => (props.border ? 1 : 0)}px solid black;
// `;
