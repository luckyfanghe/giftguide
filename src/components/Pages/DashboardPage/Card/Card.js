import React, { Component } from "react";
import { Button } from "react-bootstrap";
import * as S from "./styled";

const Card = props => {
  // const classes = useStyles();
  let description;
  switch (props.title) {
    case "CALENDAR":
      description = [
        <S.DescriptionContent id="des-1" key="des-1">
          gift guide creates a customized
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-2" key="des-2">
          calendar for you with all your loved
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-3" key="des-3">
          one's most important dates, in one
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-4" key="des-4">
          easy location
        </S.DescriptionContent>
      ];
      break;
    case "WISH LIST":
      description = [
        <S.DescriptionContent id="des-5" key="des-5">
          gift guide users set up profiles
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-6" key="des-6">
          containing their favorite stores, wish
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-7" key="des-7">
          lists and items they love, so you no
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-8" key="des-8">
          longer have to ask for ideas or sizes
        </S.DescriptionContent>
      ];
      break;
    case "REMINDERS":
      description = [
        <S.DescriptionContent id="des-9" key="des-9">
          gift guide sends you reminders before
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-10" key="des-10">
          your loved ones' events with their
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-11" key="des-11">
          wish lists and favorite stores so you
        </S.DescriptionContent>,
        <S.DescriptionContent id="des-12" key="des-12">
          never miss an important date again
        </S.DescriptionContent>
      ];
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <S.Body id={props.id} key={props.id} data-testid="Card">
        <S.Title>{props.title}</S.Title>
        <S.DescriptionContainer>{description}</S.DescriptionContainer>
        <S.Button> {props.buttonTitle} </S.Button>
      </S.Body>
    </React.Fragment>
  );
};

export default Card;
