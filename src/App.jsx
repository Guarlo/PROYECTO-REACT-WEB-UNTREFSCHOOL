import { lazy, Suspense } from 'react'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyServicesPage = lazy(() => import('./pages/Services.jsx'))
const LazyProductsPage = lazy(() => import('./pages/Products.jsx'))
const LazyContactPage = lazy(() => import('./pages/Contact.jsx'))

const appRoutes = [
  {
    path: '/:lang/services',
    Component: LazyServicesPage
  },
  {
    path: '/:lang/products',
    Component: LazyProductsPage
  },
  {
    path: '/:lang/contact',
    Component: LazyContactPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Header />
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' exact Component={LazyHomePage} />
          <Route path='/services' Component={LazyServicesPage} />
          <Route path='/products' Component={LazyProductsPage} />
          <Route path='/contact' Component={LazyContactPage} />
        </Router>
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
