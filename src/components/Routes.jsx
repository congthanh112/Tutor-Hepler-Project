import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import TutorRequest from './tutor-component/tutor-request/TutorRequest'
import TutorFeedback from './tutor-component/tutor-feedback/TutorFeedback'
import TutorManagement from './tutor-component/tutor-management/TutorManagement'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>            
            <Route path='/tutor-request' component={TutorRequest}/>
            <Route path='/tutor-feedback' component={TutorFeedback}/>
            <Route path='/tutor-management' component={TutorManagement}/>
        </Switch>
    )
}

export default Routes
