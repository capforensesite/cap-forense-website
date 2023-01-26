import styled from 'styled-components'
import { mobileSize, tabletSize } from '../../styles/global.constants'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
export const Videos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;

  ${mobileSize} {
    justify-content: center;
  }
`

export const VideoCard = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0 15px 0 15px;
`

export const Video = styled.iframe`
  width: 500px;
  height: 300px;
  border: solid white 3px;
  border-radius: 0 15px 0 15px;

  ${mobileSize} {
    width: 320px;
    height: 200px;
  }
`

export const CaseTitle = styled.span`
  color: black;
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`
