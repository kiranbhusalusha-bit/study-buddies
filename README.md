# Study Buddies Project   
### CMP-N204-0: Software Engineering  

---

## Submitted by
- **Usha (A00027156)**
- **Niraj Kumar Sah (A00023606)**
- **Prasansa Senchuri (A00026066)**

**Module Leader:** Lisa Haskel  
**University:** University of Roehampton, London  
**Submission:** Sprint 2 – Lab Week 6  
**Project Title:** Study Buddies 


# Study Buddies - Sprint 1



## Project Overview

Study Buddies is a web service meant to help university students locate people to study with. Students can connect with other students who have similar academic interests, establish profiles, and identify the subjects they are studying. The application's goals are to lessen student isolation, enhance academic performance, and encourage collaborative learning.

The Software Engineering module's Sprint 1 (Proposal and Setup) work is contained in this repository.

---

## Group Name
**StudyBuddiesTeam**

## Group Members
- Usha
- Niraj
- Prasansa

---

## Sprint 1 Objectives

The main objectives of Sprint 1 are as listed below:

- Establish the project team and decide on roles and duties.
- Define and improve the project's concept and target audience. 
- Create a shared Docker development environment. 
- Create agile work procedures with a Kanban board
- Create the necessary documentation for Sprint 1.  

Instead of developing features, Sprint 1 prioritizes on planning,setup and documentation.

---

## Technology Stack

- Node.js
- Express.js
- Docker and Docker Compose
- Github(version control and project management)

---

## Project Structure

```text
study-buddies/
├── app/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
├── static/
│   └── test.html
├── db.js
├── index.js
├── Dockerfile
├── docker-compose.yml
├── .env
├── README.md
└── docs/

```

## Running the Project Using Docker

To run the project locally using Docker:
1. Clone the repository:
   git clone <repository-url>

2. Navigate into the project directory:
   cd study-buddies
3. Create a .env file in the root using env-sample as a guide.
   
4. Start the development environment:
   docker-compose up --build

5. Open a browser and go to:
   http://localhost:300
   
6. Access phpMyAdmin
   http://localhost:8081

If it is functioning, we can certainly see:

Study Buddies is running!

## Agile Project Management

During Sprint 1, agile methods are used. For managing work and monitor progress, the team makes best use of a GitHub Project Kanban board.

The following columns are part of the Kanban board:
- Backlog
- To Do
- In Progress
- Done

Throughout the sprint, Sprint 1 tasks like documentation, Docker settings, repository setup, and planning activities are monitored and updated.

## Sprint 1 Documentation

All Sprint 1 documentation is maintained in the docs/ folder in this repository:
- Code of Conduct
- Team Roles
- Personas
- Ethical Issues
- Meeting Notes

These documents are combined into a single PDF for Sprint 1 submission.

## Sprint 1 Status
At the conclusion of the first sprint, the project has succeeded in:
- A working atmosphere where everyone in the group can work and grow
- A well-defined project scope and target users
- Mutually agreed roles and guidelines for the team
- Evaluating ethical and user-centred issues
- Ability to go on to Sprint 2

---

# Study Buddies Project  
## Sprint 2 – Requirements and Specifications Document  
### CMP-N204-0: Software Engineering  

---

## Submitted by
- **Usha (A00027156)**
- **Niraj Kumar Sah (A00023606)**
- **Prasansa Senchuri (A00026066)**

**Module Leader:** Lisa Haskel  
**University:** University of Roehampton, London  
**Submission:** Sprint 2 – Lab Week 6  
**Project Title:** Study Buddies  

---

## Document Contents
- Project overview  
- User stories  
- Use case diagram  
- Wireframes  
- Activity diagrams  
- Optional artefacts (ERD, sequence diagrams)  
- Kanban Board Screenshot  
- GitHub Repository link  
- Task Board Link  
- Meeting records  
- References (IEEE style)  

---

# 1. Project Overview
Study Buddies is a web-based tool designed to help university students find compatible classmates for group work and study support. Students can browse study requests, create their own requests, build personalised profiles, and search for partners by subject or category. The platform promotes peer learning and academic collaboration.

The system will be built using **Node.js, Express, MySQL, Pug templates, and Docker**. GitHub supports project management and version control. Agile principles guide development, with iterative improvements and UML-based modelling for system behaviour.

---

# 2. User Stories

All user stories follow the GOV.UK format: *As a… I want… so that…*  
Each story includes acceptance criteria.

### **User Story 1 – Establish a Profile**
As a student, I want to create a Study Buddies profile so others can understand my skills and needs.

**Acceptance Criteria**
- I can enter my name, course, and year.  
- I can add subjects I can help with.  
- I can add subjects I need help with.  
- My profile is saved and accessible.

