import React, {useContext} from 'react';
import { UsersContext } from 'contexts/UsersContext';
import './styles.css'

function Results () {
    const [ users ] = useContext(UsersContext);
    console.log(users, 'ffff');
    return <div>results</div>;
}

export default Results;
