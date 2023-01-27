import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all ease 0.25s;
  flex-direction: column;
`

export const SubContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '40rem' : '6rem')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  gap: 5rem;
  padding: 1rem 0;
  transition: all ease 0.25s;
  flex-direction: column;

  span {
    font-size: 3rem;
    transition: all ease 0.25s;
    height: 3.5rem;
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
