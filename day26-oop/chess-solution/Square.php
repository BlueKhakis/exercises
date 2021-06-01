<?php

class Square
{
    public $x_coord = null;
    public $y_coord = null;
    public $piece = null;

    public function __construct($x, $y, $piece = null)
    {
        $this->x_coord = $x;
        $this->y_coord = $y;
        $this->piece = $piece;
    }

    public function isDark()
    {
        return $this->x_coord % 2 == $this->y_coord % 2;
    }

    public function __toString()
    {
        $html = '';
        
        if ($this->isDark()) {
            $class = 'dark';
        } else {
            $class = 'light';
        }

        $html .= "<div class=\"square {$class}\">";
        $html .= $this->piece;
        $html .= '</div>';

        return $html;

        // return '<div class="' . ($this->isDark() ? 'dark' : 'light') . '">
        //         ' . $this->piece . '
        //     </div>
        // ';
    }
}