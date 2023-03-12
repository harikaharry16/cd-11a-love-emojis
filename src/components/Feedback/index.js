// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {tr: 'tr', fa: 'fa'}

  onGetThank = () => {
    this.setState({tr: 'fa', fa: 'tr'})
  }

  render() {
    const {resources} = this.props
    const {tr, fa} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className={tr}>
          <div className="inner-container">
            <h1 className="head">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              <li className="single-emoji">
                <img
                  src={emojis[0].imageUrl}
                  alt={emojis[0].name}
                  className="emoji"
                />
                <p className="name">{emojis[0].name}</p>
              </li>

              <li className="single-emoji">
                <img
                  src={emojis[1].imageUrl}
                  alt={emojis[1].name}
                  className="emoji"
                />
                <p className="name">{emojis[1].name}</p>
              </li>

              <li className="single-emoji">
                <img
                  src={emojis[2].imageUrl}
                  alt={emojis[2].name}
                  className="emoji"
                  onClick={this.onGetThank}
                />
                <p className="name">{emojis[2].name}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={fa}>
          <div className="inner-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
            <h1 className="love-title">Thank You!</h1>
            <p className="love-para">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
