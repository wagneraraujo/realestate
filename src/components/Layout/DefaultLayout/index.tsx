
import { Footer } from "components/Footer";
import { Navigation } from "components/Navigation";
import React, { ReactNode } from "react";

const DefaultLayout = ({ children } :   ReactNode) => {
    return ( 
    <>
        <Navigation />
        {children}
        <Footer />
    </>);
}

export default DefaultLayout;