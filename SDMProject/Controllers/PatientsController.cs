using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SDMProject.Models;
using PagedList;

namespace SDMProject.Controllers
{
    [Authorize]
    public class PatientsController : Controller
    {
        private SDMdbEntities db = new SDMdbEntities();
        private int pageSize = 10;
       
        public ActionResult loginhome()
        {
            return View();
        }

        public ActionResult Index(string searchName, string searchForm, string FormType, string searchMsg,string pid, int page = 1)
        {
            
            var FormTypeList = new List<string>();  //以現有資料用下拉式選單來查找
            var FormTypeQry = from d in db.Patient
                              orderby d.Form
                              select d.Form;

            FormTypeList.AddRange(FormTypeQry.Distinct());
            ViewBag.FormType = new SelectList(FormTypeList);
            var patients = from m in db.Patient    //下面為用空白格以打字的方式查找
                           select m;

            if (Session["NameAccount"] != null)
            {
                string strAccount = Session["NameAccount"].ToString();
                int intAccount = int.Parse(strAccount);
                Login login = db.Login.Find(intAccount);
                if (!String.IsNullOrEmpty(strAccount))
                {
                    patients = patients.Where(z => z.Account == login.Account);
                }
            }
            if (Session["NameAccount"] == null)
            {
                return RedirectToAction("Login", "Logins");
            }

            if (!String.IsNullOrEmpty(pid))
            {
                patients = patients.Where(t => t.PatientID == pid);
            }

            if (!String.IsNullOrEmpty(searchMsg))
            {
                patients = patients.Where(w => w.CheckMsg == 1);
            }
                
            if (!String.IsNullOrEmpty(searchName))
            {
                patients = patients.Where(s => s.Name.Contains(searchName));
            }

            if (!String.IsNullOrEmpty(FormType))
            {
                patients = patients.Where(x => x.Form == FormType);
            }

            if (!String.IsNullOrEmpty(searchForm))
            {
                patients = patients.Where(y => y.Form.Contains(searchForm));
            }

            string strAccount2 = Session["NameAccount"].ToString();
            int intAccount2 = int.Parse(strAccount2);
            Login login2 = db.Login.Find(intAccount2);
            var check_empty = from c in db.Patient
                              select c;
            check_empty = check_empty.Where(a => a.Account == login2.Account);        
            if (check_empty == null)
            {
                return RedirectToAction("Create");
            }


            int currentPage = page < 1 ? 1 : page;
            patients = patients.OrderBy(c => c.ID);         
            var result = patients.ToPagedList(currentPage, pageSize);       
            return View(result);
        }

        public ActionResult Show_All_Patient(int? id , int page = 1)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            if (patient == null)
            {
                return HttpNotFound();
            }

            string str = patient.Name;

            var Find_All_List = from m in db.Patient    //下面為用空白格以打字的方式查找
                                where m.Name == str
                                select m;

            Find_All_List = Find_All_List.Where(s => s.PatientID.Contains(patient.PatientID));
            int currentPage = page < 1 ? 1 : page;
            Find_All_List = Find_All_List.OrderBy(c => c.ID);
            var result = Find_All_List.ToPagedList(currentPage, pageSize);
            return View(result);

          
            //return View(db.Patient.ToList());
        }

