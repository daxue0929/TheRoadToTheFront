import React from 'react'
import Profile from '../components/Profile.js';
import { getImageUrl } from '../utils/util'

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function handleClick() {
    alert('You clicked me!');
}

export default () => (
    <div>
        <h1>Welcome to React-Static</h1>
        <section>
            <h2>Amazing scientists</h2>
            <Profile/>
        </section>
        <hr/>

        <Card>
            <Avatar size={100} person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }}/>
        </Card>
        <hr/>

        <button onClick={handleClick}>
            Click me
        </button>



    </div>

)
