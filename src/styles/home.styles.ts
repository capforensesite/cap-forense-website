import styled from 'styled-components'
import {
  maxWidthScreenMobile,
  maxWidthScreenTablet,
  mobileSize,
  tabletSize
} from './global.constants'

export const Container = styled.section`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Capa = styled.section`
  width: 90%;
  max-width: 1120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  width: 100vw;
  height: 100vh;

  h1 {
    color: white;
    font-size: 8rem;
  }

  img {
    width: 45rem;
  }

  ${mobileSize} {
    width: 100%;
    /* max-width: ${maxWidthScreenMobile}; */
  }
`

export const FirstSection = styled.section`
  width: 100%;
  height: max-content;
  background-color: black;
  ${tabletSize} {
    /* background-color: red; */
    max-width: ${maxWidthScreenTablet};
  }

  ${mobileSize} {
    max-width: ${maxWidthScreenMobile};
  }
`

export const BackImageFirstSection = styled.div`
  height: 100%;
  background-image: url('/capImages/mulher1.png');
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
  /* background-color: blue; */

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
`

export const Description = styled.section`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: red; */
  gap: 5rem;
  background: linear-gradient(to bottom, black 5%, transparent 95%);
  margin-top: 5rem;
`

export const Paragrafo = styled.p`
  font-size: 3.5rem;
`
