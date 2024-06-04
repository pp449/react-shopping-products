import styled from "styled-components";

export const Select = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 125px;
  height: 36px;
  font-size: 10px;

  box-sizing: border-box;
  border-radius: 3px;
  padding: 8px;
  margin-bottom: 3px;
  border: 1px solid ${({ theme }) => theme.COLOR["grey2"]};
  border-radius: 8px;
`;

export const SelectedCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectedCardText = styled.p<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isSelected ? "black" : "grey")};
  font-size: 14px;
  line-height: 18px;
`;

export const OptionWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 38px;
  background: white;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  max-height: 20vh;
  overflow: scroll;
`;

export const Option = styled.li`
  padding: 8px;

  &:hover {
    background: hotpink;
    color: white;
    transition: 0.1s;
  }
`;

export const Arrow = styled.div<{ isDropdown: boolean }>`
  position: absolute;
  top: ${({ isDropdown }) => (isDropdown ? "40%" : "30%")};
  right: 10px;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: ${(props) => (props.isDropdown ? "rotate(315deg)" : "rotate(135deg)")};
  transition: 0.3s;
`;
