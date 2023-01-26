import * as Styled from './index.styles'

export default function WomanSection() {
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
              - Especialista em Análise Comportamental e Linguagem Corporal
            </Styled.Paragrafo>
            <Styled.Paragrafo>
              - Perita Técnica em Microexpressões Faciais pelo F-M Group
              Internacional - FACS
            </Styled.Paragrafo>
            <Styled.Paragrafo>
              - Especialista em mentiras - SCANS
            </Styled.Paragrafo>
            <Styled.Paragrafo>
              - Congressista e Palestrante Internacional em Linguagem Corporal e
              Inteligência Relacional
            </Styled.Paragrafo>
          </Styled.Description>
        </Styled.TeamCapVertical>
        <Styled.GradientBotton />
      </Styled.BackImage>
    </Styled.Container>
  )
}
