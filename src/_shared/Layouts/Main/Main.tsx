import React from 'react';
import PropTypes from 'prop-types'
import Header from './components/Header';
import Footer from './components/Footer';

interface IProps {
    children: React.ReactNode
}

const Main: React.FC<IProps> = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <Header />
            <main style={{ marginTop: "5rem" }}>

                {children}


                <Footer />
            </main>

        </React.Fragment>
    );
}

Main.propTypes = {
    children: PropTypes.node
}

export default Main;
