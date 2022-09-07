import React from 'react'

const Contents = ({contents}) => {
  return (
    <div>
        <table>
        <tbody>
            {contents.map(content => (
                <tr>
                {Object.entries(content).map(([keys,value])=> {
                    return(
                        <td>
                            {JSON.stringify(value)}
                        </td>
                    )
                })}
                </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default Contents