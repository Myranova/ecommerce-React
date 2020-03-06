import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.styles.scss'

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
    <div className='homepage'>
      <div className="directory-menu">
        <Directory/>
      </div>
    </div>)
}

export default HomePage;