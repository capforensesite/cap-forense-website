import styled from 'styled-components'
import { mobileSize } from '../../styles/global.constants'

export const Container = styled.section`
  width: 90%;
  max-width: 1120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  margin: 2rem 0;

  ${mobileSize} {
    width: 100%;
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

export const ContentContainer = styled.div`
  gap: 1rem;
`
