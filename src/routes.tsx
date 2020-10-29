import React from 'react';
import HomePage from './pages/home/index'
import { Redirect, Switch } from 'react-router-dom'
import { RouteWithLayout } from './_shared/components'
import { Main as MainLayout } from './_shared/Layouts'
const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout component={HomePage} exact layout={MainLayout} path='/' />
            <Redirect to='not-found' />
        </Switch>
    )
}

export default Routes