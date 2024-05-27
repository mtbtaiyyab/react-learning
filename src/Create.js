import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [author, setAuthor] = useState('');
    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;