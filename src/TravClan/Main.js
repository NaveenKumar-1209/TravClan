import React, { useState, useEffect } from 'react';
import axios from "axios";
import Customers from './Customers';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerpage] = useState(1);

    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get("https://intense-tor-76305.herokuapp.com/merchants");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[]);

    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        return (
        <div className = "Container mt-5">
            <h1 className="text-primary mb-3">TravClan</h1>
            <Customers posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
        </div>
    )
}

export default Main
