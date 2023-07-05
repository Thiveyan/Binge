import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
    const { watchlist } = useContext(GlobalContext);

    function removeMovie(deleteId) {
        let newArr = watchlist.filter((movie) => movie.imdbID !== deleteId);
        localStorage.setItem("watchlist", JSON.stringify(newArr));
        window.location.reload(true);
    }

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => removeMovie(movie.imdbID)}>
                        <img src="./check-mark-256.svg" className="icon" />
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieControls;
