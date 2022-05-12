import React, { useState, useEffect } from 'react';
import './styles.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

function ProductCards() {
  const [upvotesX, setUpvotesX] = useState(0);
  const [downvotesX, setDownvotesX] = useState(0);
  const [upvotesY, setUpvotesY] = useState(0);
  const [downvotesY, setDownvotesY] = useState(0);
  const [upvotesZ, setUpvotesZ] = useState(0);
  const [downvotesZ, setDownvotesZ] = useState(0);
  var products = ["X", "Y", "Z"];

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  useEffect(() => {
    
  shuffle(products)
   }, []) // <-- empty dependency array

const [shouldShuffle, setShouldShuffle] = useState(0);
shuffle(products);

// if (shouldShuffle === 0) {
//   shuffle(products);
//   setShouldShuffle(1);
// }

function upvoteX() {
  setUpvotesX(upvotesX => upvotesX + 1);
}
function downvoteX() {
  setDownvotesX(downvotesX => downvotesX + 1);
}
function upvoteY() {
  setUpvotesY(upvotesY => upvotesY + 1);
}
function downvoteY() {
  setDownvotesY(downvotesY => downvotesY + 1);
}
function upvoteZ() {
  setUpvotesZ(upvotesZ => upvotesZ + 1);
}
function downvoteZ() {
  setDownvotesZ(downvotesZ => downvotesZ + 1);
}

return (
  <div className="app">

    <div className="mt-2 col-md-12">
      <Card
        style={{
          width: 400,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Product {products[0]}
          </Typography>
          <Typography variant="h5" component="h2">
            Upvotes: {upvotesX}
          </Typography>
          <Typography variant="h5" component="h2">
            Downvotes: {downvotesX}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="row">
            <button className={`button button-primary button-primary-active`} onClick={upvoteX}>
              Upvote
            </button>
            <button className={`button button-primary button-primary-active`} onClick={downvoteX}>
              Downvote
            </button>
          </div>
        </CardActions>
      </Card>
    </div>

    <div className="mt-2 col-md-12">
      <Card
        style={{
          width: 400,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Product {products[1]}
          </Typography>
          <Typography variant="h5" component="h2">
            Upvotes: {upvotesY}
          </Typography>
          <Typography variant="h5" component="h2">
            Downvotes: {downvotesY}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="row">
            <button className={`button button-primary button-primary-active`} onClick={upvoteY}>
              Upvote
            </button>
            <button className={`button button-primary button-primary-active`} onClick={downvoteY}>
              Downvote
            </button>
          </div>
        </CardActions>
      </Card>
    </div>

    <div className="mt-2 col-md-12">
      <Card
        style={{
          width: 400,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Product {products[2]}
          </Typography>
          <Typography variant="h5" component="h2">
            Upvotes: {upvotesZ}
          </Typography>
          <Typography variant="h5" component="h2">
            Downvotes: {downvotesZ}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="row">
            <button className={`button button-primary button-primary-active`} onClick={upvoteZ}>
              Upvote
            </button>
            <button className={`button button-primary button-primary-active`} onClick={downvoteZ}>
              Downvote
            </button>
          </div>
        </CardActions>
      </Card>
    </div>



  </div>
);
};

export default ProductCards;