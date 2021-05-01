namespace Tasks.Service.Models
{
    public class TaskDatabaseSettings : ITaskDatabaseSettings
    {
        public string TasksCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ITaskDatabaseSettings
    {
        string TasksCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}