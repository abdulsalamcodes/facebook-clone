import { ArrowRight } from 'react-feather'
import React from 'react'
import Story from './Story/Story'
import './StoryReel.css'
const users = [
    {
        name: 'Kelvin Brad',
        profileSrc: 'https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg',
        image: 'https://cutt.ly/ch4XdrN'
    },
    {
        name: 'Kelvin Brad',
        profileSrc: '',
        image: 'https://cutt.ly/Eh3A6mF'
    },
    {
        name: 'Kelvin Brad',
        profileSrc: '',
        image: 'https://cutt.ly/th3A9ia'
    },
    {
        name: 'Kelvin Brad',
        profileSrc: '',
        image: 'https://cutt.ly/6h3ANzz'
    },
]
function StoryReel() {
    return (
        <div className="storyReel">
            {users.map(user => {
               return <Story title={user.name} profileSrc={user.profileSrc} image={user.image} />
            })}
            <button className='storyReel__controller'>
                <ArrowRight />
            </button>
        </div>
    )
}

export default StoryReel
