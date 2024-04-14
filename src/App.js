import './App.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Tasks from './components/Tasks'
import Inputs from './components/Inputs'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {category: 'HEALTH', tag: '', inputText: '', task: []}

  onInputChange = event => {
    this.setState({inputText: event})
  }

  onSelectChange = event => {
    this.setState({category: event})
  }

  setTags = event => {
    this.setState({tag: event})
  }

  addTask = () => {
    const {inputText, category} = this.state
    const newTask = {id: uuidv4(), inputText, category}

    this.setState(prevState => ({
      task: [...prevState.task, newTask],
      inputText: '',
      category: 'HEALTH',
      tag: '',
    }))
  }

  render() {
    const {inputText, category, tag, task} = this.state
    const filterTask = task.filter(eachItem => eachItem.category.includes(tag))

    return (
      <div className="main_div">
        <Inputs
          tagsList={tagsList}
          addTask={this.addTask}
          onInputChange={this.onInputChange}
          onSelectChange={this.onSelectChange}
          inputText={inputText}
          category={category}
        />
        <Tasks
          tagsList={tagsList}
          setTags={this.setTags}
          tag={tag}
          filterTask={filterTask}
        />
      </div>
    )
  }
}
export default App
