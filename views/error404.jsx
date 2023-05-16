const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="images/404.jpeg" alt="404 error" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">wundervisuals </a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}


module.exports = error404
