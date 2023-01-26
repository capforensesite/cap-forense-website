import Capa from '../components/Capa'
import Descriptions from '../components/Descriptions'
import MenSection from '../components/MenSection'
import Midia from '../components/Midia'
import WomanSection from '../components/WomanSection'
import * as Styled from '../styles/home.styles'

export default function Home() {
  return (
    <Styled.Container>
      <Capa />
      <WomanSection />
      <MenSection />
      <Descriptions />
      <Midia />
    </Styled.Container>
  )
}
