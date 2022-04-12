import React, { useState, useEffect } from "react"; 
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from'./components/PostList';

const functionsCount = new Set();

function App(){
    const [user, setUser] = useState('Saquib');
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = user ? `${user}'s Feed`: 'Please login';
    }, [user]);

    const handleAddPosts  = React.useCallback((newPost)=>{
        setPosts([newPost, ...posts]);
    },[posts]);

    functionsCount.add(handleAddPosts);
    
    if(!user){
        return <Login setUser={setUser}/>;
    }
    return (
    <div>
        <Header user={user} setUser={setUser}/>
        <CreatePost user={user} handleAddPosts={handleAddPosts} />
        <PostList posts={posts}/>
        <button onClick={()=>setCount(prev=>prev+1)}>{count}</button>
    </div>
    );
}

export default App; 