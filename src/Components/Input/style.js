import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  flex-direction: row;
  margin-top: 25px;
`;
export const InputStyle = styled.input`
  padding: 15px;
  border: none;
  font-size: 22px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: gray;
  color: #ffff;
  outline: none;
  line-height: 10px;
  width: 350px;

  &::placeholder {
    color: #565656;
  }
`;
export const Button = styled.button`
  border: none;
  width: 60px;
  background: greenyellow;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

