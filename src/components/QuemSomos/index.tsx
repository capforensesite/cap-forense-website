import * as Styled from './inex.styles'

export default function QuemSomos() {
  return (
    <Styled.Container>
      <Styled.Title>
        <span>QUEM</span>
        <span>SOMOS?</span>
      </Styled.Title>
      <Styled.FirstPrgp>
        <Styled.Prgp>
          <span>
            A CAP Forense é uma empresa especializada em fornecer parecer
            tecnico de alta qualidade para justiça. Nós acreditamos na busca
            pela verdade e nos esforçamos para fornecer soluções precisas e
            confiáveis para nossos clientes.
          </span>
        </Styled.Prgp>
      </Styled.FirstPrgp>
      <Styled.SecondPrgp>
        <Styled.SecondPrgpText>
          <span>
            Nossa equipe é composta por peritos altamente capacitados em
            linguagem corporal e microexpressões e ultilizam de técnicas validas
            cientificamente para identificar todos os sinais em busca da
            verdade.
          </span>
        </Styled.SecondPrgpText>
      </Styled.SecondPrgp>
      <Styled.LastPrgp>
        <img src="/capImages/capForenseBranco.png" alt="logo" />
        <Styled.Prgp>
          <span>
            Nós nos concentramos na análise de sinais não verbais de
            comunicação, como postura, gestos, expressões faciais e
            microexpressões, para ajudar a determinar a verdade, sinceridade e
            congruência de uma pessoa. Nossos peritos possuem habilidades
            avançadas de observação e conhecimento sobre como o corpo e o rosto
            reagem em situações estressantes, permitindo que identifiquem sinais
            que possam indicar se há ou não mentira, tensão ou emoções
            reprimidas.
          </span>
        </Styled.Prgp>
      </Styled.LastPrgp>
    </Styled.Container>
  )
}