        public ActionResult Details(int? id)
        {
            //if (id == null)
            //{
            //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            //}
            //Patient patient = db.Patient.Find(id);
            //var ans = patient.Form;
            //ViewData["DetialAns"] = ans;
            //TempData["DetailCheckForm"] = patient.Form;
            //string url = Request.Url.ToString();
            //ViewData["GetUrl"] = url;
            //if (patient == null)
            //{
            //    return HttpNotFound();
            //}
            //return View(patient);

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            if (patient == null)
            {
                return HttpNotFound();
            }
            if (patient.Form == "氣管造口術")
            {
                return RedirectToAction("Details", "AircutLists", new { id = patient.ID });
            }
            if (patient.Form == "子宮頸癌")
            {
                return RedirectToAction("Details", "Kidplazas", new { id = patient.ID });
            }
            if (patient.Form == "慢性腎臟疾病")
            {
                return RedirectToAction("Details", "Kidneys", new { id = patient.ID });
            }
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DrName,PatientID,Name,Date,Age,DiseaseType")] Patient patient, FormCollection obj)
        {
            if (Session["NameAccount"] != null)
            {
                string strAccount = Session["NameAccount"].ToString();
                int intAccount = int.Parse(strAccount);
                Login login = db.Login.Find(intAccount);
                patient.DrName = login.DrName;
                patient.Account = login.Account;
            }
            if (Session["NameAccount"] == null)
            {
                return RedirectToAction("Login", "Logins");
            }
            patient.Gender = obj["CheckPatientGender"];
            patient.CheckMsg = 0;
            patient.CheckFinish = 0;
            
            var FormType = obj["CheckPatientForm"];
             patient.Form = FormType;
             db.Patient.Add(patient);
             db.SaveChanges();    

                if (patient.Form == "氣管造口術")
                {
                    TempData["CheckAircutFormID"] = patient.ID;
                    TempData["CheckAircutPatientID"] = patient.PatientID;
                    return RedirectToAction("Create", "AircutLists");
                }
                if (patient.Form == "子宮頸癌")
                {
                    TempData["CheckKidplazasFormID"] = patient.ID;
                    TempData["CheckKidplazasPatientID"] = patient.PatientID;
                    return RedirectToAction("Create", "Kidplazas");
                }
                if (patient.Form == "慢性腎臟疾病")
                {
                    TempData["CheckKidneyFormID"] = patient.ID;
                    TempData["CheckKidneyPatientID"] = patient.PatientID;
                    return RedirectToAction("Create", "Kidneys");
                }
            
            return View(patient);
        }

        public ActionResult PrintForm(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            if (patient == null)
            {
                return HttpNotFound();
            }
            if (patient.Form == "氣管造口術")
            {
                return RedirectToAction("printform", "AircutLists", new { id = patient.ID });
            }
            if (patient.Form == "子宮頸癌")
            {
                return RedirectToAction("printform", "Kidplazas", new { id = patient.ID });
            }
            if (patient.Form == "慢性腎臟疾病")
            {
                return RedirectToAction("printform", "Kidneys", new { id = patient.ID });
            }
            return View();
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            TempData["EditFormType"] = patient.Form;
            if (patient == null)
            {
                return HttpNotFound();
            }
            return View(patient);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,PatientID,Name,Date,Age,Gender,Form,Account,DrName,DiseaseType,CheckMsg,CheckFinish")] Patient patient)
        {
  
             db.Entry(patient).State = EntityState.Modified;
             db.SaveChanges();
             return RedirectToAction("Index");
              
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            if (patient == null)
            {
                return HttpNotFound();
            }
            return View(patient);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Patient patient = db.Patient.Find(id);
            Session["DeleteAlldataID"] = patient.ID;
            db.Patient.Remove(patient);
            db.SaveChanges();

            if (patient.Form == "氣管造口術")
            {
                TempData["DeleteAircutID"] = Session["DeleteAlldataID"];
                return RedirectToAction("Patient_Delete", "AircutLists");
            }

            if (patient.Form == "子宮頸癌")
            {
                TempData["DeleteKidplaza"] = Session["DeleteAlldataID"];
                return RedirectToAction("Patient_Delete", "Kidplazas");
            }

            if (patient.Form == "慢性腎臟疾病")
            {
                TempData["DeleteKidney"] = Session["DeleteAlldataID"];
                return RedirectToAction("Patient_Delete", "Kidneys");
            }
            return RedirectToAction("Index");
        }

        public ActionResult FormToPatientDelete()
        {
            if (TempData["AircutFormDeleteID"] != null)
            {
                TempData["CheckDeleteFormID"] = TempData["AircutFormDeleteID"];
                TempData["AircutFormDeleteID"] = null;
            }
            if (TempData["KidplzazFormDeleteID"] != null)
            {
                TempData["CheckDeleteFormID"] = TempData["KidplzazFormDeleteID"];
                TempData["KidplzazFormDeleteID"] = null;
            }
            if (TempData["KidneysFormDeleteID"] != null)
            {
                TempData["CheckDeleteFormID"] = TempData["KidneysFormDeleteID"];
                TempData["KidneysFormDeleteID"] = null;
            }
            var strID = TempData["CheckDeleteFormID"].ToString();
            int intID = int.Parse(strID);
            Patient patient = db.Patient.Find(intID);
            db.Patient.Remove(patient);
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