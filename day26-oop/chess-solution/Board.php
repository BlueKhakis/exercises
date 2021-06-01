<?php

class Board
{
    public $positions = [];

    public function __construct($positions)
    {
        if (is_string($positions)) {
            $this->positions = $this->fen2array($positions);
        } else {
            $this->positions = $positions;
        }        
    }

    public function __toString()
    {
        $html = '';
        $html .= '<div class="board">';

        for ($y = 1; $y <= 8; $y++) {
            for ($x = 1; $x <= 8; $x++) {

                if (isset($this->positions[$x][$y])) {
                    $piece = new Piece($this->positions[$x][$y]);
                } else {
                    $piece = null;
                }

                $square = new Square($x, $y, $piece);

                $html .= $square;
            }
        }

        $html .= '</div>';

        return $html;
    }


    public function fen2array($fen)
    {
        $parts = preg_split('#\s+#', $fen);
        $rows = explode('/', $parts[0]);
    
        $pieces = array();
    
        $y = 8;
        foreach($rows as $row)
        {
            $x = 1;
            for($i = 0; $i < strlen($row); $i++)
            {
                if(is_numeric($row[$i]))
                {
                    $x += intval($row[$i]);
                }
                else
                {
                    $pieces[$x][$y] = $row[$i];
                    $x++;
                }
            }
            $y--;
        }
    
        return $pieces;
    }
}