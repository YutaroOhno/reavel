<?php

namespace App\Services;

use App\Repositories\TodoRepositoryInterface;

class TodoService
{
    private $todoRepo;

    public function __construct(TodoRepositoryInterface $todoRepository)
    {
        $this->todoRepo = $todoRepository;
    }

    public function getAllTodo()
    {
        return $this->todoRepo->fetchAllTodo();
    }
}
