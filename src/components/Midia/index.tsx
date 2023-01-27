import * as Styled from './index.styles'

export default function Midia() {
  return (
    <Styled.Container>
      <Styled.Title>
        <span>ANÁLISES NA MÍDIA</span>
      </Styled.Title>
      <Styled.Videos>
        <Styled.VideoCard>
          <Styled.CaseTitle>Caso Samuel</Styled.CaseTitle>
          <Styled.Video
            src={`https://www.youtube.com/embed/VW3tvTTPQos`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoCard>
        <Styled.VideoCard>
          <Styled.CaseTitle>Caso Pamella</Styled.CaseTitle>
          <Styled.Video
            src={`https://www.youtube.com/embed/4Nx0d-Q3mdc`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoCard>
        <Styled.VideoCard>
          <Styled.CaseTitle>Caso Henry Borel</Styled.CaseTitle>
          <Styled.Video
            src={`https://player.r7.com/video/i/606fa87c4b4955f0c0002e84`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoCard>
        <Styled.VideoCard>
          <Styled.CaseTitle>Caso Jheniffer</Styled.CaseTitle>
          <Styled.Video
            src={`https://player.r7.com/video/i/62609531c012adc196000239`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoCard>
        <Styled.VideoCard>
          <Styled.CaseTitle>Caso Lucilene</Styled.CaseTitle>
          <Styled.Video
            src={`https://www.youtube.com/embed/9c-jDvHFBbY`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoCard>
        <Styled.VideoCard>
          <Styled.CaseTitle>Caso Paulo Cupertino</Styled.CaseTitle>
          <Styled.Video
            src={`https://player.r7.com/video/i/628421e5416eb964df000efd`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoCard>
      </Styled.Videos>
      <Styled.Title>
        <span>ARTIGOS E PESQUISAS</span>
      </Styled.Title>
      <Styled.ListLinks>
        <a
          href="https://www.conjur.com.br/2016-fev-12/limite-penal-engane-me-puder-linguagem-corporal-entra-jogo-processual"
          target="_blank"
          rel="noreferrer"
        >
          * Engane-me se puder: a linguagem corporal entra no jogo processual?
        </a>
        <a
          href="https://www.conjur.com.br/2016-fev-09/juiz-analisa-linguagem-corporal-testemunha-anula-depoimento"
          target="_blank"
          rel="noreferrer"
        >
          * Juiz anula depoimento depois de analisar linguagem corporal de
          testemunha
        </a>
        <a
          href="https://drive.google.com/file/d/1BMuD-KKRbFbkZvd_FYszJEcxRcaZwCek/view"
          target="_blank"
          rel="noreferrer"
        >
          * A Linguagem Corporal como meio de prova na ánalise de depoimentos
          testemunhais
        </a>
      </Styled.ListLinks>
    </Styled.Container>
  )
}
