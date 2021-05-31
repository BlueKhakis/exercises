<?php

class User
{
    public $id = null;
    public $username = null;
    public $name = null;
    public $password = null;
    public $number_of_posts = 0;
    public $created_at = null;

    public function __construct($username)
    {
        $this->created_at = date('Y-m-d H:i:s');

        $this->username = $username;
    }

    public function dump()
    {
        var_dump($this);
    }

    /**
     * returns a string that should be the
     * textual representation of this object
     */
    public function __toString()
    {
        return (string)$this->name;
    }
}