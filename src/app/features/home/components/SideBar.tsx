import { useSelector } from 'react-redux';
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'

import { RootState } from '../../../store';
import { SideBarItem } from '.';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector((state: RootState) => state.auth);
    // const { notes } = useSelector( (state: RootState) => state.journal );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    <SideBarItem key={1} title='Pimer titulo' body='Cuerpo' />
                </List>

            </Drawer>

        </Box>
    )
}
