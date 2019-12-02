using System;
using System.Collections.Generic;

namespace FerretWarDance.DAL.Models
{
    public partial class ArchiveTodo
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string IsActive { get; set; }
    }
}
