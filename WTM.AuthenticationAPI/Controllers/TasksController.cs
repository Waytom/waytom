using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WTM.AuthenticationAPI.Controllers
{
    [RoutePrefix("api/Tasks")]
    public class TasksController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Task.CreateTasks());
        }
    }

    public class Task
    {
        public int TaskID { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public Boolean IsCompleted { get; set; }

        public static List<Task> CreateTasks()
        {
            List<Task> TaskList = new List<Task>
            {
                new Task {TaskID = 10248, Title = "Посмотреть видео", Text = "Amman", IsCompleted = true },
                new Task {TaskID = 10249, Title = "Щелкнуть видео", Text = "Dubai", IsCompleted = false},
                new Task {TaskID = 10250, Title = "Посмотреть рекламу", Text = "Jeddah", IsCompleted = false },
                new Task {TaskID = 10251, Title = "Пригласить друга", Text = "Abu Dhabi", IsCompleted = false},
                new Task {TaskID = 10252, Title = "Щелкнуть на рекламу", Text = "Kuwait", IsCompleted = true}
            };

            return TaskList;
        }
    }
}
