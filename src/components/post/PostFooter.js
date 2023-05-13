import React from 'react'
import '../../styles/post/footer.css'
export default function PostFooter() {
    const now ={
        mon:new Date().getMonth(),
        day:new Date().getDate(),
        year:new Date().getFullYear(),
        hr:new Date().getHours(),
    }
  const elapsedTime = new Date().getTime() - new Date(Date.parse(new Date().toDateString())).getTime()
  return (
    <div className='PostFooter'>
      <span className = 'post-date'>
        {now.mon}/{now.day}/ {now.year} {" "} posted {elapsedTime} ago
      </span>
    </div>
  )
}
