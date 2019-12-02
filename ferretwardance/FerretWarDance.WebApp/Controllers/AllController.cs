using FerretWarDance.BL;
using FerretWarDance.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FerretWarDance.WebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AllController : ControllerBase
    {
        [HttpGet("testcall")]
        public ActionResult TestCall()
        {
            return Ok(new { message = "Test call got it's response. I am that response." });
        }

        [HttpGet("getfirstall")]
        public ActionResult GetFirstAll()
        {
            var repo = new AllRepository();
            return Ok(repo.GetFirstAll());
        }

        [HttpPost("save")]
        public ActionResult Save(TodoWrap data)
        {
            var repo = new AllRepository();

            if (repo.Save(data))
            {
                return Ok(repo.GetFirstAll());
            }
            return Ok(new { message = "Not okie-dokie." });
        }
    }
}
