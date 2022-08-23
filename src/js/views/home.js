import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<form>
        <div class="formBox">
            <label for="title">Movie</label>
            <input type="text" id="title" placeholder="Title"/>
        </div>
        <div class="formBox">
            <label for="yr">Year</label>
            <input type="number" id="yr" placeholder="Year"/>
        </div>
        <div class="formBox">
            <button id="btn">Click to Add</button>
        </div>
        <div id="msg">
            <pre></pre>
        </div>
    	</form>
	</div>
);
