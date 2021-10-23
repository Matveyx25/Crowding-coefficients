import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import StationPage from './StationPage';
import TransportPage from './Transport';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    background: 'none'
  }));
  
  const StyledBox = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  }));
  
  const Puller = styled(Box)(({ theme }) => ({
    width: 60,
    height: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 3,
    position: 'absolute',
    top: 16,
    left: 'calc(50% - 30px)',
  }));

const Page = (props) => {
    if(props.type == 'station'){
        return <StationPage/>
    }else if(props.type == 'transport'){
        return <TransportPage/>
    }
}
  
const StationBottomSheet = (props) => {
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <div className="map-wrapper">
                <div className="bus-station" onClick={toggleDrawer(true)}>
                    <img src="./bus.svg"/>
                </div>
                <img src="./map.jpg"/>
                
                    {/* <CssBaseline /> */}
                    <Global
                        styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            minHeight: `40%`,
                            maxHeight: `60%`,
                            height: 'fit-content',
                            overflow: 'visible',
                        },
                        }}
                    />
                    
                    <SwipeableDrawer
                        container={container}
                        anchor="bottom"
                        open={open}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                        swipeAreaWidth={drawerBleeding}
                        disableSwipeToOpen={false}
                        ModalProps={{
                        keepMounted: true,
                        }}
                        className="root-wrapper"
                    >
                        <Page type={props.type}/>
                    </SwipeableDrawer>
            </div>
        </Root>
    )
}
StationBottomSheet.propTypes = {
  window: PropTypes.func,
};

export default StationBottomSheet;