using EmployeeERP.API.Models.DbModel.HrSchema;
using System.ComponentModel.DataAnnotations;

namespace EmployeeERP.API.Models.Dtos.HrDtos
{
    public class EmployeeDto:BaseDto
    {
        [Required(ErrorMessage = "FirstName Required"), MinLength(1, ErrorMessage = "FirstName cannot be empty")]
        public string firstName { get; set; }
        [Required(ErrorMessage = "LastName Required"), MinLength(1, ErrorMessage = "LastName cannot be empty")]
        public string lastName { get; set; }
        [Required(ErrorMessage = "Email Required"), MinLength(1, ErrorMessage = "Email cannot be empty"), EmailAddress(ErrorMessage = "Invalid email format")]
        public string email { get; set; }
        [Required(ErrorMessage = "Position Required"), MinLength(1, ErrorMessage = "Position cannot be empty")]
        public string position { get; set; }


        public static implicit operator Employee(EmployeeDto input)
            => new Employee()
            {
                email = input.email,
                firstName = input.firstName,
                lastName = input.lastName,
                id = input.id ?? 0,
                position = input.position,
            };
    }
}
