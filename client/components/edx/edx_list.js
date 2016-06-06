import React from 'react';
import EdxListItem from './edx_list_item';

// array.map will loop through an array
const EdxList = (props) => {
  const edxItems = props.results.map((result) => {
    // filter out adult content
    if (!result) {
      return null;
    }
      return (
        <div className='col-sm-3' key={result.l}>
        <EdxListItem
          onThreadSelect={props.onResultSelect}
          result={result} />
        </div>
      );
    });
    return (
        <div className='row'>
           {edxItems}
        </div>
    );
};

export default EdxList;
