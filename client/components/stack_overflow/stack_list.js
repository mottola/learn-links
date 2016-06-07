import React from 'react';
import StackListItem from './stack_list_item';

// array.map will loop through an array
const StackList = (props) => {
  const stackItems = props.results.map((result) => {
    console.log(results);
    if (!result) {
      return null;
    }
      return (
        <div className='col-sm-3' key={result.l}>
        <StackListItem
          onThreadSelect={props.onResultSelect}
          result={result} />
        </div>
      );
    });
    return (
        <div className='row'>
           {stackItems}
        </div>
    );
};

export default StackList;
