import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useConstuctorStandings, useDriverStandings } from '../../queries/standing.query';
import { useState, useMemo, Fragment } from 'react';
import Standings from '../Standings/Standings';
import { ConstructorColumns as constructorCol, DriverColumns as driverCol } from '../Table/Columns'
import { CustomTheme as customTheme } from './CustomTheme';

export default function PageContainer() {
	const { data: constructorData, isLoading: isConstructorLoading } = useConstuctorStandings();
	const { data: driverData, isLoading: isDriverLoading } = useDriverStandings();
	const isLoading = isConstructorLoading && isDriverLoading
	const [basicTable, setBasicTable] = useState([]);
	const [{table, headingText}, setState] = useState({table: 'constructor', headingText: 'F1 Team Standings'});
	useMemo(() => {
		if (table === 'constructor') {
			setBasicTable([{ tableData: constructorData, col: constructorCol }]);
		} else {
			setBasicTable([{ tableData: driverData, col: driverCol }]);
		}
	}, [table, constructorData, driverData])

	//Handles the toggle button group
	const handleToggle = () => {
		setState({
			table: table === 'driver' ? 'constructor' : 'driver',
			headingText: table === 'driver' ? "F1 Team Standings" : "F1 Driver Standings"
		});
	};

	return (
		<Fragment>
			<ThemeProvider theme={customTheme}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static" color={"primary"}>
						<Toolbar>
							<Typography variant="h6" id="heading" component="div" fontWeight={1000} sx={{ flexGrow: 1 }}>
								{headingText}
							</Typography>
							<ToggleButtonGroup
								value={table}
								exclusive
								onChange={handleToggle}
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
			{isLoading && <p>Loading</p>}
			{!isLoading && constructorData && driverData && (
				<Standings {...basicTable} />
			)}
		</Fragment>
	);
}