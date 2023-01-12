import React from 'react';

function MovieList(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.movie}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MovieList;