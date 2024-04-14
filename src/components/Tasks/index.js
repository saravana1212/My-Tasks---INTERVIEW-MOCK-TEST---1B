import './index.css'
import {TagButton} from './styledComponents'

const Tasks = props => {
  const {tagsList, setTags, tag, filterTask} = props
  const onClickTag = event => {
    setTags(event.target.id)
  }

  return (
    <div className="right_div">
      <h1 style={{color: 'white'}}>Tags</h1>
      <ul className="un_oreder_list">
        {tagsList.map(eachItem => (
          <li key={eachItem.optionId}>
            <TagButton
              bgColor={tag === eachItem.optionId ? ' #f3aa4e' : 'black'}
              type="button"
              id={eachItem.optionId}
              key={eachItem.optionId}
              onClick={onClickTag}
              className="tagBtn"
            >
              {eachItem.displayText}
            </TagButton>
          </li>
        ))}
      </ul>
      <div>
        <h1 style={{color: 'white'}}>Tasks</h1>
        <ul className="taskList">
          {filterTask < 1 ? (
            <p className="no-task">No Tasks Added Yet</p>
          ) : (
            filterTask.map(item => (
              <li className="taskItem">
                <p className="text-item">{item.inputText}</p>
                <p className="Yellow_btn">{item.category}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
export default Tasks
