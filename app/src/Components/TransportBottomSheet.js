import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import StationPage from './StationPage';
import TransportPage from './Transport';
import { NavLink } from 'react-router-dom';

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

  
const TransportBottomSheet = (props) => {
    const { window } = props;
    const [open, setOpen] = React.useState(true);

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
                            minHeight: `50%`,
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
                        <StyledBox
                        className="sheet-absolute"
                        sx={{
                            position: 'absolute',
                            top: -40,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                            height: 'fit-content'
                        }}
                        >
                        <Puller />
                        <div className="sheet-header transport">
                            <NavLink to={'./'}><img src='./Arrow4.svg'/>К списку</NavLink>
                            <h1>Автобус №41</h1>
                            <h1 className="status">Полный</h1>
                            <p>Лучше дождаться следующего автобуса. Он прибудет через 12 минут.</p>
                            <p className="stat">Статистика <NavLink to={'./'}> сегодняшнего </NavLink> дня</p>
                            <img src='./Group55.svg'/>
                        </div>
                        </StyledBox>
                        <StyledBox>
                            <TransportPage data={props.data}/>
                        </StyledBox>
                    </SwipeableDrawer>
            </div>
        </Root>
    )
}
TransportBottomSheet.propTypes = {
  window: PropTypes.func,
};

export default TransportBottomSheet;