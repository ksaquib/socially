import React, { useRef, useState } from "react"; 

function CreatePost({user, handleAddPosts}){ 
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const imgaeInputRef = useRef();
    function handleSubmit (event){
        event.preventDefault();
        const post = { content , image, user}; 
        handleAddPosts(post);
        setContent("");
        imgaeInputRef.current.value='';
    }
    return <div><h1>Create New Post</h1>
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={content}
        placeholder="Add Post Content"
        onChange={event => setContent(event.target.value)}
        />
        <input
        type="file"
        ref={imgaeInputRef}
        onChange={event => setImage(event.target.files[0])}
        />
        <button type="submit">Submit Post</button>
    </form>
    </div>; 
}

export default CreatePost; 