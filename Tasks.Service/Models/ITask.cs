namespace Tasks.Service.Models
{
    public interface ITask : IEntity
    {
        string Title { get; set; }
        bool IsDone { get; set; }
    }
}