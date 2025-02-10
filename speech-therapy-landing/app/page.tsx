import { Header } from '@/components/header'
import { HeroCarousel } from '@/components/hero-carousel'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}