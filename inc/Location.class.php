<?php

require_once 'Choice.class.php';

class Location {
    public $id;
    public $x;
    public $y;
    public $title;
    public $description;
    public $image_url;

    public $tile_filename;
    public $cleared;

    public $choices = [];

    /*
     * Parameters:
     * $mysqli = an open mysqli connection
     * $x = the x of the location that you want to load from DB
     * $y = the y of the location that you want to load from DB
     *
     * Result:
     * true = loading worked
     * false = loading failed
    */
    function LoadFromDb($mysqli, $id) {

        $sql = "SELECT * FROM locations WHERE id=" . $id . ";";
        $results = $mysqli->query($sql);

        if ( $results->num_rows == 1) {
            $record = $results->fetch_assoc();
            $this->id = $record['id'];
            $this->x = $record['x'];
            $this->y = $record['y'];
            $this->title = $record['title'];
            $this->image_url = $record['image'];
            $this->description = $record['description'];

            // now load choices for this location
            $sql = "SELECT * FROM choices WHERE from_location_id=" . $this->id . ";";
            $results2 = $mysqli->query($sql);

            foreach($results2 as $row)
            {
                $new_choice = new Choice();
                $new_choice->id = $row['id'];
                $new_choice->from_location_id = $row['from_location_id'];
                $new_choice->to_location_id = $row['to_location_id'];
                $new_choice->title = $row['title'];
                $new_choice->needs_item_id = $row['needs_item_id'];
                array_push($this->choices, $new_choice);
            }

            return true;
        }

        return false;
    }
}

