using System;
using System.Collections.Generic;
using System.Text;

namespace FerretWarDance.DAL.Models
{
    public class TodoWrap
    {
        public ArchiveTodo ArchiveTodo { get; set; }
        public LongTodo LongTodo { get; set; }
        public ShortTodo ShortTodo { get; set; }
    }
}
