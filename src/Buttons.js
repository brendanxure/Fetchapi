import React from 'react'

const Buttons = ({reqType, setReqType}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <button className={reqType==='users' ? 'selected' :null} onClick={()=>setReqType('users')}>User</button>
        <button className={reqType==='posts' ? 'selected' :null} onClick={()=>setReqType('posts')}>Post</button>
        <button className={reqType==='comments' ? 'selected' :null} onClick={()=>setReqType('comments')}>Comment</button>
    </form>
  )
}

export default Buttons