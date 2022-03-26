import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Outlet, Link, useNavigate } from 'react-router-dom';

function LazyRouterIndex() {

  const [posts, setPosts] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log('res: ', res);
        setPosts(res.data)
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }, [])

  const moveToDetailPage = (id) => {
    nav(`/lazy-ex-router/${id}`)
  }


  return (
    <div>
      <h1>this is lazy</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`${post.id}`}>
              {post.title}
            </Link>
            <button onClick={() => moveToDetailPage(post.id)}>moveByNav</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LazyRouterIndex
