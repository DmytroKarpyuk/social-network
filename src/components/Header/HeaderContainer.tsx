import React from 'react';
import Header, {DispatchPropsType, MapPropsType} from './Header';
import {connect} from 'react-redux';
import {logOutUser} from '../../redux/reducers/auth-reducer';
import {AppStateType} from '../../redux/store/redux-store';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logOutUser})(HeaderContainer);