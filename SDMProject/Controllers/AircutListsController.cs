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
    public class AircutListsController : Controller
    {
        private SDMdbEntities db = new SDMdbEntities();
        private int pageSize = 10;

        public ActionResult Index(int page = 1)
        {
            int currentPage = page < 1 ? 1 : page;
            var patient = from m in db.Patient
                          where m.Form == "氣管造口術"
                          select m;


            if (Session["NameAccount"] != null)
            {
                string strAccount = Session["NameAccount"].ToString();
                int intAccount = int.Parse(strAccount);
                Login login = db.Login.Find(intAccount);

                if (!String.IsNullOrEmpty(strAccount))
                {
                    patient = patient.Where(x => x.Account == login.Account);

                    var result = from m in db.AircutList join                        
                                  n in patient on m.PatientID equals n.PatientID
                                 select m;
                    result = result.OrderBy(c => c.ID);
                    var result_Aircut = result.ToPagedList(currentPage, pageSize);
                    return View(result_Aircut);
                }
            }
            if (Session["NameAccount"] == null)
            {
                return RedirectToAction("Login", "Logins");
            }

            return View(db.AircutList.ToList());
        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            TempData["Detail_PatientID"] = patient.PatientID;
            TempData["Detail_Name"] = patient.Name;
            TempData["Detail_ID"] = patient.DiseaseType;
            TempData["Detail_Date"] = patient.Date.ToShortDateString();
            TempData["Detail_Age"] = patient.Age;
            TempData["Detail_Gender"] = patient.Gender;
            TempData["Detail_Form"] = patient.Form;
            TempData["Detail_DrName"] = patient.DrName;

            AircutList aircutList = db.AircutList.Find(id);
            if (aircutList == null)
            {
                return HttpNotFound();
            }
            return View(aircutList);
        }

        public ActionResult Aircut_Dr_QA(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AircutList aircutList = db.AircutList.Find(id);
            Patient patient = db.Patient.Find(id);
            TempData["QA_Dr_Detail_Name"] = patient.Name;
            TempData["QA_Dr_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["QA_Dr_Detail_Age"] = patient.Age;
            TempData["QA_Dr_Detail_Gender"] = patient.Gender;
            TempData["QA_Dr_Detail_Form"] = patient.Form;
            TempData["QA_Dr_Detail_DrName"] = patient.DrName;
            TempData["QA_Dr_ID"] = aircutList.ID;
            if (aircutList == null)
            {
                return HttpNotFound();
            }         
            return View(aircutList);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Aircut_Dr_QA(FormCollection obj)
        {
            string strid = TempData["QA_Dr_ID"].ToString();
            int id = int.Parse(strid);
            AircutList aircutList = db.AircutList.Find(id);
            Patient patient = db.Patient.Find(id);
            DateTime date = DateTime.Now;
            aircutList.Result = obj["Dr_QA_result"];

            if (aircutList.Dr_token == 0)
                aircutList.Dr_token = 1;
            if (aircutList.Dr_token == 1)
            {
                aircutList.Ans1 = obj["Dr_QA"].ToString();
                aircutList.Dr_token++;
                patient.CheckMsg = 0;
                aircutList.Ans6 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index","Patients");
            }
            if (aircutList.Dr_token == 2)
            {
                aircutList.Ans2 = obj["Dr_QA"].ToString();
                aircutList.Dr_token++;
                aircutList.Ans7 = date.ToShortDateString();
                patient.CheckMsg = 0;
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (aircutList.Dr_token == 3)
            {
                aircutList.Ans3 = obj["Dr_QA"].ToString();
                aircutList.Dr_token++;
                aircutList.Ans8 = date.ToShortDateString();
                patient.CheckMsg = 0;
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (aircutList.Dr_token == 4)
            {
                aircutList.Ans4 = obj["Dr_QA"].ToString();
                aircutList.Dr_token++;
                aircutList.Ans9 = date.ToShortDateString();
                patient.CheckMsg = 0;
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (aircutList.Dr_token == 5)
            {
                aircutList.Ans5 = obj["Dr_QA"].ToString();
                aircutList.Dr_token = 1;
                aircutList.Ans10 = date.ToShortDateString();
                patient.CheckMsg = 0;
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            return View(aircutList);
        }

        [AllowAnonymous]
        public ActionResult Aircut_Patient_QA(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AircutList aircutList = db.AircutList.Find(id);
            TempData["QA_Patient_ID"] = aircutList.ID;
            Patient patient = db.Patient.Find(id);
            TempData["QA_patient_Detail_Name"] = patient.Name;
            TempData["QA_patient_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["QA_patient_Detail_Age"] = patient.Age;
            TempData["QA_patient_Detail_Gender"] = patient.Gender;
            TempData["QA_patient_Detail_Form"] = patient.Form;
            TempData["QA_patient_Detail_DrName"] = patient.DrName;

            if (aircutList == null)
            {
                return HttpNotFound();
            }
            return View(aircutList);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Aircut_Patient_QA(FormCollection obj)
        {
            string strid = TempData["QA_Patient_ID"].ToString();
            int id = int.Parse(strid);
            AircutList aircutList = db.AircutList.Find(id);
            Patient patient = db.Patient.Find(id);
            DateTime date = DateTime.Now;

            if (aircutList.Patient_token == 1)
            {
                aircutList.Ques1 = obj["Patient_QA"].ToString();
                aircutList.Patient_token++;
                patient.CheckMsg = 1;
                aircutList.Ques6 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (aircutList.Patient_token == 2)
            {
                aircutList.Ques2 = obj["Patient_QA"].ToString();
                aircutList.Patient_token++;
                patient.CheckMsg = 1;
                aircutList.Ques7 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (aircutList.Patient_token == 3)
            {
                aircutList.Ques3 = obj["Patient_QA"].ToString();
                patient.CheckMsg = 1;
                aircutList.Patient_token++;
                aircutList.Ques8 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (aircutList.Patient_token == 4)
            {
                aircutList.Ques4 = obj["Patient_QA"].ToString();
                patient.CheckMsg = 1;
                aircutList.Patient_token++;
                aircutList.Ques9 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (aircutList.Patient_token == 5)
            {
                aircutList.Ques5 = obj["Patient_QA"].ToString();
                patient.CheckMsg = 1;
                aircutList.Patient_token = 1;
                aircutList.Ques10 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public ActionResult Tmp_QA_page()
        {
            ViewBag.Tmp_QA_Msg = "問題已送出，請耐心等候醫生回復";
            return View();
        }

        [AllowAnonymous]
        public ActionResult printform(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AircutList aircutList = db.AircutList.Find(id);
            TempData["aircutprintform"] = aircutList.ID;
            return View();
        }

        public ActionResult Create(AircutList aircut)
        {
            string tmp = TempData["CheckAircutFormID"].ToString();
            int tmpID;
            tmpID = int.Parse(tmp);
            Patient patient = db.Patient.Find(tmpID);
            aircut.ID = tmpID;
            aircut.PatientID = TempData["CheckAircutPatientID"].ToString();
            aircut.Method = "未填";
            aircut.Degree1 = -1;
            aircut.Degree2 = -1;
            aircut.Degree3 = -1;
            aircut.Degree4 = -1;
            aircut.Degree5 = -1;
            aircut.Cognition1 = "未填";
            aircut.Cognition2 = "未填";
            aircut.Cognition3 = "未填";
            aircut.Cognition4 = "未填";
            aircut.Cognition5 = "未填";
            aircut.Yesno1 = "未填";
            aircut.Yesno2 = "未填";
            aircut.Yesno3 = "未填";
            aircut.Decision = "未填";
            aircut.Determine = "未填";
            aircut.Text = "未填";
            aircut.Token = 0;
            aircut.Dr_token = 1;
            aircut.Patient_token = 1;
            aircut.checkAnsTure = 0;
            aircut.checkAnsWrong = 0;
            db.AircutList.Add(aircut);
            db.SaveChanges();
            return RedirectToAction("Index", "Patients", new { pid = patient.PatientID });
            //return RedirectToAction("Index");
        }

        [AllowAnonymous]
        public ActionResult EditorViewResult()
        {
            return View();
        }


        [AllowAnonymous]
        public ActionResult check_ID(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Session["Air_tmpid"] = id;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult check_ID(FormCollection obj)
        {
            string str = Session["Air_tmpid"].ToString();
            int intid = int.Parse(str);
            Patient patient = db.Patient.Find(intid);
            if (obj["Check"] == patient.DiseaseType)
            {
                return RedirectToAction( "AircutForm", new { id = intid });            
            }
            else
            {
                ViewBag.ck2Msg = "輸入錯誤";
                return View();
            }        
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult EditorViewResult(FormCollection obj)
        {
            string strID = TempData["checkaircutIDToken"].ToString();
            int intid = int.Parse(strID);
            string checkans = obj["check"];
            if (checkans == "ViewResult")
            {
                //TempData["TempAircutID"] = strID;
                return RedirectToAction("AircutFormResult", new { id = intid });
            }
            if (checkans == "EditForm")
            {
                AircutList aircutList = db.AircutList.Find(intid);
                aircutList.Token = 0;
                db.SaveChanges();
                return RedirectToAction("AircutForm", new { id = aircutList.ID });
            }
            if (checkans == "communication")
            {
                return RedirectToAction("Aircut_Patient_QA", new { id = intid });
            }
            return View();
        }

        [AllowAnonymous]
        public ActionResult AircutForm(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AircutList aircutList = db.AircutList.Find(id);
            if (aircutList.Token >= 1)
            {
                TempData["checkaircutIDToken"] = aircutList.ID;
                return RedirectToAction("EditorViewResult");
            }
            if (aircutList == null)
            {
                return HttpNotFound();
            }
            return View(aircutList);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult AircutForm([Bind(Include = "ID,PatientID,Method,Degree1,Degree2,Degree3,Degree4,Degree5,Cognition1,Cognition2,Cognition3,Cognition4,Cognition5,Yesno1,Yesno2,Yesno3,Decision,Determine,Text")] AircutList aircutList, FormCollection obj)
        {
            //TempData["TempAircutID"] = aircutList.ID;
            string title1 = obj["Way"];
            if (title1 != null)
            {
                aircutList.Method = title1;
            }
            int tmp;
            string title2 = (obj["degree1"]);
            if (title2 == null)
            {
                aircutList.Degree1 = -1;
            }
            string title3 = (obj["degree2"]);
            if (title3 != null)
            {
                tmp = int.Parse(title3);
                aircutList.Degree2 = tmp;
            }
            string title4 = (obj["degree3"]);
            if (title4 != null)
            {
                tmp = int.Parse(title4);
                aircutList.Degree3 = tmp;
            }
            string title5 = (obj["degree4"]);
            if (title5 != null)
            {
                tmp = int.Parse(title5);
                aircutList.Degree4 = tmp;
            }
            string title6 = (obj["degree5"]);
            if (title6 != null)
            {
                tmp = int.Parse(title6);
                aircutList.Degree5 = tmp;
            }
            string title7 = obj["Cognition1"];
            if (title7 != null)
            {
                aircutList.Cognition1 = title7;
            }
            string title8 = obj["Cognition2"];
            if (title8 != null)
            {
                aircutList.Cognition2 = title8;
            }
            string title9 = obj["Cognition3"];
            if (title9 != null)
            {
                aircutList.Cognition3 = title9;
            }
            string title10 = obj["Cognition4"];
            if (title10 != null)
            {
                aircutList.Cognition4 = title10;
            }
            string title11 = obj["Cognition5"];
            if (title11 != null)
            {
                aircutList.Cognition5 = title11;
            }
            string title12 = obj["Yesno1"];
            if (title12 != null)
            {
                aircutList.Yesno1 = title12;
            }
            string title13 = obj["Yesno2"];
            if (title13 != null)
            {
                aircutList.Yesno2 = title13;
            }
            string title14 = obj["Yesno3"];
            if (title14 != null)
            {
                aircutList.Yesno3 = title14;
            }
            string title15 = obj["decision4"];
            if (title15 != null)
            {
                aircutList.Decision = title15;
            }
            string title16 = obj["determine"];
            if (title16 != null)
            {
                aircutList.Determine = title16;
            }
            string title17 = obj["Text"];
            if (title17 != null)
            {
                aircutList.Text = title17;
            }
            aircutList.Token++;
            Patient patient = db.Patient.Find(aircutList.ID);
            DateTime date = DateTime.Now;
            patient.CheckFinish = 1;
            if (aircutList.Text != null)
            {
                patient.CheckMsg = 1;
                aircutList.Ques1 = aircutList.Text;
                aircutList.Ques6 = date.ToShortDateString();
                aircutList.Patient_token = 2;
            }
            else
            {
                aircutList.Patient_token = 1;
            }
            db.Entry(aircutList).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("AircutFormResult", new { id = aircutList.ID });
        }

        [AllowAnonymous]
        public ActionResult AircutFormResult(int? id)
        {
            //用trmpData 傳一次性ID
            //string use_0 = TempData["TempAircutID"].ToString();
            //int IntID = int.Parse(use_0);
            //aircutList.PatientID = TempData["TempAircutPatientID"].ToString();
            AircutList aircutresult = db.AircutList.Find(id);
            aircutresult.checkAnsTure = 0;
            aircutresult.checkAnsWrong = 0;

            if (aircutresult.Cognition1 == "是")
            {
                aircutresult.checkAnsTure++;
                TempData["right1"] = "答案正確！";
                TempData["question1"] = "1.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口會增加住院天數？";
            }
            if (aircutresult.Cognition1 == "否" || aircutresult.Cognition1 == "我不確定")
            {
                aircutresult.checkAnsWrong++;
                TempData["wrong1"] = "答案錯誤！";
                TempData["question1"] = "1.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口會增加住院天數？正確答案：是";
            }
            if (aircutresult.Cognition2 == "否")
            {
                aircutresult.checkAnsTure++;
                TempData["right2"] = "答案正確！";
                TempData["question2"] = "2.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，病人的呼吸會較穩定？";
            }
            if (aircutresult.Cognition2 == "是" || aircutresult.Cognition2 == "我不確定")
            {
                aircutresult.checkAnsWrong++;
                TempData["wrong2"] = "答案錯誤！";
                TempData["question2"] = "2.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，病人的呼吸會較穩定？正確答案：否";
            }
            if (aircutresult.Cognition3 == "是")
            {
                aircutresult.checkAnsTure++;
                TempData["right3"] = "答案正確！";
                TempData["question3"] = "3.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，方式費用較高？";
            }
            if (aircutresult.Cognition3 == "否" || aircutresult.Cognition3 == "我不確定")
            {
                aircutresult.checkAnsWrong++;
                TempData["wrong3"] = "答案錯誤！";
                TempData["question3"] = "3.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，方式費用較高？正確答案：是";
            }
            if (aircutresult.Cognition4 == "是")
            {
                aircutresult.checkAnsTure++;
                TempData["right4"] = "答案正確！";
                TempData["question4"] = "4.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，病人平均存活率較高？";
            }
            if (aircutresult.Cognition4 == "否" || aircutresult.Cognition4 == "我不確定")
            {
                aircutresult.checkAnsWrong++;
                TempData["wrong4"] = "答案錯誤！";
                TempData["question4"] = "4.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，病人平均存活率較高？正確答案：是";
            }
            if (aircutresult.Cognition5 == "是")
            {
                aircutresult.checkAnsTure++;
                TempData["right5"] = "答案正確！";
                TempData["question5"] = "5.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，病人的呼吸狀態預後較好？";
            }
            if (aircutresult.Cognition5 == "否" || aircutresult.Cognition5 == "我不確定")
            {
                aircutresult.checkAnsWrong++;
                TempData["wrong5"] = "答案錯誤！";
                TempData["question5"] = "5.亞急性呼吸照護病房脫離呼吸器訓練治療合併氣切造口，病人的呼吸狀態預後較好？正確答案：是";
            }
            db.SaveChanges();
            return View(aircutresult);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AircutList aircutList = db.AircutList.Find(id);
            if (aircutList == null)
            {
                return HttpNotFound();
            }
            return View(aircutList);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            AircutList aircutList = db.AircutList.Find(id);
            TempData["AircutFormDeleteID"] = aircutList.ID;
            db.AircutList.Remove(aircutList);
            db.SaveChanges();
            return RedirectToAction("FormToPatientDelete", "Patients");
        }

        public ActionResult Patient_Delete()
        {
            var strID = TempData["DeleteAircutID"].ToString();
            int intID = int.Parse(strID);
            var checkUser = db.AircutList.Where(x => x.ID == intID).FirstOrDefault();
            if (checkUser == null)
            {
                return RedirectToAction("Index", "Patients");
            }
            AircutList aircutList = db.AircutList.Find(intID);
            db.AircutList.Remove(aircutList);
            db.SaveChanges();
            return RedirectToAction("Index", "Patients");
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