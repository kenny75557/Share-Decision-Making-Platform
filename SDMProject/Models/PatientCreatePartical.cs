using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SDMProject.Models
{
    [MetadataType(typeof(PatientCreateMetadata))]
    public partial class Patient
    {
        public class PatientCreateMetadata
        {
            [Required]
            [Display(Name = "病歷號碼")]
            public string PatientID { get; set; }

            [Required(ErrorMessage = "請勿空白")]
            public string Name { get; set; }

            [Required(ErrorMessage = "年齡請介於0~200歲")]
            [Range(0,200)]
            public int Age { get; set; }

            [Required(ErrorMessage = "請勿空白")]
            public string DrName { get; set; }

        }
    }
}