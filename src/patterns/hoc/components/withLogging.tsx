import { useEffect } from 'react';

const withLogging = (WrappedComponent: React.ComponentType<any>) => {
    
    return function WithLogging(props: any) {

        /* useEffect(() => {
            console.log(`Component ${WrappedComponent.name} mounted`);
            return () => {
                console.log(`Component ${WrappedComponent.name} unmounted`);
            };
        }, []);

        useEffect(() => {
            console.log(`Component ${WrappedComponent.name} updated`);
        }, [props]); */

        return <WrappedComponent {...props} />;
    }
}

export default withLogging;