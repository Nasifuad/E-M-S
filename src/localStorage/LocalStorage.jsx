const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "123",
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
    password: "123",
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
    password: "123",
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
    password: "123",
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
    password: "123",
    tasks: [
      "Prepare sales pitch",
      "Identify potential leads",
      "Follow up with clients",
      "Update CRM system",
      "Negotiate contracts",
    ],
  },
];

export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
};
export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  return { employees };
};
