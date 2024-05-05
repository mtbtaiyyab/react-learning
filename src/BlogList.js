// First way to use props
// const BlogList = (props) => {
//     const blogs = props.sect;
//     const title = props.title;
// Second way to use props
const BlogList = ({sect, title, deleteBlog}) => {
    const blogs = sect;
return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;