### **User Story 2 – Study Buddy List View**
As a student seeking help, I want to see a list of available study buddies so I can find partners quickly.

**Acceptance Criteria**
- I see a list of students with names and subjects.  
- I can click a student to view their full profile.

### **User Story 3 – View a Student’s Profile**
As a student, I want to view another student’s profile to check if they match my needs.

**Acceptance Criteria**
- I can view their subjects, availability, and bio.  
- I can return to the list.

### **User Story 4 – Search by Subject**
As a student needing help in a subject, I want to search by subject to find relevant partners.

**Acceptance Criteria**
- I can type or select a subject.  
- Results show only matching students.

### **User Story 5 – Create a Study Request Listing**
As a student needing help, I want to create a study request so others can offer support.

**Acceptance Criteria**
- I can enter a title, subject, and description.  
- My request appears in the list.

### **User Story 6 – View Study Request Details**
As a student wanting to help, I want to view full request details.

**Acceptance Criteria**
- I see the description, subject, and creator.

### **User Story 7 – Browse by Category/Tags**
As a student exploring options, I want to browse by tags or categories.

**Acceptance Criteria**
- I can click a tag or category.  
- I see matching profiles or listings.

### **User Story 8 – Send a Message**
As a student arranging a study session, I want to message another student.

**Acceptance Criteria**
- I can access a message interface.  
- I can type and send a message.  
- The other student receives it.  
- I can view my sent messages.

---

# 3. Use Case Diagram

## Actors
**Student** – the primary user who:
- Creates and maintains a profile  
- Browses other students  
- Sends messages  
- Creates and views study requests  

## Use Cases
- Create Profile  
- View List of Study Buddies  
- View Student Profile  
- Search by Subject  
- Browse by Category/Tags  
- Create Study Requests  
- View Study Request Details  
- Send Message  

## Use Case Relationships
- Student is linked to all use cases.  
- “View List of Study Buddies” leads to “View Student Profile”.  
- “Create Study Request” leads to “View Study Request Details”.  
- “Send Message” can start from a profile or a study request.

## System Boundary
All use cases are inside the *Study Buddies System* boundary.  
The Student actor is outside the boundary.

**Figure 1:** Use Case Diagram (insert image)

---

# 4. Sprint 2 Specification

Sprint 2 focused on refining requirements and preparing all documentation needed before development begins in Sprint 3.

## Objectives
- Refine project concept based on Sprint 1 feedback  
- Document user needs using user stories  
- Define system scope using a use case diagram  
- Identify main actor and system boundary  
- Create initial wireframes  
- Model system behaviour using activity diagrams  
- Prepare all specifications for Sprint 3  

---

## 4.2 Wireframes
Wireframes illustrate the main pages of the system.

### Home/Landing Page  
Key elements:
- Header with logo  
- Navigation links  
- Introductory text  
- Call-to-action buttons  
- Footer  

**Figure:** Home Page Wireframe

### Users List Page  
Key elements:
- Page title  
- Search bar  
- Filters  
- Student cards  
- Pagination  

**Figure:** Users List Wireframe

### Student Profile Page  
Key elements:
- Student details  
- Bio  
- Subjects (help with / need help with)  
- Availability  
- Send Message button  
- Back link  

**Figure:** Student Profile Wireframe

### Study Request List Page  
Key elements:
- Page title  
- Create Request button  
- Filters  
- Request cards  

**Figure:** Study Request List Wireframe

### Study Request Detail Page  
Key elements:
- Title  
- Subject  
- Description  
- Creator details  
- Send Message button  
- Back link  

**Figure:** Study Request Detail Wireframe

---

## 4.4 Activity Diagrams

### Search for Study Buddies  
Steps:
- Open list page  
- Enter subject  
- System retrieves and filters profiles  
- Display results  
- Select profile  
- Load profile page  

**Figure:** Activity Diagram – Search
![Alt text]()

### Create Study Request  
Steps:
- Open form  
- Enter details  
- Submit  
- Validate  
- Save  
- Confirm  
- Display updated list  

**Figure:** Activity Diagram – Create Request
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/d53e9363bfe6dad00cb4a998dcbae55ac75807d8/images/Wireframe4.png)


### View Study Request Details  
Steps:
- Open list  
- Select request  
- Retrieve details  
- Retrieve creator  
- Display full information  

**Figure:** Activity Diagram – View Request
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/0c5e1d5e7f008d88b9acdb45293bdc83419cae4a/images/Wireframe5.png)



---

## 4.5 Optional Artefacts

