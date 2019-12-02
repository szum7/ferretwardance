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
                ret.ArchiveTodo = context.ArchiveTodo.FirstOrDefault(x => x.IsActive == "Y");
                ret.ShortTodo = context.ShortTodo.FirstOrDefault(x => x.IsActive == "Y");
                ret.LongTodo = context.LongTodo.FirstOrDefault(x => x.IsActive == "Y");
                return ret;
            }
        }

        public bool Save(TodoWrap data)
        {
            using (var context = new FerretWarDanceDatabaseContext())
            {
                if (data.LongTodo != null)
                {
                    var lt = context.LongTodo.FirstOrDefault(x => x.Id == data.LongTodo.Id);
                    if (lt != null)
                    {
                        lt.Content = data.LongTodo.Content;
                    }
                }
                if (data.ShortTodo != null)
                {
                    var lt = context.ShortTodo.FirstOrDefault(x => x.Id == data.ShortTodo.Id);
                    if (lt != null)
                    {
                        lt.Content = data.ShortTodo.Content;
                    }
                }
                if (data.ArchiveTodo != null)
                {
                    var lt = context.ArchiveTodo.FirstOrDefault(x => x.Id == data.ArchiveTodo.Id);
                    if (lt != null)
                    {
                        lt.Content = data.ArchiveTodo.Content;
                    }
                }
                context.SaveChanges();
                return true;
            }
        }
    }
}
