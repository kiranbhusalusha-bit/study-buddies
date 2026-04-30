DROP TABLE IF EXISTS Student_Subject;
DROP TABLE IF EXISTS Study_Requests;
DROP TABLE IF EXISTS Subjects;
DROP TABLE IF EXISTS Student_Programme;
DROP TABLE IF EXISTS Programme_Modules;
DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS Programmes;
DROP TABLE IF EXISTS Modules;
DROP TABLE IF EXISTS test_table;
DROP TABLE IF EXISTS dates;

CREATE TABLE test_table (
    id INT PRIMARY KEY,
    name VARCHAR(512) NOT NULL
);

INSERT INTO test_table VALUES
(1, 'Test One'),
(2, 'Test Two');

CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    note TEXT,
    course VARCHAR(100),
    study_year INT,
    picture VARCHAR(255),
    bio TEXT
);

INSERT INTO Students VALUES
(1, 'Aarav Sharma', NULL, 'Software Engineering', 1),
(2, 'Maya Patel', NULL, 'Computer Science', 2),
(3, 'Noah Williams', NULL, 'Web Development', 1),
(4, 'Sophia Khan', NULL, 'Databases', 3);

CREATE TABLE Subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

INSERT INTO Subjects (name) VALUES
('HTML'),
('JavaScript'),
('Databases'),
('Node.js');

CREATE TABLE Student_Subject (
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Students(id),
    FOREIGN KEY (subject_id) REFERENCES Subjects(id)
);

INSERT INTO Student_Subject VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 2),
(2, 4),
(3, 1),
(3, 4),
(4, 3);

CREATE TABLE Study_Requests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    subject_id INT NOT NULL,
    student_id INT NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES Subjects(id),
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

INSERT INTO Study_Requests (title, description, subject_id, student_id) VALUES
('Need help with JavaScript loops', 'I need help understanding for loops and arrays.', 2, 1),
('Database revision partner wanted', 'Looking for someone to revise SQL joins with.', 3, 2),
('HTML form practice', 'I want to practise creating HTML forms.', 1, 3);

CREATE TABLE Modules (
    code VARCHAR(10) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO Modules VALUES
('CMP020C101','Software Development 1'),
('CMP020C102','Computer Systems'),
('CMP020C103','Mathematics for Computer Science'),
('CMP020C104','Software Development 2'),
('CMP020C105','Computing and Society'),
('CMP020C106','Databases');

CREATE TABLE Programmes (
    id VARCHAR(8) PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO Programmes VALUES
('09UU0001','BSc Computer Science'),
('09UU0002','BEng Software Engineering');

CREATE TABLE Programme_Modules (
    programme VARCHAR(8) NOT NULL,
    module VARCHAR(10) NOT NULL,
    FOREIGN KEY (programme) REFERENCES Programmes(id),
    FOREIGN KEY (module) REFERENCES Modules(code)
);

INSERT INTO Programme_Modules VALUES
('09UU0001','CMP020C101'),
('09UU0001','CMP020C102'),
('09UU0001','CMP020C103'),
('09UU0001','CMP020C104'),
('09UU0001','CMP020C105'),
('09UU0001','CMP020C106'),
('09UU0002','CMP020C101'),
('09UU0002','CMP020C102'),
('09UU0002','CMP020C103'),
('09UU0002','CMP020C104'),
('09UU0002','CMP020C105'),
('09UU0002','CMP020C106');

CREATE TABLE Student_Programme (
    id INT,
    programme VARCHAR(8),
    FOREIGN KEY (id) REFERENCES Students(id),
    FOREIGN KEY (programme) REFERENCES Programmes(id)
);

INSERT INTO Student_Programme VALUES
(1,'09UU0002'),
(2,'09UU0001'),
(3,'09UU0001'),
(4,'09UU0001');

CREATE TABLE dates (
    date_id INT NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL,
    PRIMARY KEY (date_id)
);