import './index.css'

const Inputs = props => {
  const {
    tagsList,
    addTask,
    onInputChange,
    onSelectChange,
    inputText,
    category,
  } = props

  const onchangeSelectFunction = event => {
    onSelectChange(event.target.value)
  }

  const onInputChangeFunction = event => {
    onInputChange(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="form_div" onSubmit={submitForm}>
      <h1 className="heading">Create a task!</h1>
      <div className="input_div">
        <label className="label_text" htmlFor="inputText">
          Task
        </label>
        <br />
        <input
          id="inputText"
          placeholder="Enter the task here"
          value={inputText}
          onChange={onInputChangeFunction}
          type="text"
          className="input_item"
        />
      </div>
      <div className="input_div">
        <label className="label_text" htmlFor="selectText">
          Tags
        </label>
        <br />
        <select
          id="selectText"
          value={category}
          onChange={onchangeSelectFunction}
          className="input_item"
        >
          {tagsList.map(each => (
            <option key={each.optionId} value={each.optionId}>
              {each.displayText}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button className="addbtn" type="submit">
        Add Task
      </button>
    </form>
  )
}
export default Inputs
