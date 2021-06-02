<?php

class Region
{
    public $id = null;
    public $name = null;
    public $slug = null;

    /**
     * insert this object into the database
     */
    public function insert()
    {
        $sql = "INSERT
                INTO `regions`
                (`name`, `slug`)
                VALUES
                (?, ?)
        ";

        insert($sql, [
            $this->name,
            $this->slug
        ]);

        // update the object's id property
        // with the id that the database assigned
        // to the record using AUTO_INCREMENT
        $this->id = last_insert_id();
    }
}