import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create =()=>{

    const [title,setTitle]=useState('helloo');
    const [author,setAuthor]=useState('thetis');
    const [body,setBody]=useState('body');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleDelete=(e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog={blogname:title,author,body};
        console.log(blog);

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }
    return(
        <div className="create">
        <h1>NewBlog</h1>
        <form onSubmit={handleDelete}>
            <label>Title:</label>
            <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <label>Author:</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="thetis">thetis</option>
                <option value="patroclus">patroclus</option>
                <option value="achilles">achilles</option>
            </select>

            <label>Body</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            {!isPending &&<button>addblog</button>}
            {isPending && <button disabled>adding blog...</button>}
        </form>
        {title}
        </div>
    );
}

export default Create;