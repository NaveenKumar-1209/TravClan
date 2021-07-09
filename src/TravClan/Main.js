import React, { useState, useEffect } from "react";
import axios from "axios";
import Customers from "./Customers";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import { Navbar, Button, InputGroup, FormControl } from "react-bootstrap";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const api_url = "https://intense-tor-76305.herokuapp.com/merchants";

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(api_url);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <Navbar style={{ backgroundColor: "#101370" }} expand="lg">
        <Navbar.Brand style={{ marginLeft: "65px" }} href="#">
          <img src="https://images.assets-landingi.com/j0Cv6OsfQEt2qHeH/travclan_logo_latest.png" />
        </Navbar.Brand>
        <InputGroup className="mx-auto" style={{ width: "25vw" }}>
          <FormControl
            placeholder="Customer's Name"
            aria-label="Customer's Name"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-primary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Navbar>
      <Customers posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        postsPage={posts}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Main;
