//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch.js"


const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home