### Entity Relationship Diagram (ERD)
Entities:
- Student  
- Subject  
- Student_Subject  
- Study_Request  
- Message (future)  

Relationships:
- Student ↔ Subject (Many-to-Many)  
- Student → Study_Request (One-to-Many)  
- Student ↔ Student via Message (Many-to-Many)  

**Figure:** ERD Diagram
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/e2cd87a7b8250c537f620cff598fa364f125d325/images/erd1.drawio.png)



### Sequence Diagrams
- View Student Profile  
- Create Study Request  

**Figures:** 
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/e2cd87a7b8250c537f620cff598fa364f125d325/images/Sequence.png)
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/e2cd87a7b8250c537f620cff598fa364f125d325/images/Sequence2.png)


---

# 5. Kanban Board Screenshot

Sprint 2 tasks are managed using the GitHub Project Kanban board.

Columns:
- **Backlog** – not started  
- **Ready** – prepared for Sprint 2  
- **In Progress** – currently being worked on  
- **In Review** – awaiting review  
- **Done** – completed  

**Task Board Link:**  
https://github.com/users/kiranbhusalusha-bit/projects/4

**Figure:** Kanban Board Screenshot 
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/84851bea6d5468a961f417f2c1d0883fa0dfc94f/images/Screenshot%202026-03-05%20093826.png)

---

# 6. GitHub Repository Link
GitHub supports project management, version control, and collaboration.

Repository:  
https://github.com/kiranbhusalusha-bit/study-buddies

Contents:
- Scaffolding files  
- Custom README  
- Team contributions  
- Kanban board link  
- Uploaded diagrams  

---

# 7. Meeting Records

## Meeting 1 – Sprint 2 Planning  
**Date:** 12 Feb 2026  
**Facilitator:** Usha  
**Note taker:** Prasansa  
**Attendees:** Usha, Niraj, Prasansa  

### Roundtable Updates
- Usha: Reviewed Sprint 1 feedback  
- Niraj: Prepared backend planning  
- Prasansa: Ready for UI work  

### Discussion
- Clarified deliverables  
- Checked Kanban and GitHub  
- Discussed personas and ethics  
- Assigned documentation tasks  

### Actions
- Usha: Sequence diagrams, acceptance criteria  
- Niraj: ERD  
- Prasansa: Wireframes  
- All: Update Kanban  

---

## Meeting 2 – Mid Sprint Review  
**Date:** 19 Feb 2026  
**Facilitator:** Usha  
**Note taker:** Niraj  
**Attendees:** Usha, Niraj  

### Roundtable Updates
- Usha: User stories done, diagrams in progress  
- Niraj: ERD draft complete  

### Discussion
- Reviewed Sprint 1 feedback  
- Discussed formatting and figure numbering  
- Assigned remaining tasks  

### Actions
- Usha: Complete diagrams  
- Niraj: Finalise ERD  
- Prasansa: Improve wireframes  
- All: Review GitHub  

---

## Meeting 3 – Sprint 2 Wrap-Up  
**Date:** 26 Feb 2026  
**Facilitator:** Usha  
**Note taker:** Prasansa  
**Attendees:** All  

### Roundtable Updates
- Usha: Documentation complete  
- Niraj: Backend tasks added  
- Prasansa: Wireframes aligned  

### Discussion
- Reviewed all Sprint 2 artefacts  
- Ensured consistency  
- Updated GitHub  
- Prepared Kanban screenshot  
- Discussed Sprint 3 next steps  

### Actions
- Usha: Final document  
- Niraj: Add backend tasks  
- Prasansa: Finalise UI  
- All: Approve submission  

**Final Readiness Statement:**  
All team members are up to date with Sprint 2 work and ready to begin development in Sprint 3.

---

# 8. References (IEEE Style)

[1] GOV.UK, “Writing user stories,” Government Digital Service, 2023.  
Available: https://www.gov.uk/service-manual/agile-delivery/writing-user-stories  

[2] M. Fowler, *UML Distilled*, 3rd ed., Addison-Wesley, 2003.  

[3] Object Management Group, “UML Specification,” Version 2.5.1, 2017.  
Available: https://www.omg.org/spec/UML/2.5.1/  

[4] K. Beck et al., “Manifesto for Agile Software Development,” 2001.  
Available: https://agilemanifesto.org/  

[5] GitHub Documentation, “About Projects,” 2024.  
Available: https://docs.github.com/en/issues/planning-and-tracking-with-projects  

[6] Docker Inc., “Docker Overview,” 2024.  
Available: https://docs.docker.com/get-started/overview/  

[7] Node.js Foundation, “Node.js Documentation,” 2024.  
Available: https://nodejs.org/en/docs/  

[8] Express.js, “
