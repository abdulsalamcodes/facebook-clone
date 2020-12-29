import React from 'react'
import './Widget.css'
function Widget() {
    return (
        <div className="widget">
            <iframe 
            className="widget__frame"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact%2F&tabs=timeline&width=340&  height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="100%"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style={{border: 'none', overflow: 'hidden'}}
                ></iframe>
        </div>
    )
}

export default Widget
