import * as Styled from './index.styles'

export default function MenSection() {
  return (
    <Styled.Container>
      <Styled.BackImage>
        <Styled.TeamCapVertical>
          <span>T</span>
          <span>E</span>
          <span>A</span>
          <span>M</span>
          <div>
            <span>C.A.P</span>
            <span>FORENSE</span>
          </div>
          <Styled.Description>
            <Styled.Paragrafo>
              - Especialista em Análise Comportamental (Linguagem Corporal)
            </Styled.Paragrafo>
            <Styled.Paragrafo>- Perito Técnico pela IN.P.A.T</Styled.Paragrafo>
            <Styled.Paragrafo>
              - Especialista em Emoções Faciais, mentiras e Códigos Faciais
              (FACS)
            </Styled.Paragrafo>
            <Styled.Paragrafo>
              - Especialista em mentiras - SCANS
            </Styled.Paragrafo>
            <Styled.Paragrafo>
              - Graduando em E.D Fisica - UFJF
            </Styled.Paragrafo>
          </Styled.Description>
          <Styled.GradientBotton />
        </Styled.TeamCapVertical>
      </Styled.BackImage>
    </Styled.Container>
  )
}
