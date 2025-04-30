namespace EmployeeERP.API.Models.DbModel
{
    public class BaseModel
    {
        
        public int id { get; set; }
        public string owner { get; set; }
        public string modified_by { get; set; }
        public DateTime? creation { get; set; }
        public DateTime? modified { get; set; }
        public bool soft_delete { get; set; }

        
        public virtual void updateData (object input) 
        {

        }

    }
}
