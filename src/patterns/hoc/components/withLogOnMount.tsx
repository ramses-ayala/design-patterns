import { useEffect } from "react";

const withLogOnMount = (Component: React.ComponentType<any>) => {

    const EnhancedComponent = () => {

        useEffect(() => {
            console.log('this is a console message');
        }, []);

        return <Component />;
    }

    return EnhancedComponent;
}

export default withLogOnMount;