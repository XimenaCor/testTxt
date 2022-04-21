import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card';

const LoadData = () => {
  const data = useSelector(state => state.data.data);

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', flexWrap: 'wrap'}}>
      {
        data.map(elem => (
          <Card info={elem} key={elem.id} />
        ))
      }
    </div>
  )

}

export default LoadData;