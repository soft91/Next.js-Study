import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "../../store";
import palette from "../../styles/palette";

type ContainerTypes = {
  isValid: boolean;
  validateMode: boolean;
}

const Container = styled.div<ContainerTypes>`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px soild ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background-image: url("/static/svg/common/selector/selector_down_arrow.svg");
    background-position: right 11px center;
    background-repeat: no-repeat;
    font-size: 16px;

    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }

  ${({ isValid, validateMode }) => 
    validateMode &&
    css`
      select {
        border-color: ${isValid ? palette.dark_cyan : palette.tawny}
        !important;

        backgorund-color: ${isValid ? "white" : palette.snow};
      }
    `}
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
  isValid?: boolean;
}

const Selector: React.FC<IProps> = ({ 
  options = [],
  disabledOptions = [],
  isValid,
  ...props 
}) => {
  const validateMode = useSelector((state) => state.common.validateMode);

  return (
    <Container isValid={!!isValid} validateMode={validateMode}>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
      </select>
    </Container>
  )
};

export default Selector;