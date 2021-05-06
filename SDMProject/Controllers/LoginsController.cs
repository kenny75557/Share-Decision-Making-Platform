using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using SDMProject.Models;
using PagedList;

namespace SDMProject.Controllers
{
    [Authorize]
    public class LoginsController : Controller
    {
        private SDMdbEntities db = new SDMdbEntities();
        private int pageSize = 10;

        public ActionResult Index()
        {
            return View(db.Login.ToList());
        }

        public ActionResult check_key()
        {      
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult check_key(FormCollection obj)
        {
            if (obj["Check"] == "Lee")
            {
                return RedirectToAction("Index");
            }
            else
            {
                ViewBag.ckMsg = "Null";
            }
            return View();
        }

        public ActionResult Show_List(string searchName, string searchForm, string FormType,int page = 1)
        {
            var FormTypeList = new List<string>();  //以現有資料用下拉式選單來查找
            var FormTypeQry = from d in db.Patient
                              orderby d.Form
                              select d.Form;

            FormTypeList.AddRange(FormTypeQry.Distinct());
            ViewBag.FormType = new SelectList(FormTypeList);
            var patients = from m in db.Patient    //下面為用空白格以打字的方式查找
                           select m;

            if (!String.IsNullOrEmpty(searchName))
            {
                patients = patients.Where(s => s.DrName.Contains(searchName));
            }

            if (!String.IsNullOrEmpty(FormType))
            {
                patients = patients.Where(x => x.Form == FormType);
            }

            if (!String.IsNullOrEmpty(searchForm))
            {
                patients = patients.Where(y => y.Form.Contains(searchForm));
            }
            int currentPage = page < 1 ? 1 : page;
            patients = patients.OrderBy(c => c.ID);
            var result = patients.ToPagedList(currentPage, pageSize);
            return View(result);
        }

        public ActionResult Details(int? id)
        {
            int cal_aircut, cal_kidney, cal_kidplaza;
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Login login = db.Login.Find(id);
         
            var patient = from m in db.Patient
                          where m.Form == "氣管造口術"
                          select m;
            patient = patient.Where(t => t.Account == login.Account);
            cal_aircut = patient.Count();

            var patient2 = from n in db.Patient
                          where n.Form == "慢性腎臟疾病"
                           select n;
            patient2 = patient2.Where(t => t.Account == login.Account);
            cal_kidney = patient2.Count();

            var patient3 = from v in db.Patient
                          where v.Form == "子宮頸癌"
                           select v;
            patient3 = patient3.Where(t => t.Account == login.Account);
            cal_kidplaza = patient3.Count();

            TempData["cal_aircut"] = cal_aircut;
            TempData["cal_kidney"] = cal_kidney;
            TempData["cal_kidplaza"] = cal_kidplaza;
            if (login == null)
            {
                return HttpNotFound();
            }
            return View(login);
        }

        [AllowAnonymous]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Account,Password,Keypass,DrName")] Login login)
        {
           if(login.Account==null || login.DrName == null || login.Keypass==null || login.Password==null)
           {
                ViewBag.Error_All = "請勿在輸入欄空白";
                return View();
           }
            int intid = int.Parse(login.Account);
            login.ID = intid;
            var CheckID = db.Login.Where(w => w.ID == login.ID).FirstOrDefault();
            var CheckAccout = db.Login.Where(x => x.Account == login.Account).FirstOrDefault();
            var CheckPassword = db.Login.Where(y => y.Password == login.Password).FirstOrDefault();
          
            if (ModelState.IsValid)
            {
                if (CheckAccout != null)
                {
                    ViewBag.ErrorAccountMsg = "此帳號已被註冊，請使用其它帳號";
                    return View();
                }
                if (CheckID != null)
                {
                    ViewBag.ErrorIDMsg = "此ID已被註冊，請使用其它ID";
                    return View();
                }
              
                if (CheckPassword != null)
                {
                    ViewBag.ErrorPasswordMsg = "此密碼已被註冊，請使用其它密碼";
                    return View();
                }             
                if (CheckID == null && CheckAccout == null && CheckPassword == null)
                {
                    db.Login.Add(login);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            return View(login);
        }

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Login([Bind(Include = "ID,Account,Password,Keypass")] Login log)
        {
            {
                //if ((db.Login.Where(p => p.visitor == log.visitor).FirstOrDefault() != null) && (db.Login.Where(p => p.password == log.password).FirstOrDefault() != null))
                //{
                //    return RedirectToAction("Index", "PatientLists");
                //}
                //else
                //{
                //    ViewBag.Msg = "登入失敗...";
                //    return View();
                //}
            }
            var user = db.Login.Where(x => x.Account == log.Account && x.Password == log.Password).FirstOrDefault();

            if (user == null)
            {
                //ModelState.AddModelError("", "無效的帳號或密碼。");
                ViewBag.Msg = "帳號或密碼錯誤";
                return View();
            }
            else
            {
                //Patient patient = db.Patient.Find();
                Session["NameAccount"] = log.Account;

                var ticket = new FormsAuthenticationTicket(
                    version: 1,
                    name: user.Account.ToString(), //可以放使用者Id
                    issueDate: DateTime.UtcNow, //現在UTC時間
                    expiration: DateTime.UtcNow.AddMinutes(60), //Cookie有效時間=現在時間往後+30分鐘
                    isPersistent: true, // 是否要記住我 true or false
                    userData: user.Account.ToString(), //可以放使用者角色名稱,UserData 則是放使用者資料的 ID，而 FormsAuthenticationTicket 現在就不會存放使用者的角色資料，
                    cookiePath: FormsAuthentication.FormsCookiePath);

                var encryptedTicket = FormsAuthentication.Encrypt(ticket); //把驗證的表單加密
                var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
                Response.Cookies.Add(cookie);
                return RedirectToAction("loginhome", "Patients");
            }
        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();

            //清除所有的 session
            Session.RemoveAll();

            //建立一個同名的 Cookie 來覆蓋原本的 Cookie
            HttpCookie cookie1 = new HttpCookie(FormsAuthentication.FormsCookieName, "");
            cookie1.Expires = DateTime.Now.AddYears(-1);
            Response.Cookies.Add(cookie1);

            //建立 ASP.NET 的 Session Cookie 同樣是為了覆蓋
            HttpCookie cookie2 = new HttpCookie("ASP.NET_SessionId", "");
            cookie2.Expires = DateTime.Now.AddYears(-1);
            Response.Cookies.Add(cookie2);
            Session["NameAccount"] = "";
            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public ActionResult ResetPassword()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ResetPassword(FormCollection obj)
        {
            var TempAccount = obj["ResetAccout"];
            var CheckResetAccount = db.Login.Where(x => x.Account == TempAccount).FirstOrDefault();
            if (CheckResetAccount == null)
            {
                ViewBag.ResetAccountNull = "查無此帳號";
                return View();
            }
            var FindID = db.Login.Where(x => x.Account == TempAccount).FirstOrDefault().ID;
            if (obj["ResetKey"] == "123456")
            {
                Login login = db.Login.Find(FindID);
                login.ID = FindID;
                login.Password = obj["NewPassword"];
                login.Account = TempAccount;
                login.Keypass = "abc";
                db.Entry(login).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");

            }
            if (obj["ResetKey"] != "123456")
            {
                ViewBag.ResetMsg = "ResetKey錯誤";
                return View();
            }
            return View();
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Login login = db.Login.Find(id);
            if (login == null)
            {
                return HttpNotFound();
            }
            return View(login);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Account,Password,Keypass")] Login login)
        {
            if (ModelState.IsValid)
            {
                db.Entry(login).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(login);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Login login = db.Login.Find(id);
            if (login == null)
            {
                return HttpNotFound();
            }
            return View(login);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id, string delete_account)
        {
            Login login = db.Login.Find(id);
            if(delete_account !=null)
            {
                var delete_Accout = from m in db.Patient
                                     where m.Account == login.Account && m.DrName == login.DrName
                                     select m;
                foreach (var item in delete_Accout)
                {
                    db.Patient.Remove(item);
                    //db.SaveChanges();
                }            
                db.Login.Remove(login);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            var clean_PDA = from m in db.Patient
                                 where m.Account == login.Account && m.DrName == login.DrName
                                 select m;

            foreach(var item in clean_PDA)
            {
                db.Patient.Remove(item);
                //db.SaveChanges();
            }

            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
