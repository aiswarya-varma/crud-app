import React from 'react';
import { useTable } from 'react-table';

const Result = ({ result }) => {
    // if (fetched && typeof result === 'object') 
    //     alert(result.message);

    const data = React.useMemo(() => result ? result : [], [result]);

    const columns = React.useMemo(() => {
        let header = [];
        result && result.length > 0 && Object.keys(result[0]).forEach(k => {
            header = [...header, { Header: k.toUpperCase(), accessor: k }]
        });

        return header;
    }, [result]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr className="header" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Result;