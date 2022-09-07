import React from 'react'


const List = ({contents}) => {
  return (
    <div>
        <ul>
        {contents.map((content)=>(
           <li>
               {Object.entries(content).map(([keys, value])=>{
                   return (
                     <>
                     {JSON.stringify(value)}
                     </>  
                   )
               })}
           </li>  
        ))}
        </ul>
    </div>
  )
}

export default List