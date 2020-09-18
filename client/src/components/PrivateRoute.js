import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default ({ component: Component, redirect, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if(localStorage.getItem('token')) {
          return <Component /> 
        } else {
          return <Redirect to={redirect} />
        }
      }}
    />
  )
}