import React from 'react';
import _ from 'lodash';
import { ActionBtnContainer, FormSteps } from './ActionButtonsStyle';
import LeftBtn from './components/LeftBtn/LeftBtn';
import RightBtn from './components/RightBtn/RighBtn';

interface ActionButtonsProps {
  leftBtnText?: string;
  rightBtnText?: string;
  rightBtnClick: () => void;
  leftBtnClick: () => void;
  step?: number;
}

const ActionButtons: React.FC<ActionButtonsProps> = (props: any) => (
  <ActionBtnContainer>
    {!_.isEmpty(props.leftBtnText) && (
      <LeftBtn onClick={props.leftBtnClick} text={props.leftBtnText} />
    )}
    {props.step >= 0 && <FormSteps>{props.step + 1} of 5</FormSteps>}
    {!_.isEmpty(props.rightBtnText) && (
      <RightBtn onClick={props.rightBtnClick} text={props.rightBtnText} />
    )}
  </ActionBtnContainer>
);

export default ActionButtons;
