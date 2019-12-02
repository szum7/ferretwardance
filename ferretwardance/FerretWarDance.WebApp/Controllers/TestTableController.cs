using Microsoft.AspNetCore.Mvc;
using FerretWarDance.BL;

namespace FerretWarDance.WebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestTableController : ControllerBase
    {
        [HttpGet("testcall")]
        public ActionResult TestCall()
        {
            return Ok(new { message = "Test call got it's response. I am that response." });
        }
    }
}
