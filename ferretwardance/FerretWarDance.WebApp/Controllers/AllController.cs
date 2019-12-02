using FerretWarDance.BL;
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
    }
}
