import React from 'react';
import '../../styles/components/partials/nav.less'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        console.log("scrollY", window.scrollY)
        this.setState({scroll: window.scrollY});
    }

    componentDidMount() {
        const el = document.querySelector('nav');
        console.log("TOP", el.offsetTop,"Height", el.offsetHeight);
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top  ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    render() {
        return (
            <div>
                <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                </nav>

            </div>
            
        );
      }
}

export default Nav;