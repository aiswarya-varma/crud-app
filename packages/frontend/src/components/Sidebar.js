import React from 'react';
import { useQuery } from 'react-query';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import { getAll } from '../utils/api.js';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({ handleMenuClick }) => {
    /**
     * Fetch all table info 
     */
    const allTables = useQuery('fetchAllTables', getAll);

    /**
     * Format information from db
     * @param {Array<Object>} info data from db
     * @returns formatted data
     */
    const getTableInfo = info => {
        let obj = {};

        info.map(t => {
            if (Object.keys(obj).includes(t.TABLE_NAME)) {
                obj[t.TABLE_NAME] = [...obj[t.TABLE_NAME], t];
            } else {
                obj = { ...obj, [t.TABLE_NAME]: [t] }
            }

            return true;
        });

        return obj;
    }

    /**
     * When a table is selected from menu, show contents of that table
     * @param {String} tableName table name selected from menu
     */
    const handleClick = (isOpen, tableName) => isOpen && handleMenuClick(`select * from ${tableName}`);

    return <ProSidebar>
        {allTables.isLoading ? <SidebarHeader>Loading...</SidebarHeader> : <>
            <SidebarHeader>testdb</SidebarHeader>
            {allTables.data &&
                <Menu iconShape="square">
                    {Object.entries(getTableInfo(allTables.data)).map(([key, values]) =>
                        <SubMenu key={key} title={key} onOpenChange={isOpen => handleClick(isOpen, key)}>
                            {values.map(val => <SubMenu title={val.COLUMN_NAME} key={val.COLUMN_NAME}>
                                <MenuItem>{val.COLUMN_TYPE}</MenuItem>
                            </SubMenu>
                            )}
                        </SubMenu>
                    )}
                </Menu>
            }
        </>
        }
    </ProSidebar>;
}

export default Sidebar;