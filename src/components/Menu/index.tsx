import * as Styled from './index.styles'

interface OwnProps {
  handleClickMidiaRef: () => void
  handleClickTeamRef: () => void
  handleClickContactRef: () => void
}

export default function Menu({
  handleClickMidiaRef,
  handleClickTeamRef,
  handleClickContactRef
}: OwnProps) {
  return (
    <Styled.Container>
      <Styled.SubContainer>
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
