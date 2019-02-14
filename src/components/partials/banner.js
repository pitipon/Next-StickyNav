import React from 'react'
import '../../styles/components/partials/banner.less'

import { Button } from 'antd'

class Banner extends React.Component {

    render() {
    
        return (
            <div>
                <div className="banner">
                    <div className="banner-content">
                        <h1>Co-Working Space</h1>
                        <p>Learn to code with us in Chengdu</p>
                        <Button type="primary" icon="download" size="large">Download Info</Button>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Banner;