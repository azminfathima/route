import React, { useState,useEffect } from 'react'


function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/azminfathima')
        .then(response => response.json())
        .then(data => {console.log(data)
            setData(data)

        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4'>Github followers:{data.followers}
    <img className="text-center" src={data.avatar_url}  alt='avatar' width={300}/>
    </div>
  )
}

export default Github