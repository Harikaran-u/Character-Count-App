import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCount extends Component {
  state = {userInput: '', wordsList: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSaveUserInput = event => {
    event.preventDefault()
    const {userInput, wordsList} = this.state
    const newWordObj = {
      word: userInput,
      len: userInput.length,
      id: uuidv4(),
    }
    const newList = [...wordsList, newWordObj]
    this.setState({userInput: '', wordsList: newList})
  }

  renderNoWordsImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
      className="no-words-img"
    />
  )

  renderWordsList = () => {
    const {wordsList} = this.state
    const list = (
      <ul className="words-list-cont">
        {wordsList.map(eachWord => (
          <li key={eachWord.id}>
            <p className="word-item">
              {eachWord.word}: {eachWord.len}
            </p>
          </li>
        ))}
      </ul>
    )
    return list
  }

  render() {
    const {userInput, wordsList} = this.state
    const app = (
      <div className="main-app-container">
        <div className="content-container">
          <div className="display-words-count-container">
            <div className="title-cont">
              <h1 className="app-description">
                Count the characters like a Boss...
              </h1>
            </div>
            {wordsList.length === 0
              ? this.renderNoWordsImage()
              : this.renderWordsList()}
          </div>
          <div className="user-entry-container">
            <h1 className="app-title">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                className="input-el"
                placeholder="Enter the Characters here"
                value={userInput}
                onChange={this.onChangeUserInput}
              />
              <button
                type="submit"
                className="add-btn"
                onClick={this.onSaveUserInput}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
    return app
  }
}

export default CharacterCount
