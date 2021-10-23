import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import NavigationIcon from '@mui/icons-material/Navigation';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import Paper from '@mui/material/Paper';

const Navbar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<ManageSearchIcon />} aria-label="Поиск" />
                <BottomNavigationAction icon={<AltRouteIcon />} aria-label="Маршруты" />
                <BottomNavigationAction icon={<NavigationIcon />} aria-label="Навигатор" />
                <BottomNavigationAction icon={<DirectionsBusIcon />} aria-label="Транспорт" />
            </BottomNavigation>
        </Paper>
    )
}

export default Navbar;