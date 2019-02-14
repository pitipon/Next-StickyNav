import React from 'react'

// Redux
import { connect } from 'react-redux'
import { loadData, startClock, tickClock } from '../../redux/actions/actions'

// Layout
import Layout from '../layouts/main'

// Components
import Counter from '../partials/counter'
import Nav from '../partials/nav'
import Banner from '../partials/banner'

// Style
import "../../styles/components/pages/index.less"

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    console.log(5555, isServer)
    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return (
      <Layout>
        <Banner />
        <Nav/>
        <Counter />
        <div className="block-content">
          Content Block
        </div>
      </Layout>
    )
  }
}

export default connect(state => state)(Index)
