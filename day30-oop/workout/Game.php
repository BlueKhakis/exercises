<?php

class Game
{
    // columns from the DB
    public $id = null;
    public $name = null;
    public $image_url = null;
    public $description = null;
    public $rating = null;
    public $released_at = null;

    // relationships
    public $genres = [];


    public function addGenre(Genre $genre)
    {
        // add the parameter $genre into
        // this object's genres property
        // as a new array element
        $this->genres[] = $genre;
    }
}