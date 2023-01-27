import * as Styled from './index.styles'

export default function Contato() {
  return (
    <Styled.Container>
      <Styled.Title>
        <span>Contato</span>
      </Styled.Title>
      <Styled.ContentContainer>
        E-mail: projetointegrador2122@gmail.com
      </Styled.ContentContainer>
      <Styled.ContentContainer>
        Instagram:{' '}
        <a
          href="https://www.instagram.com/compredopequenojf_/"
          target="_blank"
          rel="noreferrer noopener"
        >
          @compredopequenojf_
        </a>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
