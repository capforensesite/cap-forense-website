import styled from 'styled-components'
import {
  maxWidthScreenTablet,
  mobileSize,
  tabletSize
} from '../../styles/global.constants'

export const Container = styled.section`
  background-image: url('capImages/grayWaveBackgroud.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 100%;
  gap: 3rem;
  border: solid white 2px;
  border-left: 0;
  border-right: 0;
  padding: 3rem 0;

  ${mobileSize} {
    padding: 2rem 1rem;
  }
`
export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  img {
    width: 40rem;
  }
  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
    img {
      width: 30rem;
    }
  }

  ${mobileSize} {
    img {
      width: 10rem;
    }
    align-items: flex-start;
    flex-direction: row-reverse;
  }
`

export const Title = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1120px;
  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }
  span {
    font-family: 'Noto Serif Display', serif;
    font-size: 8rem;
    line-height: 8rem;
    color: white;
  }

  ${tabletSize} {
    span {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  ${mobileSize} {
    span {
      font-size: 3.5rem;
      line-height: 4rem;
    }
  }
`
export const Prgp = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 52%;
  font-size: 1.8rem;
  font-weight: 500;
  color: white;

  ${tabletSize} {
    width: 100%;
  }

  ${mobileSize} {
    width: 100%;
  }
`

export const FirstPrgp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1120px;
  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }
`

export const SecondPrgp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1120px;
  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }
`
export const SecondPrgpText = styled(Prgp)`
  ${mobileSize} {
    width: 100%;
  }
`
export const LastPrgp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1120px;

  ${tabletSize} {
    max-width: ${maxWidthScreenTablet};
  }

  img {
    width: 15rem;
  }

  ${mobileSize} {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
      width: 10rem;
    }
  }
`
