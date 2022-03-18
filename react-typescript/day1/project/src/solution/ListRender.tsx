import React, { useState } from 'react'
import postDummyList from '../mock/postData.json'

function ListRender() {

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
        <select value={selectedUser} name="userId" id="user-id" onChange={(e) => userIdFilter(e.target.value)}>
          <option value=''>ALL</option>
          {
            postDummyList
              .reduce<number[]>((userIdList, post) => {
                if (!userIdList.includes(post.userId)) {
                  userIdList.push(post.userId)
                }
                return userIdList
              }, [])
              .map(userId => <option key={userId} value={userId}>{userId}</option>)
          }
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

export default ListRender
