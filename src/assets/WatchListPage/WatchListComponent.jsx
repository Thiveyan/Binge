import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./watchList.css";
import WatchMovieComponent from "./WatchMovieComponent";
import MovieControls from "../MovieControls";

function WatchListComponent() {
    const { watchlist, removeMovieFromWatchList } = useContext(GlobalContext);

    //navigates the top corner buttons to different pages of the web app
    const navigate = useNavigate();

    const navigateToWatchList = () => {
        navigate("/myWatchList");
    };

    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <div className="Container">
            <div className="Header">
                <img src="./binge+.svg" className="AppIcon" />
                <div className="nav-btns">
                    <button className="myListNavBtn" onClick={navigateToWatchList}>
                        My WatchList
                    </button>
                    <button className="myListNavBtn" onClick={navigateToHome}>
                        + Add
                    </button>
                </div>
            </div>
            <h1 className="watchlist-text">My WatchList</h1>

            {/*HTML for the WatchList page */}
            {watchlist.length > 0 ? (
                <div className="movie-grid">
                    {watchlist.map((movie) => (
                        <div className="movie-card">
                            <div className="overlay"></div>
                            <img src={movie.Poster} />

                            <MovieControls type="watchlist" movie={movie} />
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className="noOutputNotifier">No Movies in your WatchList. Add some!</h3>
            )}
        </div>
    );
}

export default WatchListComponent;
