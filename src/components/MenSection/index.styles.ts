import styled from 'styled-components'
import {
  maxWidthScreenTablet,
  mobileSize,
  tabletSize
} from '../../styles/global.constants'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }
`

export const BackImage = styled.div`
  height: 100%;
  background-image: url('/capImages/homem1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
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
    padding: 0 0 0 5rem;
    width: 100%;
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

    padding: 0 0 0 1rem;
  }
`

export const Description = styled.section`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  background: linear-gradient(to bottom, black 15%, transparent 85%);
  margin-top: 5rem;
  margin-bottom: 5rem;

  ${mobileSize} {
    margin-top: 3rem;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`

export const Paragrafo = styled.p`
  font-size: 3.5rem;

  ${mobileSize} {
    font-size: 1.5rem;
  }
`
export const GradientBotton = styled.div`
  width: 100%;
  height: 5rem;
  background: linear-gradient(to top, black 5%, transparent 95%);

  ${mobileSize} {
    height: 2rem;
  }
`
