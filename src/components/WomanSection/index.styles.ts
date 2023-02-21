import styled from 'styled-components'
import {
  maxWidthScreenDesktop,
  maxWidthScreenTablet,
  mobileSize,
  tabletSize
} from '../../styles/global.constants'

export const Container = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  background-color: rgb(1, 1, 1);

  ${mobileSize} {
    padding: 0 1rem;
    max-height: 450px;
  }
`

export const BackImage = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-image: url('/capImages/logoOpacity.png');
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-width: ${maxWidthScreenDesktop};
  background-color: rgb(1, 1, 1);

  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }

  ${mobileSize} {
    gap: 1.5rem;
    background-size: 50%;
  }
`

export const BackFirstImage = styled.div`
  height: 100%;
  width: 100%;
  max-width: 510px;
  background-image: url('/capImages/mulher1.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${tabletSize} {
    max-width: 450px;
  }
`

export const BackSecondImage = styled.div`
  height: 100%;
  width: 100%;
  max-width: 510px;
  background-image: url('/capImages/homem1.png');
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${tabletSize} {
    max-width: 450px;
  }
`

export const TeamCapVertical = styled.div`
  width: 90%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 6rem;
    color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    span {
      font-size: 5rem;
    }
    span:first-child {
      font-size: 9rem;
    }
  }

  ${tabletSize} {
    background: linear-gradient(to right, black 30%, transparent 70%);
  }

  ${mobileSize} {
    background: linear-gradient(to right, black 30%, transparent 70%);
    width: 100%;
    span {
      font-size: 4rem;
      color: white;
    }

    div {
      span {
        font-size: 2rem;
      }
      span:first-child {
        font-size: 4rem;
      }
    }
  }
`

export const Description = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 5rem;

  ${mobileSize} {
    margin-top: 3rem;
    gap: 0.5rem;
  }
`

export const Paragrafo = styled.p`
  font-size: 1.8em;
  font-weight: 500;

  ${mobileSize} {
    font-size: 1.2rem;
  }
`

export const GradientBotton = styled.div`
  width: 100%;
  height: 5rem;
  background: linear-gradient(to top, black 10%, transparent 90%);

  ${tabletSize} {
    height: 3rem;
    background: linear-gradient(to top, black 30%, transparent 70%);
  }
`
