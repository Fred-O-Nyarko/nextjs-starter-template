import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
    layout: any,
    component: any,
    exact: boolean,
    path: string,
}

const RouteWithLayout: React.FC<IProps> = (props) => {

    // destructured interface props
    const { layout: Layout, component: Component, ...rest } = props;
    return (

        <Route {...rest}
            render={(matchProps) => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}

        />
    )
}

export default RouteWithLayout