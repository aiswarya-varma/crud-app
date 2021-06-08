import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { dbConnection } from '../utils/api.js';

const Connect = () => {
    const [credentials, updateCredentials] = useState({});
    const dbmsRef = useRef("");
    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const { data, refetch } = useQuery(["connection", credentials], () => dbConnection(credentials), {
        refetchOnWindowFocus: false
    });

    const handleClick = () => {
        updateCredentials({
            username: usernameRef.current,
            password: passwordRef.current,
            dbms: dbmsRef.current
        });
        refetch();
    }

    return <div>
        <h3>Connect to Database</h3>

        <div className="connect">
            <table>
                <tbody>
                    <tr>
                        <td>DBMS</td>
                        <td id="dbms">
                            <input type="radio" id="mysql" value="MySQL" onClick={e => dbmsRef.current = e.target.value} />
                            <label htmlFor="mysql">MySQL</label>
                            <input type="radio" id="postgresql" value="PostgreSQL" onClick={e => dbmsRef.current = e.target.value} />
                            <label htmlFor="postgresql">PostgreSQL</label>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="username">Username</label></td>
                        <td>
                            <input type="text" id="username" onChange={e => usernameRef.current = e.target.value} />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td>
                            <input type="password" id="password" onChange={e => passwordRef.current = e.target.value} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={handleClick}>Connect</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>;
}

export default Connect;