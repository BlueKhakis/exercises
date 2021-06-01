<?php

class ContactMessage
{
    public $subject = null;
    public $text = null;
    public $is_robot = 1;
    public $topic = null;
    public $newsletter = false;
    public $response = 'none';

    public $created_at = null; // date & time of when
                               // the object was saved to DB

    public $updated_at = null; // date & time of when
                               // the object was last updated

    public function fillFromArray($array)
    {
        $this->subject     = $array['subject'] ?? $this->subject;
        $this->text        = $array['text'] ?? $this->text;
        $this->is_robot    = $array['is_robot'] ?? $this->is_robot;
        $this->topic       = $array['topic'] ?? $this->topic;
        $this->newsletter  = $array['newsletter'] ?? $this->newsletter;
        $this->response    = $array['response'] ?? $this->response;
    }

    /**
     * inserts this object into the database
     *
     * uses the DBBlackbox class' functions
     *
     * @return integer id of the inserted record
     */
    public function insert()
    {
        $this->created_at = date('Y-m-d H:i:s');

        return insert($this);
    }

    /**
     * updates an object in the database
     *
     * uses the DBBlackbox class' functions
     *
     * @param integer $id - id of the object to update
     * @return void
     */
    public function update($id)
    {
        $this->updated_at = date('Y-m-d H:i:s');

        update($id, $this);
    }
}