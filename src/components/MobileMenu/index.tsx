import { useState } from 'react'
import * as Styled from './index.styles'

interface OwnProps {
  handleClickMidiaRef: () => void
  handleClickTeamRef: () => void
  handleClickContactRef: () => void
}

export default function MobileMenu({
  handleClickMidiaRef,
  handleClickTeamRef,
  handleClickContactRef
}: OwnProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Styled.Container>
      <Styled.SubContainer isOpen={isOpen}>
        <span onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'X' : 'Menu'}</span>
        <span onClick={() => handleClickTeamRef()}>Time Cap Forense</span>
        <span>
          <a href="analises-metodologia">Análises & Metodologia</a>
        </span>
        <span onClick={() => handleClickMidiaRef()}>Mídia e Pesquisas</span>
        <span onClick={() => handleClickContactRef()}>Contato</span>
      </Styled.SubContainer>
    </Styled.Container>
  )
}
