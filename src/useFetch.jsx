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
                setData(fetchedData);
                setIsPending(false); 
            })
            .catch((err) => console.log(err));

        return () => abortController.abort();
    }, [url]);

    return { data, isPending };
};

export default useFetch;
