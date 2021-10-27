import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Tutor from './management/tutor/Tutor'
import Student from './management/student/Student'
import TutorRequest from './management/tutor-request/TutorRequest'
import Feedback from './management/feedback/Feedback'
import School from './management/school/School'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>   
            <Route path='/tutor' component={Tutor}/>         
            <Route path='/student' component={Student}/>          
            <Route path='/tutor-request' component={TutorRequest}/> 
            <Route path='/feedback' component={Feedback}/>
            <Route path='/school' component={School}/>
            
        </Switch>
    )
}

export default Routes
