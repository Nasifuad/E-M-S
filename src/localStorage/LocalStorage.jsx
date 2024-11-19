const employee = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    tasks: [
      "Prepare project report",
      "Update client on project status",
      "Review team's performance",
      "Organize team meeting",
      "Finalize budget estimates",
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    tasks: [
      "Design homepage layout",
      "Fix CSS styling issues",
      "Optimize website performance",
      "Update UI components",
      "Implement accessibility features",
    ],
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    tasks: [
      "Create database schema",
      "Write backend API for user authentication",
      "Integrate payment gateway",
      "Conduct code reviews",
      "Monitor server performance",
    ],
  },
  {
    id: 4,
    name: "Diana Lee",
    email: "diana.lee@example.com",
    tasks: [
      "Develop marketing strategy",
      "Run social media campaigns",
      "Analyze campaign performance",
      "Create content calendar",
      "Collaborate with design team",
    ],
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan.brown@example.com",
    tasks: [
      "Prepare sales pitch",
      "Identify potential leads",
      "Follow up with clients",
      "Update CRM system",
      "Negotiate contracts",
    ],
  },
];
const admin = [
  {
    id: 101,
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
    permissions: [
      "manage_users",
      "assign_tasks",
      "generate_reports",
      "view_all_data",
      "manage_settings",
    ],
  },
];

export const SetLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const GetLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem("employee"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  console.log(employeeData, adminData);
};
