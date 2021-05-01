using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Tasks.Service.Models;
using Tasks.Service.Services;

namespace Tasks.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TasksController(TaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get()
        {
            return _taskService.FindAll().ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Task> GetById(string id)
        {
            var task = _taskService.FindById(id);

            if (task is null)
            {
                return NotFound();
            }

            return task;
        }

        [HttpPost]
        public ActionResult<Task> Post(Task task)
        {
            _taskService.Insert(task);
            return CreatedAtAction(nameof(GetById),
                new {id = task.Id},
                task);
        }

        [HttpPut("{id}")]
        public IActionResult Put(string id, Task task)
        {
            var existingTask = _taskService.FindById(id);

            if (existingTask is null)
            {
                return NotFound();
            }

            var taskToReplace = new Task
            {
                Id = id,
                Title = task.Title,
                IsDone = task.IsDone
            };
            
            _taskService.ReplaceById(id, taskToReplace);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var existingTask = _taskService.FindById(id);

            if (existingTask is null)
            {
                return NotFound();
            }

            _taskService.DeleteById(id);

            return NoContent();
        }
    }
}