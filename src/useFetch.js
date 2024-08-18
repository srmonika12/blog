import {useState,useEffect} from "react";


const useFetch =(url) =>{

    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)
    

    useEffect(()=>{
        const abortcont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortcont.signal})
        .then((res)=>{
            if(!res.ok){throw Error('failed to load endpoint')}
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setData(data);
        })
        .catch(err => {
            if (err.name==='AbortError'){
                console.log('fetch abort');
            }
            else{
            console.log(err);
            setError(err.message);
            setIsPending(false);
            }
        })
        
        },1000);
        return ()=>abortcont.abort();

    },[url])

    return {data, isPending, error}

}

export default useFetch;