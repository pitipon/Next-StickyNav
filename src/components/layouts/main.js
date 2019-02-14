import Head from '../partials/head'
import Footer from '../partials/footer'

export default ({ children }) => (
  <div>
    <Head />
    { children }
    <Footer />
  </div>
)