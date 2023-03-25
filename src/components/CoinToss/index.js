// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {flipCoin: 0, total: 0, heads: 0, tails: 0}

  buttonClicked = () => {
    const result = Math.floor(Math.random() * 2)
    this.setState({flipCoin: result})

    if (result === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {flipCoin, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          {flipCoin === 0 ? (
            <img
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
            />
          ) : (
            <img
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
            />
          )}
          <button onClick={this.buttonClicked} type="button" className="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total: {total}</p>
            <p className="count-text">Heads: {heads}</p>
            <p className="count-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
