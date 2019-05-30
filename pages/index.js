import React from 'react'
import Link from 'next/link'
import "isomorphic-fetch"

// import Blog from 

const Home = ({ repositories }) => (
    <div>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        {repositories.map(repo => (
            <h1 key={repo.id}>{repo.name}</h1>
        ))}
    </div>
)

//chama antes de montar o componente
Home.getInitialProps = async () => {
    const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
    const repositories = await response.json();

    return { repositories };
};


export default Home;

