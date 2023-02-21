INSERT INTO department (department_name)
VALUES ("Human Resourses"),
       ("Sales"), 
       ("Marketing");

     
INSERT INTO role (role_title, role_salary, department_id)
VALUES ("Administrator", 100000.00, 1),
       ("Lead Sales Consultant", 80000.00, 2),    
       ("Lead Marketing Agent", 150000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Smith", 1, null),
       ("Jeremy", "Tyrel", 2, 1),   
       ("Jose", "Garcia", 3, 1);