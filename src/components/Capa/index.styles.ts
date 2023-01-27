import styled from 'styled-components'
import { mobileSize } from '../../styles/global.constants'

export const Capa = styled.section`
  width: 90%;
  max-width: 1120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  margin: 2rem 0;

  h1 {
    color: white;
    font-size: 8rem;
  }

  img {
    width: 65rem;
  }

  ${mobileSize} {
    width: 100%;

    h1 {
      font-size: 3rem;
    }

    img {
      width: 27rem;
    }
  }
`
