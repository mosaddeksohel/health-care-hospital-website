import React from 'react';
import { useParams } from 'react-router';

const Appionment = (props) => {
    const { appionmentid } = useParams();
    return (
        <div>
            <h2>This is Appionment list :{appionmentid}</h2>
        </div>
    );
};

export default Appionment;