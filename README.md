# EmployeeERP Project

This project includes:

- **Backend**: ASP.NET Core API (`EmployeeERP.API`)
- **Frontend**: Angular Dashboard (`EmployeeERP.Dashboard/hr_dashboard`)

---

## Option 2: Run Backend Using Docker

1. **Ensure Docker is running.**

2. **Open a terminal and navigate to the API directory:**

   ```bash
   cd EmployeeERP.API
   ```

3. **Build and run the Docker container:**

   ```bash
   docker build -t employeeerp-api .
   docker run -p 5000:80 employeeerp-api
   ```

---

## Running the Frontend (Angular Dashboard)

1. **Open a terminal.**

2. **Navigate to the Angular project directory:**

   ```bash
   cd EmployeeERP.Dashboard/hr_dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the Angular development server:**

   ```bash
   ng serve
   ```

5. **Open your browser and go to:**

   [http://localhost:4200](http://localhost:4200)

---

## Notes

- Ensure the backend is running before using the frontend.
- Modify the API base URLs in the frontend environment files if necessary (e.g., `environment.ts`).

---

Let me know if you'd like to include instructions for environment variables, database setup, or production deployment.
