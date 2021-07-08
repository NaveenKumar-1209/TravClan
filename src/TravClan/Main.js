import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from './Header';
const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerpage] = useState(10);

    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get("https://intense-tor-76305.herokuapp.com/merchants");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[]);
        return (
        <div className = "Container mt-5">
            <h1 className="text-primary mb-3">TravClan</h1>
            <Header posts={posts} loading={loading} />
        </div>
    )
}

export default Main
