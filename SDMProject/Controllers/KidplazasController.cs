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
    public class KidplazasController : Controller
    {
        private SDMdbEntities db = new SDMdbEntities();
        private int pageSize = 10;

        public ActionResult Index(int page =1)
        {
            int currentPage = page < 1 ? 1 : page;
            var patient = from m in db.Patient
                          where m.Form == "子宮頸癌"
                          select m;


            if (Session["NameAccount"] != null)
            {
                string strAccount = Session["NameAccount"].ToString();
                int intAccount = int.Parse(strAccount);
                Login login = db.Login.Find(intAccount);

                if (!String.IsNullOrEmpty(strAccount))
                {
                    patient = patient.Where(x => x.Account == login.Account);

                    var result = from m in db.Kidplaza join
                                 n in patient on m.PatientID equals n.PatientID
                                 select m;
                    result = result.OrderBy(c => c.ID);
                    var result_kidplaza = result.ToPagedList(currentPage, pageSize);
                    return View(result_kidplaza);
                }
            }
            if (Session["NameAccount"] == null)
            {
                return RedirectToAction("Login", "Logins");
            }


            return View(db.Kidplaza.ToList());
        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            TempData["kidplaza_Detail_Name"] = patient.Name;
            TempData["kidplaza_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["kidplaza_Detail_pID"] = patient.DiseaseType;
            TempData["kidplaza_Detail_Age"] = patient.Age;
            TempData["kidplaza_Detail_Gender"] = patient.Gender;
            TempData["kidplaza_Detail_Form"] = patient.Form;
            TempData["kidplaza_Detail_DrName"] = patient.DrName;

            Kidplaza kidplaza = db.Kidplaza.Find(id);
            if (kidplaza == null)
            {
                return HttpNotFound();
            }
            return View(kidplaza);
        }

        public ActionResult Kidplazas_Dr_QA(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            TempData["Kidplazas_QA_Dr_ID"] = kidplaza.ID;
            Patient patient = db.Patient.Find(id);
            TempData["Dr_kidplaza_Detail_Name"] = patient.Name;
            TempData["Dr_kidplaza_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["Dr_kidplaza_Detail_Age"] = patient.Age;
            TempData["Dr_kidplaza_Detail_Gender"] = patient.Gender;
            TempData["Dr_kidplaza_Detail_Form"] = patient.Form;
            TempData["Dr_kidplaza_Detail_DrName"] = patient.DrName;
            if (kidplaza == null)
            {
                return HttpNotFound();
            }
            return View(kidplaza);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Kidplazas_Dr_QA(FormCollection obj)
        {
            string strid = TempData["Kidplazas_QA_Dr_ID"].ToString();
            int id = int.Parse(strid);
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            Patient patient = db.Patient.Find(id);
            DateTime date = DateTime.Now;
            kidplaza.Result = obj["Dr_QA_result"];

            if (kidplaza.Dr_token == 0)
                kidplaza.Dr_token = 1;
            if (kidplaza.Dr_token == 1)
            {
                kidplaza.Ans1 = obj["Dr_QA"].ToString();
                kidplaza.Dr_token++;
                patient.CheckMsg = 0;
                kidplaza.Ans6 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidplaza.Dr_token == 2)
            {
                kidplaza.Ans2 = obj["Dr_QA"].ToString();
                kidplaza.Dr_token++;
                patient.CheckMsg = 0;
                kidplaza.Ans7 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidplaza.Dr_token == 3)
            {
                kidplaza.Ans3 = obj["Dr_QA"].ToString();
                kidplaza.Dr_token++;
                patient.CheckMsg = 0;
                kidplaza.Ans8 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidplaza.Dr_token == 4)
            {
                kidplaza.Ans4 = obj["Dr_QA"].ToString();
                kidplaza.Dr_token++;
                patient.CheckMsg = 0;
                kidplaza.Ans9 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidplaza.Dr_token == 5)
            {
                kidplaza.Ans5 = obj["Dr_QA"].ToString();
                kidplaza.Dr_token = 1;
                patient.CheckMsg = 0;
                kidplaza.Ans10 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            ////db.Entry(aircut).State = EntityState.Modified;
            //db.SaveChanges();
            return View(kidplaza);
        }

        [AllowAnonymous]
        public ActionResult Kidplazas_Patient_QA(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            TempData["Kidplazas_QA_Patient_ID"] = kidplaza.ID;

            Patient patient = db.Patient.Find(id);
            TempData["patient_kidplaza_Detail_Name"] = patient.Name;
            TempData["patient_kidplaza_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["patient_kidplaza_Detail_Age"] = patient.Age;
            TempData["patient_kidplaza_Detail_Gender"] = patient.Gender;
            TempData["patient_kidplaza_Detail_Form"] = patient.Form;
            TempData["patient_kidplaza_Detail_DrName"] = patient.DrName;
            if (kidplaza == null)
            {
                return HttpNotFound();
            }
            return View(kidplaza);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Kidplazas_Patient_QA(FormCollection obj)
        {
            string strid = TempData["Kidplazas_QA_Patient_ID"].ToString();
            int id = int.Parse(strid);
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            Patient patient = db.Patient.Find(id);
            DateTime date = DateTime.Now;

            if (kidplaza.Patient_token == 1)
            {
                kidplaza.Ques1 = obj["Patient_QA"].ToString();
                kidplaza.Patient_token++;
                patient.CheckMsg = 1;
                kidplaza.Ques6 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidplaza.Patient_token == 2)
            {
                kidplaza.Ques2 = obj["Patient_QA"].ToString();
                kidplaza.Patient_token++;
                patient.CheckMsg = 1;
                kidplaza.Ques7 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidplaza.Patient_token == 3)
            {
                kidplaza.Ques3 = obj["Patient_QA"].ToString();
                kidplaza.Patient_token++;
                patient.CheckMsg = 1;
                kidplaza.Ques8 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidplaza.Patient_token == 4)
            {
                kidplaza.Ques4 = obj["Patient_QA"].ToString();
                kidplaza.Patient_token++;
                patient.CheckMsg = 1;
                kidplaza.Ques9 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidplaza.Patient_token == 5)
            {
                kidplaza.Ques5 = obj["Patient_QA"].ToString();
                kidplaza.Patient_token = 1;
                patient.CheckMsg = 1;
                kidplaza.Ques10 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public ActionResult Tmp_QA_page()
        {
            ViewBag.Kidplazas_Tmp_QA_Msg = "問題已送出，請耐心等候醫生回復";
            return View();
        }

        [AllowAnonymous]
        public ActionResult printform(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            TempData["kidplazaprintform"] = kidplaza.ID;
            return View();
        }

        public ActionResult Create(Kidplaza kidplaza)
        {
            string tmpkidplaza = TempData["CheckKidplazasFormID"].ToString();
            int tmpkidplazaID;
            tmpkidplazaID = int.Parse(tmpkidplaza);
            Patient patient = db.Patient.Find(tmpkidplazaID);
            kidplaza.ID = tmpkidplazaID;
            kidplaza.PatientID = TempData["CheckKidplazasPatientID"].ToString();
            kidplaza.Pattern = "未填";
            kidplaza.Degree1 = -1;
            kidplaza.Degree2 = -1;
            kidplaza.Degree3 = -1;
            kidplaza.Degree4 = -1;
            kidplaza.Degree5 = -1;
            kidplaza.Degree6 = -1;
            kidplaza.Degree7 = -1;
            kidplaza.Degree8 = -1;
            kidplaza.Degree9 = -1;
            kidplaza.Cognition1 = "未填";
            kidplaza.Cognition2 = "未填";
            kidplaza.Cognition3 = "未填";
            kidplaza.Cognition4 = "未填";
            kidplaza.Cognition5 = "未填";
            kidplaza.Cognition6 = "未填";
            kidplaza.Decision = "未填";
            kidplaza.Determine = "未填";
            kidplaza.Text = "未填";
            kidplaza.Text2 = "未填";
            kidplaza.Text2Content = "未填";
            kidplaza.Token = 0;
            kidplaza.Dr_token = 1;
            kidplaza.Patient_token = 1;
            kidplaza.checkAnsTure = 0;
            kidplaza.checkAnsWrong = 0;
            db.Kidplaza.Add(kidplaza);
            db.SaveChanges();
            return RedirectToAction("Index", "Patients", new { pid = patient.PatientID });
            //return RedirectToAction("Index");
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            if (kidplaza == null)
            {
                return HttpNotFound();
            }
            return View(kidplaza);
        }

        [AllowAnonymous]
        public ActionResult check_ID(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Session["kidplazas_tmpid3"] = id;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult check_ID(FormCollection obj)
        {
            string str = Session["kidplazas_tmpid3"].ToString();
            int intid = int.Parse(str);
            Patient patient = db.Patient.Find(intid);
            if (obj["Check"] == patient.DiseaseType)
            {
                return RedirectToAction("KidplazasForm", new { id = intid });
            }
            else
            {
                ViewBag.ck4Msg = "輸入錯誤";
                return View();
            }
        }


        [AllowAnonymous]
        public ActionResult EditorViewResult()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult EditorViewResult(FormCollection obj)
        {
            string strID = TempData["checkKidplazaIDToken"].ToString();
            int intid = int.Parse(strID);
            string checkans = obj["check"];
            if (checkans == "ViewResult")
            {
                //TempData["TempKidplazasID"] = strID;
                return RedirectToAction("KidplazasFormResult", new { id = intid });
            }
            if (checkans == "EditForm")
            {
                Kidplaza kidplaza = db.Kidplaza.Find(intid);
                kidplaza.Token = 0;
                db.SaveChanges();
                return RedirectToAction("KidplazasForm", new { id = kidplaza.ID });
            }
            if (checkans == "communication")
            {
                return RedirectToAction("Kidplazas_Patient_QA", new { id = intid });
            }
            return View();
        }

        [AllowAnonymous]
        public ActionResult KidplazasForm(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            if (kidplaza.Token >= 1)
            {
                TempData["checkKidplazaIDToken"] = kidplaza.ID;
                return RedirectToAction("EditorViewResult");
            }
            if (kidplaza == null)
            {
                return HttpNotFound();
            }
            return View(kidplaza);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult KidplazasForm([Bind(Include = "ID,PatientID")] Kidplaza kidplaza, FormCollection obj)
        {
            //TempData["TempKidplazasID"] = kidplaza.ID;
            string title1 = obj["Treatment"];
            if (title1 != "")
            {
                kidplaza.Pattern = title1;
            }
            int tmp;
            string title2 = (obj["Step1"]);
            if (title2 != "")
            {
                tmp = int.Parse(title2);
                kidplaza.Degree1 = tmp;
            }
            string title3 = (obj["Step2"]);
            if (title3 != "")
            {
                tmp = int.Parse(title3);
                kidplaza.Degree2 = tmp;
            }
            string title4 = (obj["Step3"]);
            if (title4 != "")
            {
                tmp = int.Parse(title4);
                kidplaza.Degree3 = tmp;
            }
            string title5 = (obj["Step4"]);
            if (title4 != "")
            {
                tmp = int.Parse(title5);
                kidplaza.Degree4 = tmp;
            }
            string title6 = (obj["Step5"]);
            if (title5 != "")
            {
                tmp = int.Parse(title6);
                kidplaza.Degree5 = tmp;
            }
            string title7 = (obj["Step6"]);
            if (title6 != "")
            {
                tmp = int.Parse(title7);
                kidplaza.Degree6 = tmp;
            }
            string title8 = (obj["Step7"]);
            if (title7 != "")
            {
                tmp = int.Parse(title8);
                kidplaza.Degree7 = tmp;
            }
            string title9 = (obj["Step8"]);
            if (title8 != "")
            {
                tmp = int.Parse(title9);
                kidplaza.Degree8 = tmp;
            }
            string title10 = (obj["Step9"]);
            if (title9 != "")
            {
                tmp = int.Parse(title10);
                kidplaza.Degree9 = tmp;
            }
            string title11 = obj["Cognition1"];
            if (title11 != "")
            {
                kidplaza.Cognition1 = title11;
            }
            string title12 = obj["Cognition2"];
            if (title12 != "")
            {
                kidplaza.Cognition2 = title12;
            }
            string title13 = obj["Cognition3"];
            if (title13 != "")
            {
                kidplaza.Cognition3 = title13;
            }
            string title14 = obj["Cognition4"];
            if (title14 != "")
            {
                kidplaza.Cognition4 = title14;
            }
            string title15 = obj["Cognition5"];
            if (title15 != "")
            {
                kidplaza.Cognition5 = title15;
            }
            string title16 = obj["Cognition6"];
            if (title16 != "")
            {
                kidplaza.Cognition6 = title16;
            }
            string title17 = obj["Decision"];
            if (title17 != "")
            {
                kidplaza.Decision = title17;
            }
            string title18 = obj["Determine"];
            if (title18 != "")
            {
                kidplaza.Determine = title18;
            }
            string title19 = obj["Content01"];
            if (title19 != "")
            {
                kidplaza.Text = title19;
            }
            string title20 = obj["Content02"];
            if (title20 != "")
            {
                kidplaza.Text2 = title20;
            }
            string title21 = obj["Text2Content"];
            if (title21 != "")
            {
                kidplaza.Text2Content = title21;
            }
            kidplaza.Token++;
            Patient patient = db.Patient.Find(kidplaza.ID);
            patient.CheckFinish = 1;
            DateTime date = DateTime.Now;
            if (kidplaza.Text != null)
            {
                patient.CheckMsg = 1;
                kidplaza.Ques1 = kidplaza.Text;
                kidplaza.Ques6 = date.ToShortDateString();
                kidplaza.Patient_token = 2;
            }
            if (kidplaza.Text2 != null)
            {
                patient.CheckMsg = 1;
                kidplaza.Ques1 = kidplaza.Text2;
                kidplaza.Patient_token = 2;
            }
            if (kidplaza.Text2 == null && kidplaza.Text == null)
            {
                kidplaza.Patient_token = 1;
            }
            db.Entry(kidplaza).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("KidplazasFormResult", new { id = kidplaza.ID });
        }

        [AllowAnonymous]
        public ActionResult KidplazasFormResult(int? id)
        {
            //用tempData 傳一次性ID
            //string use_0 = TempData["TempKidplazasID"].ToString();
            //int IntID = int.Parse(use_0);
            //aircutList.PatientID = TempData["TempAircutPatientID"].ToString();
            Kidplaza kidplazaresult = db.Kidplaza.Find(id);
            kidplazaresult.checkAnsTure = 0;
            kidplazaresult.checkAnsWrong = 0;

            if (kidplazaresult.Cognition1 == "對")
            {
                kidplazaresult.checkAnsTure++;
                TempData["right1"] = "答案正確！";
                TempData["question1"] = "1.接受手術治療，傷口會疼痛，復原需要時間。";
            }
            if (kidplazaresult.Cognition1 == "不對" || kidplazaresult.Cognition1 == "不確定")
            {
                kidplazaresult.checkAnsWrong++;
                TempData["wrong1"] = "答案錯誤！";
                TempData["question1"] = "1.接受手術治療，傷口會疼痛，復原需要時間。正確答案：對";
            }
            if (kidplazaresult.Cognition2 == "對")
            {
                kidplazaresult.checkAnsTure++;
                TempData["right2"] = "答案正確！";
                TempData["question2"] = "2.接受放射治療的效果等同手術治療，雖然沒有割除腫瘤，但陰道會乾澀且影響性生活。";
            }
            if (kidplazaresult.Cognition2 == "不對" || kidplazaresult.Cognition2 == "不確定")
            {
                kidplazaresult.checkAnsWrong++;
                TempData["wrong2"] = "答案錯誤！";
                TempData["question2"] = "2.接受放射治療的效果等同手術治療，雖然沒有割除腫瘤，但陰道會乾澀且影響性生活。正確答案：對";
            }
            if (kidplazaresult.Cognition3 == "對")
            {
                kidplazaresult.checkAnsTure++;
                TempData["right3"] = "答案正確！";
                TempData["question3"] = "3.接受放射治療，卵巢亦有可能遭受輻射傷害。";
            }
            if (kidplazaresult.Cognition3 == "不對" || kidplazaresult.Cognition3 == "不確定")
            {
                kidplazaresult.checkAnsWrong++;
                TempData["wrong3"] = "答案錯誤！";
                TempData["question3"] = "3.接受放射治療，卵巢亦有可能遭受輻射傷害。正確答案：對";
            }
            if (kidplazaresult.Cognition4 == "對")
            {
                kidplazaresult.checkAnsTure++;
                TempData["right4"] = "答案正確！";
                TempData["question4"] = "4.進行手術治療之後，有可能產生暫時性或慢性膀胱與腸道功能障礙。";
            }
            if (kidplazaresult.Cognition4 == "不對" || kidplazaresult.Cognition4 == "不確定")
            {
                kidplazaresult.checkAnsWrong++;
                TempData["wrong4"] = "答案錯誤！";
                TempData["question4"] = "4.進行手術治療之後，有可能產生暫時性或慢性膀胱與腸道功能障礙。正確答案：對";
            }
            if (kidplazaresult.Cognition5 == "對")
            {
                kidplazaresult.checkAnsTure++;
                TempData["right5"] = "答案正確！";
                TempData["question5"] = "5.進行骨盆腔淋巴廓清手術之後，有可能發生淋巴水腫的副作用。";
            }
            if (kidplazaresult.Cognition5 == "不對" || kidplazaresult.Cognition5 == "不確定")
            {
                kidplazaresult.checkAnsWrong++;
                TempData["wrong5"] = "答案錯誤！";
                TempData["question5"] = "5.進行骨盆腔淋巴廓清手術之後，有可能發生淋巴水腫的副作用。正確答案：對";
            }
            if (kidplazaresult.Cognition6 == "對")
            {
                kidplazaresult.checkAnsTure++;
                TempData["right6"] = "答案正確！";
                TempData["question6"] = "6.接受放射治療，我必須分階段，經過至少 5 次的治療。";
            }
            if (kidplazaresult.Cognition6 == "不對" || kidplazaresult.Cognition6 == "不確定")
            {
                kidplazaresult.checkAnsWrong++;
                TempData["wrong6"] = "答案錯誤！";
                TempData["question6"] = "6.接受放射治療，我必須分階段，經過至少 5 次的治療。正確答案：對";
            }
            db.SaveChanges();
            return View(kidplazaresult);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            if (kidplaza == null)
            {
                return HttpNotFound();
            }
            return View(kidplaza);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Kidplaza kidplaza = db.Kidplaza.Find(id);
            TempData["KidplzazFormDeleteID"] = kidplaza.ID;
            db.Kidplaza.Remove(kidplaza);
            db.SaveChanges();
            return RedirectToAction("FormToPatientDelete", "Patients");
        }

        public ActionResult Patient_Delete()
        {
            var strID = TempData["DeleteKidplaza"].ToString();
            int intID = int.Parse(strID);
            var checkUser = db.Kidplaza.Where(x => x.ID == intID).FirstOrDefault();
            if (checkUser == null)
            {
                return RedirectToAction("Index", "Patients");
            }
            Kidplaza kidplaza = db.Kidplaza.Find(intID);
            db.Kidplaza.Remove(kidplaza);
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