import React from 'react'
import MyLoader from '../components/loader'

function Ex2PropsChild() {
  return (
    <>
      <MyLoader isLoading={true}>
        <p>load complete !!!</p>
      </MyLoader>
      <MyLoader>
        <p>load complete !!!</p>
      </MyLoader>
    </>
  )
}

export default Ex2PropsChild