import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all .3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animatedThumb .5s;
  box-shadow: 0 2px 8px gray;

  :hover{
    transform: scale(1.05);
  }

  @keyframes animatedThumb {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`;
