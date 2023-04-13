import React from 'react'

const filter = ({filter, setFilter}) => {
  return (
    <div className='filters shadow container'>
      <form>
        <div className='field'>
          <label>Select category</label>
          <select 
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="">--  SELECT  --</option>
            <option value="food">Food</option>
            <option value="hobbies">Hobbies</option>
            <option value="house">House</option>
            <option value="medicine">Medicine</option>
            <option value="others">Others</option>
            <option value="savings">Savings</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default filter