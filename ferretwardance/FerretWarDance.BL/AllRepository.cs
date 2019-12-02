using FerretWarDance.DAL;
using FerretWarDance.DAL.Models;
using System;
using System.Linq;
using System.Collections.Generic;

namespace FerretWarDance.BL
{
    public class AllRepository
    {
        public TodoWrap GetFirstAll()
        {
            using (var context = new FerretWarDanceDatabaseContext())
            {
                var ret = new TodoWrap();
                ret.ArchiveTodo = context.ArchiveTodo.Where(x => x.IsActive == "Y").FirstOrDefault();
                ret.ShortTodo = context.ShortTodo.Where(x => x.IsActive == "Y").FirstOrDefault();
                ret.LongTodo = context.LongTodo.Where(x => x.IsActive == "Y").FirstOrDefault();
                return ret;
            }
        }
    }
}
