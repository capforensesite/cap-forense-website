import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useState } from 'react'
import Capa from '../components/Capa'
import MenSection from '../components/MenSection'
import Menu from '../components/Menu'
import Midia from '../components/Midia'
import MobileMenu from '../components/MobileMenu'
import WomanSection from '../components/WomanSection'
import * as Styled from '../styles/home.styles'

export default function Home() {
  const midiaRef: React.RefObject<HTMLDivElement> = useRef(null)
  const handleClickMidiaRef = () => {
    if (midiaRef.current)
      midiaRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const teamRef: React.RefObject<HTMLDivElement> = useRef(null)
  const handleClickTeamRef = () => {
    if (teamRef.current) teamRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const contactRef: React.RefObject<HTMLDivElement> = useRef(null)
  const handleClickContactRef = () => {
    if (contactRef.current)
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const router = useRouter()
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [router])

  return (
    <Styled.Container>
      {width > 1119 ? (
        <Menu
          handleClickMidiaRef={handleClickMidiaRef}
          handleClickTeamRef={handleClickTeamRef}
          handleClickContactRef={handleClickContactRef}
        />
      ) : (
        <MobileMenu
          handleClickMidiaRef={handleClickMidiaRef}
          handleClickTeamRef={handleClickTeamRef}
          handleClickContactRef={handleClickContactRef}
        />
      )}
      <Capa />
      <div ref={teamRef}>
        <WomanSection />
        <MenSection />
      </div>
      <div ref={midiaRef}>
        <Midia />
      </div>
      {/* <Contato /> */}
    </Styled.Container>
  )
}
