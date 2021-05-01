using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Tasks.Service.Models
{
    public record Task : ITask
    {
        [BsonId]
        [BsonRepresentation((BsonType.ObjectId))]
        public string Id { get; set; }

        public string Title { get; set; }
        public bool IsDone { get; set; }
    }
}