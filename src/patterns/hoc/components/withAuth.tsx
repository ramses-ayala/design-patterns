const withAuth = (Component: React.ComponentType<any>) => {

    return (props: any) => {
        console.log('props : ', props);
        if(props.isItAuthenticated !== true){
            return <div>Sign In</div>;
        }

        return <Component />;
    }
    
}

export default withAuth;