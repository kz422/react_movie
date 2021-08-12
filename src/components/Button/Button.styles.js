import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--darkGrey);
  border: 0;
  font-size: var(--bigFont);
  margin: 20px auto;
  transition: all .3s;
  outline: none;
  cursor: pointer;

  :hover{
    opacity: .8;
  }
`
