import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Editor from './Editor';
import Result from './Result';
import Sidebar from './Sidebar';
import { executeQuery } from '../utils/api.js';
import Logout from './Logout';

const Home = () => {
    const [query, updateQuery] = useState('');

    const { data, refetch } = useQuery(["editor", query], () => executeQuery(query));

    const handleChange = qry => updateQuery(qry);

    const handleClick = () => refetch();

    return <div className="App">
        <div className="sidenav">
            {/* <Sidebar handleMenuClick={handleChange} /> */}
        </div>
        <div className="main">
            <Logout />
            <Editor handleChange={handleChange} handleClick={handleClick} />
            <Result result={data} />
        </div>
    </div>;
}

export default Home;