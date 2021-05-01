using System.Collections.Generic;
using MongoDB.Driver;
using Tasks.Service.Models;

namespace Tasks.Service.Services
{
    public class TaskService
    {
        private readonly IMongoCollection<Task> _tasks;

        public TaskService(ITaskDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _tasks = database.GetCollection<Task>(settings.TasksCollectionName);
        }

        public IEnumerable<Task> FindAll()
        {
            return _tasks.Find(task => true).ToList();
        }

        public Task FindById(string id)
        {
            return _tasks.Find(task => task.Id == id).FirstOrDefault();
        }

        public Task Insert(Task task)
        {
            _tasks.InsertOne(task);
            return task;
        }

        public void ReplaceById(string id, Task taskToReplace)
        {
            _tasks.ReplaceOne(task => task.Id == id, taskToReplace);
        }

        public void DeleteById(string id)
        {
            _tasks.DeleteOne(task => task.Id == id);
        }
    }
}