import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext';

function Sort() {

    const{sortOrder,setSortOrder} = useContext(TasksContext);

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };


  return (
    <div className="d-flex align-items-center gap-1">
      <span>Sort by: </span>
      <select
                className="form-select sort-select"
                value={sortOrder}
                onChange={handleSortOrderChange}
              >
                <option value="high">Default</option>
                <option value="plh">Priority: Low - High</option>
                <option value="phl">Priority: High - low</option>
              </select>
    </div>
  )
}

export {Sort}