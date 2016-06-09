import React from 'react';
import KhanListItem from './khan_list_item';

// array.map will loop through an array
const KhanList = (props) => {
  const khanItems = props.results.map((result) => {
    if (!result) {
      return null;
    }
      return (
        <div className='col-sm-3' key={result.name}>
        <KhanListItem
          onThreadSelect={props.onResultSelect}
          result={result} />
        </div>
      );
    });
    return (
        <div className='row'>
           {khanItems}
        </div>
    );
};

export default KhanList;
