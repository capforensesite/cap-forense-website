import styled from 'styled-components'
import { maxWidthScreenTablet, tabletSize } from '../../styles/global.constants'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }
`

export const Title = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 3rem 0;
  max-width: 1120px;

  span {
    color: white;
    font-size: 10rem;
    line-height: 11rem;
  }
`
export const PragraphsSection = styled.div`
  max-width: 1120px;
`

export const Pragraph = styled.p`
  font-size: 3rem;
  color: white;
  margin-bottom: 2rem;
`
