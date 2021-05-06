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
    public class KidneysController : Controller
    {
        private SDMdbEntities db = new SDMdbEntities();
        private int pageSize = 10;

        public ActionResult Index(int page = 1)
        {
            int currentPage = page < 1 ? 1 : page;
            var patient = from m in db.Patient
                          where m.Form == "慢性腎臟疾病"
                          select m;

            if (Session["NameAccount"] != null)
            {
                string strAccount = Session["NameAccount"].ToString();
                int intAccount = int.Parse(strAccount);
                Login login = db.Login.Find(intAccount);

                if (!String.IsNullOrEmpty(strAccount))
                {
                    patient = patient.Where(x => x.Account == login.Account);

                    var result = from m in db.Kidney join                               
                                 n in patient on m.PatientID equals n.PatientID
                                 select m;
                    result = result.OrderBy(c => c.ID);
                    var result_kidney = result.ToPagedList(currentPage, pageSize);
                    return View(result_kidney);
                }
            }
            if (Session["NameAccount"] == null)
            {
                return RedirectToAction("Login", "Logins");
            }

            return View(db.Kidney.ToList());
        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Patient patient = db.Patient.Find(id);
            TempData["kidney_Detail_Name"] = patient.Name;
            TempData["kidney_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["kidney_Detail_pID"] = patient.DiseaseType;
            TempData["kidney_Detail_Age"] = patient.Age;
            TempData["kidney_Detail_Gender"] = patient.Gender;
            TempData["kidney_Detail_Form"] = patient.Form;
            TempData["kidney_Detail_DrName"] = patient.DrName;
            Kidney kidney = db.Kidney.Find(id);

            if (kidney == null)
            {
                return HttpNotFound();
            }
            return View(kidney);
        }

        public ActionResult Kidneys_Dr_QA(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidney kidney = db.Kidney.Find(id);
            TempData["kidneysQA_Dr_ID"] = kidney.ID;
            Patient patient = db.Patient.Find(id);
            TempData["Dr_kidney_Detail_Name"] = patient.Name;
            TempData["Dr_kidney_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["Dr_kidney_Detail_Age"] = patient.Age;
            TempData["Dr_kidney_Detail_Gender"] = patient.Gender;
            TempData["Dr_kidney_Detail_Form"] = patient.Form;
            TempData["Dr_kidney_Detail_DrName"] = patient.DrName;
            if (kidney == null)
            {
                return HttpNotFound();
            }
            return View(kidney);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Kidneys_Dr_QA(FormCollection obj)
        {
            string strid = TempData["kidneysQA_Dr_ID"].ToString();
            int id = int.Parse(strid);
            Kidney kidney = db.Kidney.Find(id);
            Patient patient = db.Patient.Find(id);
            DateTime date = DateTime.Now;
            kidney.Result = obj["Dr_QA_result"];

            if (kidney.Dr_token == 0)
                kidney.Dr_token = 1;
            if (kidney.Dr_token == 1)
            {
                kidney.Ans1 = obj["Dr_QA"].ToString();
                kidney.Dr_token++;
                patient.CheckMsg = 0;
                kidney.Ans6 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidney.Dr_token == 2)
            {
                kidney.Ans2 = obj["Dr_QA"].ToString();
                kidney.Dr_token++;
                patient.CheckMsg = 0;
                kidney.Ans7 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidney.Dr_token == 3)
            {
                kidney.Ans3 = obj["Dr_QA"].ToString();
                kidney.Dr_token++;
                patient.CheckMsg = 0;
                kidney.Ans8 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidney.Dr_token == 4)
            {
                kidney.Ans4 = obj["Dr_QA"].ToString();
                kidney.Dr_token++;
                patient.CheckMsg = 0;
                kidney.Ans9 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            if (kidney.Dr_token == 5)
            {
                kidney.Ans4 = obj["Dr_QA"].ToString();
                kidney.Dr_token = 1;
                patient.CheckMsg = 0;
                kidney.Ans10 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Index", "Patients");
            }
            ////db.Entry(aircut).State = EntityState.Modified;
            //db.SaveChanges();
            return View(kidney);
        }

        [AllowAnonymous]
        public ActionResult Kidneys_Patient_QA(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidney kidney = db.Kidney.Find(id);
            TempData["kidney_QA_Patient_ID"] = kidney.ID;

            Patient patient = db.Patient.Find(id);
            TempData["patient_kidney_Detail_Name"] = patient.Name;
            TempData["patient_kidney_Detail_Date"] = patient.Date.ToShortDateString();
            TempData["patient_kidney_Detail_Age"] = patient.Age;
            TempData["patient_kidney_Detail_Gender"] = patient.Gender;
            TempData["patient_kidney_Detail_Form"] = patient.Form;
            TempData["patient_kidney_Detail_DrName"] = patient.DrName;
            if (kidney == null)
                if (kidney == null)
                {
                    return HttpNotFound();
                }
            return View(kidney);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Kidneys_Patient_QA(FormCollection obj)
        {
            string strid = TempData["kidney_QA_Patient_ID"].ToString();
            int id = int.Parse(strid);
            Kidney kidney = db.Kidney.Find(id);
            Patient patient = db.Patient.Find(id);
            DateTime date = DateTime.Now;

            if (kidney.Patient_token == 1)
            {
                kidney.Ques1 = obj["Patient_QA"].ToString();
                kidney.Patient_token++;
                patient.CheckMsg = 1;
                kidney.Ques6 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidney.Patient_token == 2)
            {
                kidney.Ques2 = obj["Patient_QA"].ToString();
                kidney.Patient_token++;
                patient.CheckMsg = 1;
                kidney.Ques7 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidney.Patient_token == 3)
            {
                kidney.Ques3 = obj["Patient_QA"].ToString();
                kidney.Patient_token = 1;
                patient.CheckMsg = 1;
                kidney.Ques8 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidney.Patient_token == 4)
            {
                kidney.Ques4 = obj["Patient_QA"].ToString();
                kidney.Patient_token++;
                patient.CheckMsg = 1;
                kidney.Ques8 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            if (kidney.Patient_token == 5)
            {
                kidney.Ques5 = obj["Patient_QA"].ToString();
                kidney.Patient_token = 1;
                patient.CheckMsg = 1;
                kidney.Ques10 = date.ToShortDateString();
                db.SaveChanges();
                return RedirectToAction("Tmp_QA_page");
            }
            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public ActionResult Tmp_QA_page()
        {
            ViewBag.Kidney_Tmp_QA_Msg = "問題已送出，請耐心等候醫生回復";
            return View();
        }

        [AllowAnonymous]
        public ActionResult printform(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidney kidney = db.Kidney.Find(id);
            TempData["kidneyprintform"] = kidney.ID;
            return View();
        }

        public ActionResult Create(Kidney kidney)
        {
            string tmpKidney = TempData["CheckKidneyFormID"].ToString();
            int tmpKidneyID;
            tmpKidneyID = int.Parse(tmpKidney);
            Patient patient = db.Patient.Find(tmpKidneyID);
            kidney.ID = tmpKidneyID;
            kidney.PatientID = TempData["CheckKidneyPatientID"].ToString();
            kidney.Method = "未填";
            kidney.Degree1 = -1;
            kidney.Degree2 = -1;
            kidney.Degree3 = -1;
            kidney.Degree4 = -1;
            kidney.Degree5 = -1;
            kidney.Degree6 = -1;
            kidney.Cognition1 = "未填";
            kidney.Cognition2 = "未填";
            kidney.Cognition3 = "未填";
            kidney.Cognition4 = "未填";
            kidney.Cognition5 = "未填";
            kidney.Cognition6 = "未填";
            kidney.Cognition7 = "未填";
            kidney.Cognition8 = "未填";
            kidney.Cognition9 = "未填";
            kidney.Cognition10 = "未填";
            kidney.Yesno1 = "未填";
            kidney.Yesno2 = "未填";
            kidney.Yesno3 = "未填";
            kidney.Decision = "未填";
            kidney.Determine = "未填";
            kidney.Text = "未填";
            kidney.Token = 0;
            kidney.Dr_token = 1;
            kidney.Patient_token = 1;
            kidney.checkAnsTure = 0;
            kidney.checkAnsWrong = 0;
            db.Kidney.Add(kidney);
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
            Kidney kidney = db.Kidney.Find(id);
            if (kidney == null)
            {
                return HttpNotFound();
            }
            return View(kidney);
        }

        [AllowAnonymous]
        public ActionResult check_ID(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Session["kidney_tmpid1"] = id;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult check_ID(FormCollection obj)
        {
            string str = Session["kidney_tmpid1"].ToString();
            int intid = int.Parse(str);
            Patient patient = db.Patient.Find(intid);
            if (obj["Check"] == patient.DiseaseType)
            {
                return RedirectToAction("KidneyForm", new { id = intid });
            }
            else
            {
                ViewBag.ck3Msg = "輸入錯誤";
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
            string strID = TempData["checkKidneyIDToken"].ToString();
            int intid = int.Parse(strID);
            string checkans = obj["check"];
            if (checkans == "ViewResult")
            {
                //TempData["TempKidneyID"] = strID;
                return RedirectToAction("KidneyFormResult", new { id = intid });
            }
            if (checkans == "EditForm")
            {
                Kidney kidney = db.Kidney.Find(intid);
                kidney.Token = 0;
                db.SaveChanges();
                return RedirectToAction("KidneyForm", new { id = kidney.ID });
            }
            if (checkans == "communication")
            {
                return RedirectToAction("Kidneys_Patient_QA", new { id = intid });
            }
            return View();
        }

        [AllowAnonymous]
        public ActionResult KidneyForm(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidney kidney = db.Kidney.Find(id);
            if (kidney.Token >= 1)
            {
                TempData["checkKidneyIDToken"] = kidney.ID;
                return RedirectToAction("EditorViewResult");
            }
            if (kidney == null)
            {
                return HttpNotFound();
            }
            return View(kidney);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult KidneyForm([Bind(Include = "ID,PatientID")] Kidney kidney, FormCollection obj)
        {
            //TempData["TempKidneyID"] = kidney.ID;
            string title1 = obj["method"];
            if (title1 != "")
            {
                kidney.Method = title1;
            }
            int tmp;
            string title2 = (obj["Degree1"]);
            if (title2 != "")
            {
                tmp = int.Parse(title2);
                kidney.Degree1 = tmp;
            }
            string title3 = (obj["Degree2"]);
            if (title3 != "")
            {
                tmp = int.Parse(title3);
                kidney.Degree2 = tmp;
            }
            string title4 = (obj["Degree3"]);
            if (title4 != "")
            {
                tmp = int.Parse(title4);
                kidney.Degree3 = tmp;
            }
            string title5 = (obj["Degree4"]);
            if (title5 != "")
            {
                tmp = int.Parse(title5);
                kidney.Degree4 = tmp;
            }
            string title6 = (obj["Degree5"]);
            if (title6 != "")
            {
                tmp = int.Parse(title6);
                kidney.Degree5 = tmp;
            }
            string title7 = obj["Degree6"];
            if (title7 != "")
            {
                tmp = int.Parse(title7);
                kidney.Degree6 = tmp;
            }
            string title8 = obj["Cognition1"];
            if (title8 != "")
            {
                kidney.Cognition1 = title8;
            }
            string title9 = obj["Cognition2"];
            if (title9 != "")
            {
                kidney.Cognition2 = title9;
            }
            string title10 = obj["Cognition3"];
            if (title10 != "")
            {
                kidney.Cognition3 = title10;
            }
            string title11 = obj["Cognition4"];
            if (title11 != "")
            {
                kidney.Cognition4 = title11;
            }
            string title12 = obj["Cognition5"];
            if (title12 != "")
            {
                kidney.Cognition5 = title12;
            }
            string title13 = obj["Cognition6"];
            if (title13 != "")
            {
                kidney.Cognition6 = title13;
            }
            string title14 = obj["Cognition7"];
            if (title14 != "")
            {
                kidney.Cognition7 = title14;
            }
            string title15 = obj["Cognition8"];
            if (title15 != "")
            {
                kidney.Cognition8 = title15;
            }
            string title16 = obj["Cognition9"];
            if (title16 != "")
            {
                kidney.Cognition9 = title16;
            }
            string title17 = obj["Cognition10"];
            if (title17 != "")
            {
                kidney.Cognition10 = title17;
            }
            string title18 = obj["Yesno1"];
            if (title18 != "")
            {
                kidney.Yesno1 = title18;
            }
            string title19 = obj["Yesno2"];
            if (title19 != "")
            {
                kidney.Yesno2 = title19;
            }
            string title20 = obj["Yesno3"];
            if (title20 != "")
            {
                kidney.Yesno3 = title20;
            }
            string title21 = obj["Decision"];
            if (title21 != "")
            {
                kidney.Decision = title21;
            }
            string title22 = obj["Determine"];
            if (title22 != "")
            {
                kidney.Determine = title22;
            }
            string title23 = obj["Text"];
            if (title23 != "")
            {
                kidney.Text = title23;
            }
            kidney.Token++;
            Patient patient = db.Patient.Find(kidney.ID);
            patient.CheckFinish = 1;
            DateTime date = DateTime.Now;
            if (kidney.Text != null)
            {
                patient.CheckMsg = 1;
                kidney.Ques1 = kidney.Text;
                kidney.Ques6 = date.ToShortDateString();
                kidney.Patient_token = 2;
            }
            else
            {
                kidney.Patient_token = 1;
            }
            db.Entry(kidney).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("KidneyFormResult", new { id = kidney.ID });
        }

        [AllowAnonymous]
        public ActionResult KidneyFormResult(int? id)
        {
            //用tempData 傳一次性ID
            //string use_0 = TempData["TempKidneyID"].ToString();
            //int IntID = int.Parse(use_0);
            //aircutList.PatientID = TempData["TempAircutPatientID"].ToString();
            Kidney kidneyresult = db.Kidney.Find(id);
            kidneyresult.checkAnsTure = 0;
            kidneyresult.checkAnsWrong = 0;

            if (kidneyresult.Cognition1 == "是")
            {
                kidneyresult.checkAnsTure++;
                TempData["right1"] = "答案正確！";
                TempData["question1"] = "1.腹膜透析治療分為人工洗和自動洗。";
            }
            if (kidneyresult.Cognition1 == "否" || kidneyresult.Cognition1 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong1"] = "答案錯誤！";
                TempData["question1"] = "1.腹膜透析治療分為人工洗和自動洗。正確答案：是";
            }
            if (kidneyresult.Cognition2 == "是")
            {
                kidneyresult.checkAnsTure++;
                TempData["right2"] = "答案正確！";
                TempData["question2"] = "2.選擇人工洗治療一天需換液3 ~ 5次，每次約20 ~ 30分。";
            }
            if (kidneyresult.Cognition2 == "否" || kidneyresult.Cognition2 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong2"] = "答案錯誤！";
                TempData["question2"] = "2.選擇人工洗治療一天需換液3 ~ 5次，每次約20 ~ 30分。正確答案：是";
            }
            if (kidneyresult.Cognition3 == "是")
            {
                kidneyresult.checkAnsTure++;
                TempData["right3"] = "答案正確！";
                TempData["question3"] = "3.選擇自動洗治療一天只需上機一次，一次約8 ~ 10小時。";
            }
            if (kidneyresult.Cognition3 == "否" || kidneyresult.Cognition3 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong3"] = "答案錯誤！";
                TempData["question3"] = "3.選擇自動洗治療一天只需上機一次，一次約8 ~ 10小時。正確答案：是";
            }
            if (kidneyresult.Cognition4 == "是")
            {
                kidneyresult.checkAnsTure++;
                TempData["right4"] = "答案正確！";
                TempData["question4"] = "4.接受人工洗或自動洗治療可至國內外旅遊。";
            }
            if (kidneyresult.Cognition4 == "否" || kidneyresult.Cognition4 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong4"] = "答案錯誤！";
                TempData["question4"] = "4.接受人工洗或自動洗治療可至國內外旅遊。正確答案：是";
            }
            if (kidneyresult.Cognition5 == "是")
            {
                kidneyresult.checkAnsTure++;
                TempData["right5"] = "答案正確！";
                TempData["question5"] = "5.接受腹膜透析治療不限磷，需維持高蛋白質（1.2 ~ 1.5 gm/kg）。";
            }
            if (kidneyresult.Cognition5 == "否" || kidneyresult.Cognition5 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong5"] = "答案錯誤！";
                TempData["question5"] = "5.接受腹膜透析治療不限磷，需維持高蛋白質（1.2 ~ 1.5 gm/kg）。正確答案：是";
            }
            if (kidneyresult.Cognition6 == "否")
            {
                kidneyresult.checkAnsTure++;
                TempData["right6"] = "答案正確！";
                TempData["question6"] = "6.人工洗治療需要生活可獨立自理（矯正視力良好，可執行精細動作）或生活無法完全獨立自理有家人或外傭協助。";
            }
            if (kidneyresult.Cognition6 == "是" || kidneyresult.Cognition6 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong6"] = "答案錯誤！";
                TempData["question6"] = "6.人工洗治療需要生活可獨立自理（矯正視力良好，可執行精細動作）或生活無法完全獨立自理有家人或外傭協助。正確答案：否";
            }
            if (kidneyresult.Cognition7 == "否")
            {
                kidneyresult.checkAnsTure++;
                TempData["right7"] = "答案正確！";
                TempData["question7"] = "7.腹膜透析場所需要無菌室。";
            }
            if (kidneyresult.Cognition7 == "是" || kidneyresult.Cognition7 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong7"] = "答案錯誤！";
                TempData["question7"] = "7.腹膜透析場所需要無菌室。正確答案：否";
            }
            if (kidneyresult.Cognition8 == "是")
            {
                kidneyresult.checkAnsTure++;
                TempData["right8"] = "答案正確！";
                TempData["question8"] = "8.統計腹膜透析腹膜炎的感染途徑，最常見是「經導管內感染 transuluminal，30 ~ 40%」，主要來自未注意無菌技術及不當的操作技術所造成。";
            }
            if (kidneyresult.Cognition8 == "否" || kidneyresult.Cognition8 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong8"] = "答案錯誤！";
                TempData["question8"] = "8.統計腹膜透析腹膜炎的感染途徑，最常見是「經導管內感染 transuluminal，30 ~ 40%」，主要來自未注意無菌技術及不當的操作技術所造成。正確答案：是";
            }
            if (kidneyresult.Cognition9 == "否")
            {
                kidneyresult.checkAnsTure++;
                TempData["right9"] = "答案正確！";
                TempData["question9"] = "9.APD「自動洗」腹膜透析應該是居家透析治療的第一選擇。";
            }
            if (kidneyresult.Cognition9 == "是" || kidneyresult.Cognition9 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong9"] = "答案錯誤！";
                TempData["question9"] = "9.APD「自動洗」腹膜透析應該是居家透析治療的第一選擇。正確答案：否";
            }
            if (kidneyresult.Cognition10 == "否")
            {
                kidneyresult.checkAnsTure++;
                TempData["right10"] = "答案正確！";
                TempData["question10"] = "10.CAPD「人工洗」腹膜透析應該是居家透析治療的第一選擇。";
            }
            if (kidneyresult.Cognition10 == "是" || kidneyresult.Cognition10 == "我不確定")
            {
                kidneyresult.checkAnsWrong++;
                TempData["wrong10"] = "答案錯誤！";
                TempData["question10"] = "10.CAPD「人工洗」腹膜透析應該是居家透析治療的第一選擇。正確答案：否";
            }
            db.SaveChanges();
            return View(kidneyresult);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kidney kidney = db.Kidney.Find(id);
            if (kidney == null)
            {
                return HttpNotFound();
            }
            return View(kidney);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Kidney kidney = db.Kidney.Find(id);
            TempData["KidneysFormDeleteID"] = kidney.ID;
            db.Kidney.Remove(kidney);
            db.SaveChanges();
            return RedirectToAction("FormToPatientDelete", "Patients");
        }

        public ActionResult Patient_Delete()
        {
            var strID = TempData["DeleteKidney"].ToString();
            int intID = int.Parse(strID);
            var checkUser = db.Kidney.Where(x => x.ID == intID).FirstOrDefault();
            if (checkUser == null)
            {
                return RedirectToAction("Index", "Patients");
            }
            Kidney kidney = db.Kidney.Find(intID);
            db.Kidney.Remove(kidney);
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