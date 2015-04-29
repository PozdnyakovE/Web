using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace html5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Html5()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Canvas()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            

            return View();
        }
        
    }
}
