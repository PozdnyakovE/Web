using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using RoachFrontend.Models;

namespace RoachFrontend.Controllers
{
    public class HomeController : Controller
    {
        private static List<UserStat> statistics = new List<UserStat>(); 
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Тараканьи Бега.";

            return View();
        }

        public ActionResult Manage()
        {
            return View();
        }

        public ActionResult Stats()
        {
            var data = JsonConvert.SerializeObject(new
            {
                stats = statistics,
                success = true
            });
            return Content(data);
        }


        public ActionResult SaveStats(string data)
        {
            var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            statistics.Add(userStat);
            return Content("OK");
        }
    }
}