import React from "react";
import spinner from "../../../assets/images/loading.gif";
import * as S from "./styled";

const Spinner = props => (
  <S.Body widht={props.width} height={props.height}>
    <S.Image
      alt="loading"
      src={spinner}
      widht={props.width}
      height={props.height}
    />
  </S.Body>
);

export default Spinner;
