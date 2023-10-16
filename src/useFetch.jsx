// import { useState, useEffect } from "react";

// const useFetch = (url) => {

//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] =useState(true);

//     useEffect (()=>{
//         const abortCon = new AbortController;
//         fetch(url , {signal : abortCon.signal})
//         .then(res=>res.json())
//         .then((data)=>{
//             setData(data);
//             setIsPending(false);
//         })
//         .catch(err=>console.log(err))
//         return ()=>abortCon.abort();
//     },[url])

//     return ( data, isPending );
// }
 
// export default useFetch;
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then((res) => res.json())
            .then((fetchedData) => {
                setData(fetchedData); // Use setData to update the state
                setIsPending(false); // Use setIsPending to update the state
            })
            .catch((err) => console.log(err));

        return () => abortController.abort(); // Abort the fetch on cleanup
    }, [url]);

    return { data, isPending }; // Return an object with data and isPending
};

export default useFetch;
