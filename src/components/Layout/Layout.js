import React from 'react'

const Layout = props => {
    return(
        <>
            <div>
                Toolar, Sidebar, Backdrawer
            </div>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;