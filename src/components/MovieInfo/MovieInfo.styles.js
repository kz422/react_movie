import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${({ backdrop }) => 
      backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : '#000' };
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animationMovieInfo 1s;

  @keyframes animationMovieInfo{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4.5px );
  -webkit-backdrop-filter: blur( 4.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  border-radius: 20px;

  @media screen and (max-width: 768px){
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: white;
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p{
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px){
      font-size: var(--fontBig);
    }
  }

`;
