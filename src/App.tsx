import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { HomePage } from '@/pages/HomePage'

const ProjectPage = lazy(() =>
  import('@/pages/ProjectPage').then((m) => ({ default: m.ProjectPage })),
)

import './index.css'

export default function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <LenisProvider>
        <Helmet>
          <title>GoPerch — Enterprise Software & Hardware Solutions</title>
          <meta
            name="description"
            content="GoPerch builds custom ERP systems, enterprise platforms, AI solutions, IoT devices, and hardware integrations that scale businesses."
          />
        </Helmet>

        <div className="min-h-screen bg-gp-primary font-body text-gp-text antialiased">
          <Navbar />
          <AnimatePresence mode="wait">
            <Suspense fallback={null}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
          <Footer />
        </div>
      </LenisProvider>
    </ThemeProvider>
  )
}
