import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import Editor from './components/Editor';
import Result from './components/Result';
import Sidebar from './components/Sidebar';
import { executeQuery } from './utils/api.js';

function App() {
  const [query, updateQuery] = useState("");

  const { data, refetch } = useQuery(["users", query], () => executeQuery(query));

  const handleChange = qry => updateQuery(qry);

  const handleClick = () => refetch();

  return <div className="App">
    <div className="sidenav">
      <Sidebar handleMenuClick={handleChange} />
    </div>
    <div className="main">
      <Editor handleChange={handleChange} handleClick={handleClick} />
      <Result result={data} />
    </div>
  </div>;
}

export default App;
