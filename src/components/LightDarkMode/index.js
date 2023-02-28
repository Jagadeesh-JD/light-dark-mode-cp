import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: false}

  clickingButton = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    const modelClsName = lightMode ? 'lightMode' : 'darkMode'
    const switchMode = lightMode ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="color-container">
        <div className={`container ${modelClsName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="button"
            onClick={this.clickingButton}
            type="button"
          >
            {switchMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
