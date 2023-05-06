const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/premium_photo-1663852706199-52e7cd98468e.avif" alt="varios food" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">olivie</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>

        </Def>
    )
}


module.exports = home