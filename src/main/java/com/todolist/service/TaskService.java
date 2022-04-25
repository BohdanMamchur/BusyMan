package com.todolist.service;

import com.todolist.model.Role;
import com.todolist.model.Task;
import com.todolist.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface TaskService {

    List<Task> taskList();

    Page<Task> findTaskByUserId(Pageable pageable, String nameUser);

    Page<Task> findAll(Pageable pageable);

    List<Task> findAll();

    Task findOne(Long id);

    String addTask(Task user);

    String deleteTask(Long id);

}