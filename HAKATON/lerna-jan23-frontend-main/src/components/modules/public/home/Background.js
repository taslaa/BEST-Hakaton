import React from 'react'

export default function Background() {
    const backgroundImage = 'https://thumbs.dreamstime.com/b/smart-home-icons-set-white-background-118704443.jpg';

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "contain", backgroundPosition: "center", height: "500px", width: "100%"}}>
  
</div>
  )
}
