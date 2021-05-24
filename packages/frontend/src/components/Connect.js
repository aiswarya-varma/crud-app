import React from 'react';

const Connect = () => {
    return <div>
        <h3>Connect to Database</h3>

        <div className="connect">
            <table>
                <tbody>
                    <tr>
                        <td>DBMS</td>
                        <td>
                            <input type="radio" id="mysql" value="MySQL" />
                            <label htmlFor="mysql">MySQL</label>
                            <input type="radio" id="postgresql" value="PostgreSQL" />
                            <label htmlFor="postgresql">PostgreSQL</label>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="username">Username</label></td>
                        <td>
                            <input type="text" id="username" />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td>
                            <input type="text" id="password" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button>Connect</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>;
}

export default Connect;