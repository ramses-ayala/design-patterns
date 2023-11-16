import { useState, useEffect } from "react";

const FunctionalCounter = (props: any) => {


    /*  useEffect(() => {
        console.log(`FunctionalCounter mounted`);
        return () => {
            console.log(`FunctionalCounter unmounted`);
        };
    }, []);
    
    useEffect(() => {
        console.log(`FunctionalCounter updated`);
    }, [props]); */
    const [counter, setCounter] = useState(0);

    const handleIncrementCounter = () => {
        setCounter(counter + 1);
    }

    const handleDecrementCounter = () => {
        if(counter <= 0){
            setCounter(0);
        }else{
            setCounter(counter - 1);
        }
    }


    return(
        <div>
            <p>Count: {counter}</p>
            <button onClick={handleIncrementCounter}>Increment</button>
            <button onClick={handleDecrementCounter}>Decrement</button>
        </div>
    )
}

export default FunctionalCounter;