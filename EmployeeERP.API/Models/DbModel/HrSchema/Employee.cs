using System.ComponentModel.DataAnnotations;

namespace EmployeeERP.API.Models.DbModel.HrSchema
{
    public class Employee : BaseModel
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string position { get; set; }

        public override void updateData( object input)
        {
            var data = (Employee)input;
            firstName = data.firstName;
            lastName = data.lastName;
            email = data.email;
            position = data.position;

            base.updateData(input);
        }
    }
}
