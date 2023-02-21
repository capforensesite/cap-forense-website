import styled from 'styled-components'
import { mobileSize, tabletSize } from '../../styles/global.constants'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  gap: 5rem;
  padding: 2rem 0;

  ${tabletSize} {
    flex-direction: column;
  }

  ${mobileSize} {
    flex-direction: column;
  }

  span {
    font-size: 2rem;
    transition: all ease 0.25s;
    font-family: 'Noto Serif Display', serif;
    font-weight: 800;
    cursor: pointer;
    :hover {
      scale: 1.2;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
`
