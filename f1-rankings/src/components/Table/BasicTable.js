import React, {useMemo} from 'react'
import { useStandings } from "../../queries/standing.query";
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'
import './Table.css'

export const BasicTable = () => {
    const {data} = useStandings();
    const columns = useMemo(() => COLUMNS, [])
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

    return (
        <table {...getTableProps}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                        })
                        }
                    </tr>)
                })}
            </tbody>
        </table>
    )
}