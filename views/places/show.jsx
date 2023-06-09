const React = require('react')
const Def = require('../default')

function Show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not Yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border" key={data.place.id}>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😁'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/rant/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={data.place.pic} alt={`picture of ${data.place.name}`} />
                        <p>Located in {data.place.city}, {data.place.state}</p>
                    </div>
                    <div className="col-6">
                        <h2>Rating</h2>
                        {rating}
                        <h2>Discription</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            serving {data.place.cuisines}
                        </h4>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="post" action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <h2>Comments</h2>
                    {comments}
                    <form method="post" action={`/places/${data.place.id}/rant`}>
                        <label className="form-group" htmlFor="author" >Author</label>
                        <input id="author" name="author" className="form-control" />
                        <label className="form-group" htmlFor="Content" >Content</label>
                        <textarea id="content" name="content" className="form-control"></textarea>
                        <label className="form-group" htmlFor="stars" >StarRating</label>
                        <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                        <label htmlFor="rant">rant</label>
                        <input type="checkbox" id="rant" name="rant" value="true" />
                        <br></br>
                        <br></br>
                        <input className="btn btn-primary" type="submit" value="add comment" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show
