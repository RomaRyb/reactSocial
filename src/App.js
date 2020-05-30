import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props) => {
    return (
        
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} />
                    <Route path='/profile' render={ () => <Profile 
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />} />
                    
                    
                    
                    
                    {/* <Route path='/news' component={Profile} />
                    <Route path='/music' component={Profile} />
                    <Route path='/settings' component={Profile} /> */}
                </div>
            </div>
        
    );
}

export default App;
