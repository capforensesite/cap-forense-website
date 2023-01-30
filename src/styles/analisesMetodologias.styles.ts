import styled from 'styled-components'
import {
  maxWidthScreenTablet,
  mobileSize,
  tabletSize
} from './global.constants'

export const BigContainer = styled.section`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const DivLink = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1120px;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    transition: all ease 0.25s;
    :hover {
      scale: 1.2;
    }
  }
`

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1120px;
  ${tabletSize} {
    padding: 0 0 0 5rem;
  }
  ${mobileSize} {
    padding: 0 0 0 1rem;
  }
`

export const Title = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 3rem 0;

  span {
    color: white;
    font-size: 10rem;
    line-height: 11rem;

    ${mobileSize} {
      font-size: 4rem;
      line-height: 5rem;
    }
  }
`
export const PragraphsSection = styled.div`
  max-width: 1120px;
`

export const Pragraph = styled.p`
  font-size: 3rem;
  color: white;
  margin-bottom: 2rem;

  ${tabletSize} {
    font-size: 3rem;
    margin: 0 2rem 0 0;
    max-width: ${maxWidthScreenTablet};
    margin-bottom: 3rem;
  }

  ${mobileSize} {
    font-size: 1.8rem;
    margin-right: 1rem;
  }
`
