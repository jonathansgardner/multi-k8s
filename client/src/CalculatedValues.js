import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OtherPage = () => {
  const [ values, setValues ] = useState({});

  const fetchValues = async () => {
    const { data } = await axios.get('/api/values/current');
    setValues( data );
  }

  useEffect(() => {
    fetchValues();
  },[])

  const renderValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }
    return entries;
  }

  return (
    <div>
      <p>Calculated Values</p>
      { renderValues() }
    </div>
  );
};

export default OtherPage;
