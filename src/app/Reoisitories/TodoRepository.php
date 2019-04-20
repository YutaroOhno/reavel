<?php

namespace App\Repositories;

use App\Models\Todo;

class TodoRepository implements TodoRepositoryInterface
{
    private $todo;
    
    public function __construct(Todo $todo)
    {
        $this->todo = $todo;
    }

 
    public function fetchAllTodo()
    {
      return $this->todo->all();
    }
}
