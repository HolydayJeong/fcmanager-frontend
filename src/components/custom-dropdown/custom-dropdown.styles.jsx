import styled, {css}from 'styled-components';
import Select from 'react-select';

export const Dropdown = styled.div`
    width: 100%;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  border-radius: 20px;
  div {
    background-color: #3e1964;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #4d1f7a;
    }
  }

  > div:nth-of-type(1) {
    transform: skew(-15deg);
    border: solid 1px #5f3a85
    &:hover * {
      background-color: #4d1f7a;
    }
  }

  > div:nth-of-type(2) {
      transform: skew(0);
    }

`;
