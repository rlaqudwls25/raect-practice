import React, { useState } from 'react'
import postDummyList from '../mock/postData.json'

function Ex7ListRender() {

  const [postList, setPostList] = useState(postDummyList)
  const [selectedUser, setSelectedUser] = useState('')

  const userIdFilter = (userId: string) => {
    const filteredList = userId
      ? postDummyList.filter(post => post.userId === +userId)
      : postDummyList

    setSelectedUser(userId)
    setPostList(filteredList)
  }

  return (
    <div>
      <div className="filter-wrapper">
        <select value={selectedUser} name="userId" id="user-id">
          <option value=''>ALL</option>
        </select>
      </div>
      {
        postList.map(post => {
          return (
            <p key={post.id}>
              {post.id} : {post.title}
            </p>
          )
        })
      }

    </div>
  )
}

export default Ex7ListRender