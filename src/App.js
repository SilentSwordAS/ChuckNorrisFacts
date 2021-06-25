import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './App.css'
import './fonts/Carnevalee Freakshow.ttf'
import './fonts/Kalam-Bold.ttf'


class App extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            joke: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(fact => this.setState({ joke: fact.value }))
    }

    render() {
        return (
            <div className='tc' >
                <div className='image'>
                    <a href='https://api.chucknorris.io/'>
                        <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' alt='chuckBoi' />
                    </a>
                </div>
                <div>
                    <h1 style={{ fontFamily: 'Carnevalee Freakshow', fontSize: '5em' }}>Chuck Norris Facts Generator</h1>
                </div>
                <div style={{ fontFamily: 'Kalam-Bold', fontSize: '1.5em' }} className='flippy'>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                        <div className='tc bg-silver dib br3 pa3 ma2 grow bw2 shadow-5 w-50'>
                            <p>To Generate Some Amazing Chuck Norris Facts, Click On Chuck's Face Below !<br /><br /></p>
                            <input type='image' src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' alt='chucks face' onClick={this.handleClick} />
                        </div>

                        <div className='tc bg-silver dib br3 pa3 ma2 grow bw2 shadow-5 w-50'>
                            <p>"{this.state.joke}."<br /><br /></p>
                            <p style={{ fontSize: '0.9rem' }}>For another one, just refresh the page and click Chuck's face !</p>
                        </div>
                    </ReactCardFlip>
                </div>
            </div >
        )
    }
}



export default App;