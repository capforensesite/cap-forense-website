import * as Styled from './inex.styles'

export default function ComoAjudar() {
  return (
    <Styled.Container>
      <Styled.TitleSection>
        <img src="/capImages/logo2.png" alt="logo" />
        <Styled.Title>
          <span>COMO</span>
          <span>PODEMOS</span>
          <span>AJUDAR?</span>
        </Styled.Title>
      </Styled.TitleSection>
      <Styled.FirstPrgp>
        <Styled.Prgp>
          <span>
            O parecer técnico utiliza a ciência da linguagem corporal e
            microexpressões como um meio de prova judicial, juntando-o aos autos
            do processo.
          </span>
        </Styled.Prgp>
      </Styled.FirstPrgp>
      <Styled.SecondPrgp>
        <Styled.SecondPrgpText>
          <span>
            A linguagem corporal é utilizada para identificar a veracidade dos
            depoimentos prestados em sede policial e judicial. Analisando o
            comportamento corporal em vídeos, é possível identificar emoções
            genuínas e possíveis contradições. Deste modo, o parecer aponta as
            relevâncias do sistema FACS e Scans, bem como apresenta suas
            contribuições para melhorar a efetividade das decisões judicias,
            podendo ocorrer o afastamento de provas testemunhais viciadas pela
            mentira, ou mesmo por falsas memórias.
          </span>
        </Styled.SecondPrgpText>
      </Styled.SecondPrgp>
    </Styled.Container>
  )
}
