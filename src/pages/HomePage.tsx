import { AboutUs } from '@/components/home/AboutUs'
import { CompanyStats } from '@/components/home/CompanyStats'
import { Contact } from '@/components/home/Contact'
import { DevelopmentProcess } from '@/components/home/DevelopmentProcess'
import { FAQ } from '@/components/home/FAQ'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import { TechStack } from '@/components/home/TechStack'
import { Testimonials } from '@/components/home/Testimonials'
import { TrustedBy } from '@/components/home/TrustedBy'
import { WhyChooseGoPerch } from '@/components/home/WhyChooseGoPerch'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedProjects />
      <WhyChooseGoPerch />
      <DevelopmentProcess />
      <Testimonials />
      <CompanyStats />
      <AboutUs />
      <TechStack />
      <FAQ />
      <Contact />
    </>
  )
}
