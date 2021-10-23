import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { requestAvalible } from '../reducer';
import { withRouter } from 'react-router-dom';
import { getAvalible } from '../selector';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

class StationPage extends React.Component {

    componentDidMount() {
        this.props.requestAvalible()
    }

    render() {
        const StyledBox = styled(Box)(({ theme }) => ({}));
          const Puller = styled(Box)(({ theme }) => ({
            width: 60,
            height: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 3,
            position: 'absolute',
            top: 16,
            left: 'calc(50% - 30px)',
          }));
        function timeConverter(UNIX_timestamp){
            var a = new Date(UNIX_timestamp * 1000);
            var min = a.getMinutes();
            var time = min;
            return time;
          }
          if(!this.props.data){return null}
        else{
        return (
            <>
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
            <div className="sheet-header">
                <h1>Новоданиловский пр. - Академия Транспорта</h1>
            </div>
            </StyledBox>
            <StyledBox>
            <div className="station-page">
                <ul>
                    {this.props.data.map((el,index) => 
                        <NavLink to={'/' + el.id} key={index}>
                            <li>
                                <span className={`${el.type} number-ts`}>
                                    {el.name.replace(/[^0-9]/g, '')}
                                </span>
                                <div className="w-100">
                                    <div className="flex">
                                        <div className={`name-ts`}>
                                            {el.name}
                                        </div>
                                        <div className="time-ts">
                                            {timeConverter(el.time_to_arrive)}
                                        </div>
                                    </div>
                                    <div className={`occupancy-ts flex ${el.occupancy}`}>
                                        Загруженность<span>{el.occupancy}</span>
                                    </div>
                                </div>
                            </li>
                        </NavLink>
                    )}
                </ul>
            </div>
            </StyledBox>
            </>
        )
    }
}
}

let mapStateToProps = (state) => ({
    data: getAvalible(state)
})

export default compose(
    connect(mapStateToProps, {requestAvalible}),
    withRouter
)(StationPage)
