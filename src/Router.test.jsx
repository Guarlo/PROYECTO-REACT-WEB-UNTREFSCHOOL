import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { getCurrentPath } from './utils/getCurrentPath.js'

vi.mock('./utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/services')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Seguros</h1>
      },
      {
        path: '/services',
        Component: () => <h1>Servicios</h1>
      },
      {
        path: '/products',
        Component: () => <h1>Productos</h1>
      },
      {
        path: '/contact',
        Component: () => <h1>Contacto</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('Services')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route path='/' Component={() => <h1>Seguros</h1>} />
        <Route path='/services' Component={() => <h1>Servicios</h1>} />
        <Route path='/products' Component={() => <h1>Productos</h1>} />
        <Route path='/contact' Component={() => <h1>Contacto</h1>} />
      </Router>
    )

    const anchor = screen.getByText(/Go to Services/)
    fireEvent.click(anchor)

    const servicesTitle = await screen.findByText('Services')

    expect(servicesTitle).toBeTruthy()
  })
})
