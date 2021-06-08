import React from 'react';
import { handleLogout } from '../utils/api';

const Logout = () =>
    <div className="logout">
        <button type="button" className="btn logout-btn" onClick={handleLogout}>Logout</button>
    </div>;

export default Logout;