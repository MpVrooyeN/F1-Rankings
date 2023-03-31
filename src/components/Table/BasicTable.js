import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import './Table.css'
import MaUTable from '@material-ui/core/Table'
import { TableBody, TableHead, TableRow } from '@mui/material';

export default function BasicTable(props) {
    console.log(props)
    const data = props[0].tableData;
    const columns = useMemo(() => props[0].col, [props])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <MaUTable {...getTableProps}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </TableRow>
                ))
                }
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                            })
                            }
                        </TableRow>)
                })}
            </TableBody>
        </MaUTable>
    )
}