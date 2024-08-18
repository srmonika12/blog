import{Link} from 'react-router-dom';
const NotFound=()=>{
    return (
        <div>
            <h2>Page not found</h2>
            <p>sorry this page does not exist</p>
            <Link to="/">Back to home page....</Link>
        </div>

    )
}

export default NotFound