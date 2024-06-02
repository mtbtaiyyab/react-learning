import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, detail, author };
        setLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setLoading(false);
            console.log("New Blog Added");
            history.push('/');
        });
    }
    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Details:</label>
                <textarea
                    required
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}></textarea>
                <label> Author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Taiyyab">Taiyyab</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding Blog.....</button>}
            </form>
        </div>
    );
}

export default Create;