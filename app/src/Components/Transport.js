import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { requestTransport } from '../reducer';
import { withRouter } from 'react-router-dom';
import { getAvalible, getTransport } from '../selector';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

class TransportPage extends React.Component {
    componentDidMount() {
        let tsId = this.props.match.params.tsId
        this.props.requestTransport(tsId)
    }

    componentDidUpdate(prevProps , prevState , snapshot) {
        if(this.props.match.params.tsId != prevProps.match.params.tsId){
            let tsId = this.props.match.params.userId
            this.props.requestTransport(tsId)
        }
    }

    render() {
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
        if(!this.props.data.result){return null}
        else{
            return  (
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
                            <div className="station-page">
                                <p>{this.props.data.result.id}</p>
                            </div>
                        </StyledBox>
                </>
            )
        }
    }
}

let mapStateToProps = (state) => ({
    data: getTransport(state)
})

export default compose(
    connect(mapStateToProps, {requestTransport}),
    withRouter
)(TransportPage)