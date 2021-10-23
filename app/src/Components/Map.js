import React from 'react'
import BottomSheet from './BottomSheet';

const Map = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <BottomSheet/>
    )
}

export default Map;