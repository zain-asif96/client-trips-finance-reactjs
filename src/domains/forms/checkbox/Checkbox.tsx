import React from 'react';
import styled from 'styled-components/macro';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 23px;
  height: 23px;
  background: ${(props) => (props.checked ? '#E54D42' : '#FFFFFF')};
  border-radius: 3px;
  border: 2.75px solid #2c3e50;
  transition: all 150ms;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  ${HiddenCheckbox}:focus + & {
    box-shadow: none;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Checkbox = ({
  className,
  checked,
  onChange,
  ...props
}: {
  className?: string;
  checked: boolean;
  onChange: (event: any) => void;
  props?: any[];
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
