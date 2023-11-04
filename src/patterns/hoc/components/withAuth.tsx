import { useState } from "react";


const withAuth = (Component: React.ComponentType<any>) => {

    return (props: any) => {
        if(props.isItAuthenticated !== true){
            return <div>Sign In</div>;
        }

        return <Component />;
    }
    
}

export default withAuth;