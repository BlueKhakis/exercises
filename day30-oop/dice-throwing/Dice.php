<?php

class Dice
{
    public $nr_of_sides = 6;
    public $value = null;

    public function __construct($nr_of_sides = 6)
    {
        $this->nr_of_sides = $nr_of_sides;
    }

    public function roll()
    {
        $this->value = rand(1, $this->nr_of_sides);
    }

    public function __toString()
    {
        return '<div class="die">' . $this->value . '</div>';
    }
}