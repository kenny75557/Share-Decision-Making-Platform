using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SDMProject.Models
{
    [MetadataType(typeof(LoginMetadata))]
    public  partial class Login
    {
        public class LoginMetadata
        {
            [Required]
            [Display(Name = "ID")]    
            public int ID { get; set; }

            [Required(ErrorMessage = "欄位請勿空白，請至少輸入6位數字")]
            [Display(Name = "Account")]
            //[StringLength(20, MinimumLength = 6)]
            //[RegularExpression(@"^[0-9]{5,25}$")]
            public string Account { get; set; }

            [Required(ErrorMessage = "欄位請勿空白，請至少輸入1個英文和1個數字，密碼長度至少6位")]
            [Display(Name = "Password")]
            //[RegularExpression(@"^[A-Za-z0-9]{5,25}$")]
            [DataType(DataType.Password)]
            public string Password { get; set; }

            [Required(ErrorMessage = "欄位請勿空白")]
            [Display(Name = "PassKey")]
            [DataType(DataType.Password)]
            [RegularExpression(@"^abc",ErrorMessage = "驗證碼錯誤")]
            public string Keypass { get; set; }

            [Required(ErrorMessage = "欄位請勿空白")]     
            public string DrName { get; set; }
        }
    }
}