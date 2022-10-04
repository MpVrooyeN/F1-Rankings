import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Standings from "./../Standings/Standings";
import { useConstuctorStandings, useDriverStandings } from '../../queries/standing.query';
import { useState } from 'react';

const customTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#e22420',
			contrastText: '#000'
		},
		secondary: {
			main: '#f50057',
		},
	},
	typography: {
		fontFamily: 'Titllium',
	},
});




export default function PageContainer() {
	const [table, setTable] = useState('constructor');
	const constructorData = useConstuctorStandings();
	const [headingText, setHeadingText] = useState("F1 Team Standings")
	const constructorCol = [
		{ Header: 'Team Name', accessor: 'Constructor.name' },
		{ Header: 'Position', accessor: 'position' },
		{ Header: 'Points', accessor: 'points' },
		{ Header: 'Wins', accessor: 'wins' }]
	const driverData = useDriverStandings();
	const driverCol = [
		{	Header: 'Driver Name', accessor: 'Driver.name'},
		{	Header: 'Position',	accessor: 'position'},
		{	Header: 'Points',	accessor: 'points'},
		{	Header: 'Wins',	accessor: 'wins'}]
	const [data, setData] = useState(constructorData);
	const [columns, setColumns] = useState(constructorCol)
	const useToggle = () => {
		const x = document.getElementById("heading");
		if (table === 'constructor') {
			x.innerHTML = "Driver Standings"
			setTable('driver');
			setData(driverData);
			setColumns(driverCol)
		} else {
			x.innerHTML = "Constructor Standings"
			setTable('constructor')
			setData(constructorData);
			setColumns(constructorCol);
		}
	}

	return (<>
		<ThemeProvider theme={customTheme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" color={"primary"}>
					<Toolbar>
						<Typography variant="h6" id="heading" component="div" fontWeight={1000} sx={{ flexGrow: 1 }}>
							F1 Standings
						</Typography>
						<ToggleButtonGroup
							value={table}
							exclusive
							onChange={useToggle}
							aria-label="text alignment">
							<ToggleButton value={'constructor'}>Constructor
							</ToggleButton>
							<ToggleButton value={'driver'}>Driver
							</ToggleButton>
						</ToggleButtonGroup>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
		<Standings tableData={data} col={columns} />
	</>
	);
}

