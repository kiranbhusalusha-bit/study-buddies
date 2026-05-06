# Study Buddies Project   
### CMP-N204-0: Software Engineering  

---
# Sprint 1


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

**Figure 1:** Use Case Diagram 
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/25f6c429e91eaf1df161bf3c46bdaf6a3f989374/images/USECASE%20(1).drawio.png)

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
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/4eaaad9a5693f4d6cc6eec93002b948ff908f103/images/Wireframe1.drawio.png)

### Users List Page  
Key elements:
- Page title  
- Search bar  
- Filters  
- Student cards  
- Pagination  

**Figure:** Users List Wireframe
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/242227d227a53ac3ecf1e1dfc7ab6d20297587db/images/Wireframe2.drawio.png)


### Student Profile Page  
Key elements:
- Student details  
- Bio  
- Subjects (help with / need help with)  
- Availability  
- Send Message button  
- Back link  

**Figure:** Student Profile Wireframe
https://github.com/kiranbhusalusha-bit/study-buddies/blob/3acc83876dd17c1f87134e5289f7cead51c96492/images/Wireframe3.png
### Study Request List Page  
Key elements:
- Page title  
- Create Request button  
- Filters  
- Request cards  

**Figure:** Study Request List Wireframe
https://github.com/kiranbhusalusha-bit/study-buddies/blob/d852fe2c114ef14568ef555ac818a047b9e7690a/images/Wireframe4.png
### Study Request Detail Page  
Key elements:
- Title  
- Subject  
- Description  
- Creator details  
- Send Message button  
- Back link  

**Figure:** Study Request Detail Wireframe
https://github.com/kiranbhusalusha-bit/study-buddies/blob/96cf6ee6515e44642ac876caa1315cba34819011/images/Wireframe5.png
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
![Alt text]https://github.com/kiranbhusalusha-bit/study-buddies/blob/00d9a98f94836c0ffcf0992546e63bf3e45bd6dc/images/Activity1.drawio.png

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
Tasks for Sprints 2 is managed using the GitHub Project Kanban board.
The board includes the following columns:
• Backlog – all tasks not yet started
• Ready – Tasks chosen for Sprint 2 are prepared and ready to start.
• In progress - things that are being worked on right now
• In Review - Completed tasks are awaiting review.
• Done - Completed and approved task

**Task Board Link:**  
https://github.com/users/kiranbhusalusha-bit/projects/4

**Figure:** Kanban Board Screenshot 
![Alt text](https://github.com/kiranbhusalusha-bit/study-buddies/blob/84851bea6d5468a961f417f2c1d0883fa0dfc94f/images/Screenshot%202026-03-05%20093826.png)

---

# 6. GitHub Repository Link
GitHub is used by the Study Buddies project for project management, version control,
and teamwork.
GitHub Repository link here: https://github.com/kiranbhusalusha-bit/study-buddies
The repository includes:
- Scaffolding files
- README customised for the project
- Contributions from all team members
- Link to the GitHub Project Kanban board used to manage Sprint 2 tasks
- Upload diagrams(wireframes, activity diagrams, sequence diagrams, ERD)

Repository:  
https://github.com/kiranbhusalusha-bit/study-buddies


---

# 7. Meeting Records
Meeting records document team collaboration and progress throughout the sprint.

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

[8] Express.js, “Express Documentation,” 2024. [Online]. Available:
https://expressjs.com/.

[9] Oracle Corporation, “MySQL 8.0 Reference Manual,” 2024. [Online].
Available: https://dev.mysql.com/doc/refman/8.0/en/

[10] PugJS, “Pug Template Engine Documentation,” 2024. [Online]. Available:
https://pugjs.org/api/getting-started.html

[11] U. Bhusal, “Study Buddies – GitHub Repository,” GitHub, 2026. [Online].
Available: https://github.com/kiranbhusalusha-bit/study-buddies

---

# Sprint2

# Study Buddies Project 
## Sprint 2 – Requirements and Specifications Document 
## CMP-N204-0: Software Engineering 

## Submitted by: 
• **Usha (A00027156)** 
• **Niraj Kumar Sah (A00023606)** 
• **Prasansa Senchuri (A00026066)** 

**Module Leader:** Lisa Haskel 
**University:** University of Roehampton, London
**Submission:** Sprint 2- Lab Week 6 
**Project Title:** Study Buddies 

## Document Contents: 
**This document includes:** 
• Project overview 
• User stories 
• Use case diagram 
• Wireframes 
• Activity diagrams 
• Optional artefacts( ERD, sequence 
Diagrams) 
• Kanban Board Screenshot 
• GitHub Repository link 
• Task Board Link 
• Meeting records 
• References(IEEE style) 

# 1. Project Overview 
A web-based tool called Study Buddies was created to assist college students in locat
ing compatible classmates for group projects. Students can explore available study re
quests, post their own requests for academic support, build personalized profiles, and 
look for study partners based on subjects or categories. The platform seeks to enhance 
academic engagement, foster peer-to-peer learning, and provide a welcoming learning 
environment. 
A newly developed full-stack architecture comprising Node.js, Express, MySQL, Pug 
templates, and Docker for containerization will be used to construct the system. 
GitHub will be utilized for project management, collaboration, and version control. 
The development method adheres to agile delivery principles, which include user
centred design, iterative development, and ongoing improvement based on feedback. 
System requirements are analysed and system behaviour is defined using UML 
modelling approaches. 

# 2. User Stories 
The needs of the students using the Study Buddies platform are discussed in user 
stories. 
Every story belongs to the format suggested by GOV.UK: As a... I must/wish to Thus, 
that  
The story's completion is determined by acceptance criteria. 

**i. User Story 1: Establish a Profile**
I must set up a Study Buddies profile with my topics and personal information 
as a university student so that other students can get to know me and 
determine whether I'd be a good study partner. 
It's completed when 
▪ When I can enter my name, course, and year, it's finished. 
▪ When I can add subjects that I can assist with, it's finished. 
▪ When I can add subjects that I require assistance with, it's finished. 
When my profile is saved and accessible in the system, it's finished.

**ii. User Story 2: Study Buddy List View** 
I need to see a list of other students who are willing to study because I am a 
student seeking assistance. 
that I can locate possible study partners as soon as possible. 
It’s completed when 
▪ When I see a list of students together with their names and subjects, it's 
finished. 
▪ When I can click on a student to see their entire profile, it's finished.

**iii. User Story 3: Viewing a Student's Profile**  
Selecting a study companion as a student to determine whether a student is a 
suitable fit for my needs, I must look at their profile. 
It’s completed when 
▪ When I can view their subjects, availability, and bio, it's finished. 
▪ When I can go back to the list after looking at a profile, it's finished.

**iv. User Story 4- Search by Subject** 
As a student in need of assistance in a particular subject 
I have to look for study partners by subject. 
in order to locate someone who can assist me with that subject. 
It’s completed when 
▪ When I can type or choose a subject, it's finished. 
▪ When the results only display pupils who fit that subject, it is 
completed. 

**v. User Story 5 – Create a Study Request Listing** 
As student in need of assistance 
I have to make a list of research requests. 
so hat other students can offer to learn with me after noticing my areas of 
need. 
It’s completed when 
▪ When I am able to enter a title, subject, and description, it is finished. 
▪ When my listing shows up in the list of research requests, it's finished. 

**vi. View Study Request Details**
As students who want to assist 
I must see a study request's specifics. 
so that I can determine if I can provide assistance 
It’s completed when 
▪ When I see the complete description, the subject, and the person who 
posted it 

**vii. User Story 7 – Browse by Category/Tags**
As the student looking into possibilities 
I have to look through study requests and study companions by tags or 
categories. 
so that even if I don't have a certain person in mind, I can find sessions and 
people who are relevant. 
It’s completed when 
▪ When I can click on a category or tag, it's finished. 
▪ When I come across matching profiles or listings, I take action.

**viii. User Story 8 – Send a message** 
Setting up a study session as a student, I have to message a different student so 
that we may coordinate when and how to learn together and communicate. 
It’s completed when 
▪ When I am able to access a message interface from a student's profile 
or study request, it is finished. 
▪ When I can type and send a message, it's finished. 
▪ When the other student receives and can see the message, it is 
completed. 
▪ When I can see the messages I've already sent, it's finished.

# 3. Use Case Diagram 
Based on the user stories established in part 2, this part outlines the primary players 
and use cases for the Study Buddies system. A high-level overview of how a student 
uses the system and what features it needs to have is given by the use case diagram. 
## i. Actors 
Student: A college student who makes use of the Study Buddies system in 
order to: 
a. Establish and maintain their profile  
b. Look for and peruse other pupils  
c. Send messages to other students to set up study sessions 
d. create and view study requests; and (optionally) 
The student is currently the top major actor considered by the system. If 
necessary, other actors (such as an administrator or moderator) might be added 
in subsequent stages. 

## Use Cases 
Create Profile 
The Study Buddies system's primary use cases are: - 
The student makes a personal profile that includes their name, course, 
year, and any subjects they need or can help with. - - - - -

View List of Study Buddies 
A list of other students who are willing to study or provide assistance is 
displayed to the student. 

View Student Profile 
The student looks at another student's complete profile, which includes 
their availability and subjects. 

Search by Subject 
The student looks for study partners based on a certain topic or discipline. 

Browse by Category/ Tags 
Through the use of categories or tags, such as "Maths," "Programming," or 
"First year," the student looks through study partners or requests. 

Create Study Requests 
The student makes a list of study requests, outlining the topic and areas in 
which they require assistance. - - 
 
View Study Request Details 
A particular study request made by another student can be seen in its 
whole by the student. 

Send Message 
To communicate and plan a study session, the student messages another 
student. 

## iii. Use Case Relationships 
The following are the connections between the actor and use cases as well as 
between use cases:  
-Since they are the system's main user, the student actor is connected to 
each of the mentioned use cases. 

-View List of Study Buddies is a key use case that: 
 . Create Study Request is used by students to create study requests. 
 . The whole details of those requests are then visible to other 
students by using View Study Request Details. 

-Send message can be started from: 
 . After looking at another student's profile, the student chooses to get 
in touch with them. 
 .  The student makes the decision to get in touch with the person 
who created the study request.

## iv. System Boundary 
The "Study Buddies System" border includes all of the aforementioned use 
cases. Through the specified use cases, the Student actor, who is external to 
the system, communicates with it.

In the use case diagram:  
-The "Study Buddies System" rectangle serves as a representation of the 
system border.  - - 

-Every use case (oval) is illustrated within this rectangle.  
-The student actor (stick figure) is shown outside the rectangle, and associa
tion lines are used to link it to the appropriate use cases. 

## v. Use Case Diagram 
**Figure 1: Use case diagram for the Study Buddies System.** 
<img width="765" height="765" alt="use-case-diagram" src="https://github.com/user-attachments/assets/bfcd927d-7500-4e08-a949-4520432c28bf" />


# 4. Sprint 2 Specification 
The Study Buddies platform's system requirements were gathered and improved dur
ing Sprint 2. Before development started in Sprint 3, the goal of this sprint was to 
make sure that all functional expectations, user requirements, and system behaviours 
were well defined. The core documentation needed for planning, modelling, and inter
face design was created during this sprint. 

## • Objectives of Sprint 2 
Sprint 2 aimed to :
   - Improve the Study Buddies project concept in context of Sprint 1 
     input.
   - Use organized user stories to determine and record user needs. - Using a use case diagram, specify the functional scope of the 
     system.
   - Determine the main actor and system boundary. - Create first wireframes to illustrate the system's main pages. - Start using activity diagrams to        model the behaviour of the 
     system.
   - Make sure every specification is prepared for development in 
     Sprint 3. 
   - The implementation work scheduled for Sprint 3 is built upon these 
     deliverables.

## 4.2 Wireframes 
A simple visual depiction of the Study Buddies system's primary pages is offered by 
wireframes. They prioritize usefulness and layout over aesthetics. The use cases and 
user stories described in previous sections served as the foundation for the 
wireframes. 
The following key pages are represented: 
## • Home/Landing Page 
   The Study Buddies system is introduced on the home page, which also of
   fers easy access to its key features. 
      
 **Key Elements:**
-Header with logo and site name (“Study Buddies”) 
-Navigation links (e.g. Home, Study Buddies, Study Requests, 
 Login/Profile) 
-Introductory text explaining the purpose of the platform 
-Call to action buttons(e.g. “View Study Buddies”, “View Study Requests”) 
-Footer with basic information (e.g. contact, copyright) 

**Figure: Wireframe- Home Page Wireframe** 
    
**• Users List Page (Study Buddies List)** 
This page shows a list of students who are available to study or offer help. 

Key elements:
- Page title (e.g. “Find a Study Buddy”)
- Search bar to search by subject or keyword
- Filter options or tags (e.g. subject, year, course)  
-  List of student cards, each showing:
  - Student name  
  -  Course / year
  -  Key subjects
  -  “View Profile” button or link
  -   Pagination or “Load more” if needed  
      **Figure : Wireframe – Users list page**
       
**• Student Profile Page**  
This page shows detailed information about a specific student. 
Key elements: 
- Student name and basic details (course, year)
- Short bio or description
- Subjects they can help with
- Subjects they need help with
- Availability information (e.g. evenings, weekends)  - Button or link to “Send Message” (optional, for future sprint)  - Back link to return to the       Users List page
 
**Figure : Wireframe – Student profile page**

**• Study Request List Page**  
This page shows a list of study requests created by students.  
Key elements: - Page title (e.g. “Study Requests”)  - Button to “Create Study Request”  - Filter or tag options (e.g. subject, level)  - List of request cards, each showing:  
▪ Request title 
▪ Subject - Short description or snippet  
▪ Name of the student who created it  
▪ “View Details” button or link

  **Figure : Wireframe – Study request list page**
  
**• Study Request Detail Page**  
This page shows the full details of a specific study request.  
Key elements: 
- Request title
- Subject and tags
- Full description of the help needed
- Name and basic details of the student who created the request
- Optional: “Send Message” button to contact the student
- Back link to return to the Study Request List page
 
**Figure : Wireframe – Study request detail page**

##  .4  Activity Diagrams 
Activity diagrams show how important user interactions proceed. These schematics 
aid in describing system behaviour and directing Sprint 3 implementation. 
## • Activity Diagram – Search for Study Buddies 
Steps:  
- Student opens the Study Buddies List page
- Student enters a subject or selects a tag
- System retrieves matching profiles
- System filters results
- System displays filtered list
- Student selects a profile
- System loads the profile page.
 
**Figure : Activity Diagram – Search for Study Buddies**
 <img width="765" height="765" alt="use-case-diagram" src="https://github.com/user-attachments/assets/db45fcb6-ef59-4b93-a362-0a977153b5bd" />

• Activity Diagram – Create Study Request 
Steps: - - - - - - - - 
Student opens the Create Study Request page 
Student enters title, subject, and description 
Student submits the form 
System validates input  
If invalid → show errors 
If valid → save to database 
System confirms creation 
Updated list of study requests is displayed 
Figure : Activity Diagram – Create Study Request 
• Activity Diagram – View Study Request Details 
Steps: 
- - - - - 
Student opens Study Request list page 
Student selects a request 
System retrieves request details 
System retrieves creator details 
System displays full request information 
Figure : Activity Diagram – View Study Request Details 
4.5 Optional Artefacts 
The Sprint 3 definition is strengthened and deeper planning is demonstrated by op
tional artefacts. 
• Entity Relationships Diagram (ERD) 
Entities: - - - - - 
Student : represents every system user. 
Subject : Classes like programming, math, etc. 
Student_Subject : connection table that connects subjects and students. 
Study_Request : a request made by a student seeking assistance. 
Message (future sprint) : Student to student communication (future sprint). 
• Relationships: - 
Student ↔ Subject = Many-to-Many 
Implemented using Student_Subject - - - 
Student → Study_Request = One-to-Many 
A student can create many study requests. 
Student ↔ Student (via message) = Many-to-Many 
Implemented using Message table( sender_id, receiver_id) 
Student → Study_Request = Optional 
Stored as text . 
ERD diagram 
• Sequence Diagram – View Student Profile 
Flow: - 
Student selects profile - - - - 
System retrieves student data 
System retrieves subjects 
System renders Pug template 
Profile page displays 
Sequence diagram – View Student Profile 
• Sequence Diagram – Create Study Request 
Flow: - 
Student opens form - - - - 
Student submits details 
System validates 
System saves to database 
System confirms creation 
Sequence diagram – Create Study Request 
5. Kanban Board Screenshot 
Tasks for Sprints 2 is managed using the GitHub Project Kanban board. 
The board includes the following columns: 
• Backlog – all tasks not yet started 
• Ready – Tasks chosen for Sprint 2 are prepared and ready to start. 
• In progress - things that are being worked on right now 
• In Review - Completed tasks are awaiting review. 
• Done - Completed and approved task 
Task Board Link: https://github.com/users/kiranbhusalusha-bit/pro
jects/4 
Screenshot of Kanboard Board 
6. GitHub Repository Link 
GitHub is used by the Study Buddies project for project management, version control, 
and teamwork. 
GitHub Repository link here: https://github.com/kiranbhusalusha-bit/study-buddies 
The repository includes: - - - - - 
Scaffolding files 
README customised for the project 
Contributions from all team members 
Link to the GitHub Project Kanban board used to manage Sprint 2 tasks 
Upload diagrams(wireframes, activity diagrams, sequence diagrams, ERD) 
7. Meeting Records 
Meeting records document team collaboration and progress throughout the 
sprint. 
Meeting Record 1 – Sprint 2 Planning 
Date and time: 12 February 2026, 18:00  
Project Name: Study Buddies 
Meeting Goal: Plan Sprint 2 and allocate documentation tasks   
Facilitator: Usha 
Note taker: Prasansa 
Attendees: Usha, Nirja, Prasansa 
Roundtable Updates: 
• Usha : reviewed the feedback from Sprint 1 identifying any lacking 
documentation. 
• Niraj  : Verified preparation to enable backend-related planning and ERD. 
• Prasansa : Ready to help with UI-related artifacts and wireframes. 
Discussion Points: 
• Clarified Sprint 2 deliverables with lecturer comments. 
• Verified the configuration of the Kanban board and GitHub repository. 
• Talked about the platform's personalities and ethical issues. 
• User stories, use case diagrams, wireframes, activity diagrams, and sequence 
diagrams were all agreed upon as documentation tasks. 
• Made plans for the final Sprint 2 submission. 
Actions: 
• Usha: Create sequence diagrams, acceptance criteria, and user stories.  
• Niraj: Assist with database-related planning and ERD construction. 
• Prasansa: Make and improve wireframes. 
• All: Update Kanban board with assigned tasks. 
Meeting Record 2 – Mid Sprint Review 
Date and time: 19 February 2026, 13:00  
Project Name: Study Buddies 
Meeting Goal: Examine the status and make sure the Sprint 2 artifacts are on 
schedule.  
Facilitator : Usha Bhusal 
Note taker: Niraj  
Attendees: Usha, Niraj 
Roundtable Updates: 
• Usha: User stories and acceptance criteria have been finished, and 
activity and sequence diagrams are being worked on. 
• Niraj: ERD draft finished; entities and relationships verified. 
Discussion Points: 
• Examine Sprint 1 professor input to make sure the necessary adjustments were 
made. 
• Figure numbering, captions, and document formatting were determined to 
constitute extra responsibilities. 
• The features (messaging, search, and profile editing) that will be prioritized . 
• assigned accountability for the leftover artifacts from Sprint 2. 
• The group decided how and when to review the diagrams before submitting 
them. 
Actions:  
• Usha : Complete the sequence and activity diagrams. 
• Niraj : Complete the ERD and verify the schema. 
• Prasansa(absent but assigned): Verify UI consistency and enhance 
wireframes. 
• All : Examine GitHub artifacts prior to final submission. 
Meeting Record 3 – Sprint 2 Wrap – UP 
Date and time: 26 February 2026, 16:00  
Project Name: Study Buddies 
Meeting Goal: Finalize Sprint 2 deliverables and get ready to submit  
Facilitator: Usha 
Note taker: Prasansa 
Attendees: Usha, Niraj, Prasansa 
Roundtable Updates: 
• Usha: Diagrams and documentation are finished, and the final report may 
be assembled. 
• Niraj: Backend planning tasks have been added to the backlog after ERD 
validation. 
• Prasansa : Wireframes were enhanced and matched user stories. 
Discussion Points:  
• examined every artifact from Sprint 2, including use case diagrams, 
wireframes, activity diagrams, sequence diagrams, ERD, and user stories. 
• verified that the documentation and diagrams were consistent. 
• Ensured that all files are updated in the GitHub repository. 
• Verified that the Kanban board is prepared for a screenshot. 
• Next actions for Sprint 3 implementation were discussed. 
Actions:  
• Usha : Create the final Sprint 2 document and submit it to GitHub. 
• Niraj: Add Sprint 3's backend tasks to the Kanban board. 
• Prasansa : Wireframes and UI components are finalized. 
• All : Confirm final submission approval 
All team members are up to date with sprint 2 work and ready to begin 
development in Sprint 3. 
8. References (IEEE Style) 
[1]GOV.UK : Writing user stories”, Government Digital Service,2023 .[online] 
Available: https://www.gov.uk/service-manual/agile-delivery/writing
user-stories 
[2] M. Fowler, UML Distilled: A Brief Guide to the Standard Object Modelling 
Language, 3rd ed. Boston, MA, USA: Addison-Wesley,2003. 
[3]Object Management Group, “Unified Modeling Language (UML) Specifica
tion,” Version 2.5.1, 2017. [Online]. Available: 
https://www.omg.org/spec/UML/2.5.1/ 
[4] K. Beck et al., “Manifesto for Agile Software Development,” Agile Alliance, 
2001. [Online]. Available: https://agilemanifesto.org/. 
[5] GitHub, “About Projects,” GitHub Documentation, 2024. [Online]. 
Available: https://docs.github.com/en/issues/planning-and-tracking-with
projects 
[6] Docker Inc., “Docker Overview,” Docker Documentation, 2024. [Online]. 
Available: https://docs.docker.com/get-started/overview/ 
[7] Node.js Foundation, “Node.js Documentation,” 2024. [Online]. Available: 
https://nodejs.org/en/docs/. 
[8] Express.js, “Express Documentation,” 2024. [Online]. Available: 
https://expressjs.com/. 
[9] Oracle Corporation, “MySQL 8.0 Reference Manual,” 2024. [Online]. 
Available: https://dev.mysql.com/doc/refman/8.0/en/ 
[10] PugJS, “Pug Template Engine Documentation,” 2024. [Online]. Available: 
https://pugjs.org/api/getting-started.html 
[11] U. Bhusal, “Study Buddies – GitHub Repository,” GitHub, 2026. [Online]. 
Available: https://github.com/kiranbhusalusha-bit/study-buddies 


---

# Study-Buddies – Sprint 3 Documentation

 
## Project Idea 
Our Project idea is: Study-Buddies -  a platform that enables students to locate 
and establish connections with other students for group study sessions, 
academic support, and cooperative learning. 
 
### Definition of a User 
A user in our system is: 
A student who registers on Study-Buddies to interact with peers, participate in 
study sessions, or offer or request academic support. 

### Definition of a Listing 
A listing in our system is: 
A user-generated study session, help request, or academic support offer. 
Tutoring offers, invitations to study in groups, requests for subject-specific 
assistance, and revision meetings are a few examples of this. 

#### Why is this step required? 
This step is essential because Sprint 3 requires the following dynamic, database
driven pages: 
- User list page 
- User profile page 
- Listing page 
- Listing detail page 
- Tags/categories page
  
To build these correctly, we must first define: 
- What a “user” means in our project 
- What a “listing” means 
- What type of content our system manages
  
These definitions form the foundation for: 
- Database design 
- ERD diagram 
- User stories 
- Express routes 
- Pug templates 
- Sprint 3 Documentation
  
Without this step, the rest of sprint 3 cannot be completed correctly. 

## Database Design 
We created a relational MySQL database that holds user data, study session listings, 
and subject tags in order to support the StudyBuddies platform. The dynamic pages 
needed for Sprint 3, such as the user list, user profile, listing page, listing detail page, and tags/categories page, are made possible by this database structure. 
To prevent duplication and guarantee effective data retrieval, the database adheres to 
a normalized structure. 

### I. Database tables 

#### User table 

| Field Name | Type | Description |
|---|---|---|
| Id | INT(PK, AUTO_INCREMENT) | Unique ID for each user |
| Name | VARCHAR(100) | Student’s name |
| Email | VARCHAR(150) | Student’s email |
| bio | TEXT | Short description about the student |
 
#### Listings Table 

| Field Name | Type | Description |
|---|---|---|
| Id | INT(PK, AUTO_INCREMENT) | Unique for each listing |
| Title | VARCHAR(150) | Title of the study session or help request |
| Description | TEXT | Details about the session |
| User_id | INT(FK → Users.id) | The user who created the listing |

#### Tags Table 

| Field Name | Type | Description |
|---|---|---|
| Id | INT(PK, AUTO_INCREMENT) | Unique ID for each tag |
| name | VARCHAR(100) | Subject or category (e.g., “Math”, “Programming”, “Biology”) |
 
#### Listing_Tags Table 

(Joining Table for many to many relationships 

| Field Name | Type | Description |
|---|---|---|
| Listing_id | INT(FK → listings.id) | The listing |
| Tag_id | INT(FK → Tags.id) | The tag |

### II. Entity Relationship Diagram(ERD) 

#### a. User(1) → (Many) Listing 
Multiple listings can be created by a single user, but each listing is 
unique to that user. 
#### b. Listings(Many) → (Many) Tags 
A tag may be connected to more than one listing, and a listing may 
have more than one tag. 
The Listing_Tags join table is used to do this. 

![images/ListingsManytoManytags.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/29f6dbbe298c9aba584effb82a13d8b3a3841e90/images/ListingsManytoManytags.png)

##### Why is this step required? 
A functional MySQL database that supports the following is necessary for 
Sprint 3: 
- User list page 
- User profile page 
- Listing page 
- Listing detail page 
- Tags/categories page
  
This database architecture serves as the basis for: 
- Backend routes 
- Pug templates 
- Dynamic content 
- Data relationships 
- Future Sprint 4 features
  
The program cannot be properly implemented without a clear database 
structure.

## 1. User Stories Implemented in Sprint 3 
The Study-Buddies platform's initial key functionalities were implemented by the 
development team during Sprint 3. These features, which represent the minimal functionality needed to show a viable dynamic web application using MySQL, 
Express, Pug, and Docker, were chosen from the Sprint 2 backlog. 
In Sprint 3, the following user stories were put into practice: 

### User Story 1 – View Study Buddies List 
As a student looking for academic assistance, I would want to see a list of potential 
study partners so that I can locate someone who can assist me right now. 
#### Acceptance Standards: 
- Every user in the database is shown on a page. 
- Each user card displays their name and other basic information. 
- Every user has a link to "View Profile." 
- MySQL is used to dynamically retrieve data. 

### User Story 2 – View Student Profile 
As a student assessing possible study partners, I would like to see a student's whole 
profile in order for me to determine if they are a good fit. 
#### Acceptance Standards: 
- Name, bio, subjects, and details are displayed on the profile page. 
- Data for the chosen user ID is loaded on the page. 
- There is a "Back to List" link. 
- MySQL is used to dynamically retrieve data.

### User Story 3 – View Study Request Listings 
As a student seeking assistance, I wish to check at study request advertisements in 
order for me to locate sessions or assistance requests that are pertinent to my needs. 
#### Acceptance Standards: 
- Every listing from the database is shown on a page. 
- Each listing displays the creator, subject, and title. 
- There is a "View Details" link for every listing. 
- MySQL is used to dynamically retrieve data. 

### User Story 4 – View Study Request Details 
As a student I would like to view the complete information of a study request who 
wishes to help in order for me to comprehend what assistance is required. 
#### Acceptance Standards: 
- The page displays the subject, tags, and full description. 
- The student who made the request is displayed on the page. 
- There is a "Back to Listings" link. 
- MySQL is used to dynamically retrieve data. 

### User story 5 – Browse by Tags/ Categories 
As a student considering possibilities, I wish to go through listings by tags and study 
partners so that even if I don't have a specific person in mind, I may locate pertinent 
sessions. 
#### Acceptance Requirements: 
- Every tag from the database is shown on a page. 
- When a tag is clicked, related listings appear. 
- Listing_Tags is used to implement many-to-many relationships. 
- MySQL is used to retrieve data dynamically.
  
### Importance 
Sprint 3 calls for the first dynamic features to be implemented utilizing: 
- MySQL 
- Express.js 
- Pug templates 
- Docker 
The necessary Sprint 3 pages are directly mapped to these user stories: 
- User list page 
- User profile page 
- Listing page 
- Listing detail page 
- Tags/categories page
   
This guarantees that the functional requirements specified in Sprint 2 are met by the 
Sprint 3 deliverables. 

## Task breakdown and Developer Allocation 
Using Node.js, Express, MySQL, Pug templates, and Docker, the team concentrated 
on developing the StudyBuddies platform's fundamental dynamic capabilities during 
Sprint 3. Tasks were assigned according to the roles and strengths of each team 
member as determined in Sprint 2. 
The tasks finished and the team member in charge of each are listed in the following 
table: 
### i. Task breakdown Table 

| Task | Description | Assigned To |
|---|---|---|
| Database Setup | Creating MySQL schema, tables (Users, Listings, Tags, Listing_Tags) | Niraj |
| Database Connection | Implementing MySQL connection in Node.js using mysql2 | Niraj |
| User List Page | Route + SQL query + Pug template to display all users | Usha |
| User Profile Page | Route + SQL query + Pug template for individual user profile | Usha |
| Listing Page | Route + SQL query + Pug template to display all study requests | Prasansa |
| Listing Detail Page | Route + SQL query + Pug template for full listing details | Prasansa |
| Tags Page | Route + SQL query + Pug template to display all tags | Prasansa |
| Tag Filter Functionality | Showing listing filtered by tag | Niraj |
| Docker Setup | Dockerfile + docker-compose configuration | Niraj |
| Styling and Layout | Basic CSS and layout consistency across Pug templates | Prasansa |
| GitHub Management | Branch creation, commits, pull requests, merging | Usha |
| Documentation | Sprint 3 PDF, user stories, task breakdown, meeting notes | Usha |


### ii. Summary of team Contribution 
#### Usha 
- User-related routes and pug templates were implemented. 
- Oversaw branches and repositories on GitHub 
- Oversaw Sprint 3's documentation  
- Maintained adherence to Sprint 2 specifications 

#### Niraj 
- Configure the MySQL schema and database. 
- Added backend logic for filtering and tags 
- Set up the Docker environment  
- Backend debugging was supported.
  
#### Prasansa 
- Created listing -based pages (list + detail). 
- UI layout and Pug template styling. 
-  Wireframe confirmation between established pages and implemented 
pages.

### Importance of this step 
Sprint 3 demands clear proof of: 
- Collaboration 
- Task distribution 
- Individual contributions 
- Agile workflow
  
This section shows how the team assigned tasks and finished the necessary 
dynamic features for Sprint 3. 

## GitHub Repository Link 
Version control, teamwork, and Sprint 3 development task management are all done 
using GitHub. 
Topic included in the repository are: 
- Backend implementation (Node.js + Express) 
- MySQL database schema 
- Pug templates for dynamic pages 
- Docker configuration 
- Every commit and branch from Sprint 3 
- Revised diagrams and documentation
  
[GitHub Repository Link](https://kiranbhusalusha-bit.github.io/study-buddies/)

### i.  GitHub Project (Kanban Board) Link 
Sprint 3 tasks were managed utilizing an Agile workflow on the GitHub 
Project board. 
The following columns are present on the board: 
- Backlog 
- Ready  
- In Progress 
- In Review 
- Done
  
[GitHub Project Board Link](https://github.com/users/kiranbhusalusha-bit/projects/5)

### ii.Importance of this step 

Sprint 3 needs proof of: 
- Version control 
- Collaboration 
- Task tracking 
- Agile workflow
  
Giving GitHub links shows that the team managed work and tracked progress 
during the sprint using industry-standard tools. 

## GitHub Metrics  

GitHub metrics were taken from the repository during Sprint 3 to show active 
participation and version control. These metrics display the team's efforts throughout 
the course of the sprint, including commits, branches, pull requests, and code updates. 
The analytics from GitHub show that: 
- Constant addition of more features 
- Consistent dedication from every team member 
- Activity related to branching and merging 
- Workflow for collaborative development 
- Progress in line with tasks for Sprint 3
  
[GitHub Repository Link](https://github.com/kiranbhusalusha-bit/study-buddies)

### Screenshot of GitHub Metrics 
![images/Screenshotofgithubmetrics.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/6a1d80f45d8517eef3aa7b3aa6b54ab143d8b0e9/images/Screenshotofgithubmetrics.png)

This screenshot confirms to the team's adherence to Agile development principles and 
efficient use of GitHub for Sprint 3 implementation. 

## Kanban Board Screenshot 

In respect for Agile principles, the team managed Sprint 3 work using the GitHub 
Project Kanban board. The board promoted openness and cooperation throughout the 
sprint and assisted in monitoring progress from backlog to completion. 

[GitHub Kanban Board Link:](https://github.com/users/kiranbhusalusha-bit/projects/5/views/1) 

The following columns are part of the Kanban board: 
- Backlog – Identified but unfinished tasks 
- Ready – Tasks ready for development 
- In progress -  Task being worked on at the moment 
- In Review – Task that needs to be reviewed or tested 
- Done – Task completed
  
Throughout Sprint 3, this board was updated often to show team activities and real
time progress. 

Screenshot of Kanban Board 
![images/Screenshotofkanbanboard.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/e2e20eee6f3b699d253d6542f395e2b6eb4ee441/images/Screenshotofkanbanboard.png)

This screenshot shows proof of: 
- Task allocation 
- Workflow progression 
- Team collaboration 
- Completion of Sprint 3 deliverables 


## Sprint 3 Conclusion 

All of the expected dynamic features for the StudyBuddies platform were successfully 
delivered in Sprint 3. The group created completely working pages that were linked to 
a MySQL database and included user lists, user profiles, listings, listing details, and 
tags and categories. Each page shows proper backend integration and template 
rendering by retrieving actual data. 

Using GitHub Projects, branches, contributions, and pull requests, the team worked 
well together. Transparency and adherence to Agile principles were guaranteed by 
frequent updates to the Kanban board. The GitHub metrics verify that every team 
member consistently contributes, demonstrating shared accountability and steady 
development over the course of the sprint. 

To support the final submission, all supporting documentation, ERD diagrams, 
screenshots, and meeting records were finished. A reliable, database-driven prototype 
that satisfies the project's functional requirements and equips the team for further 
improvements marks the end of Sprint 3. 

### Meeting Records 

#### Meeting Record 1 – Sprint 3 Planning 
##### Date and Time : 6 March 2026, 18:00 
##### Project Name : Study Buddies 
##### Meeting Goal : Assign roles and plan the development tasks for Sprint 3 
##### Facilitator: Usha 
##### Note taker: Niraj 
##### Attendees: Usha, Niraj, Prasansa 
##### Roundtable Updates: 
- Usha : Reviewed the results of Sprint 2 and determined the features needed for Sprint 3. 
- Niraj : MySQL schema and backend routes are prepared. 
- Prasansa : Ready to work on UI layout and Pug templates. 
##### Discussion points: 
- Verified deliverables for Sprint 3. 
➢ User list page 
➢ User profile page 
➢ Listing page 
➢ Listing detail page 
➢ Tags/categories page 
- The database structure was confirmed to match the Sprint 2 ERD. 
- Assigned front-end and back-end tasks. 
- Agreed to manage branches and monitor tasks with GitHub Projects. 
##### Actions: 
- Usha : Manage the GitHub workflow and implement user routes and templates. 
- Niraj : Create SQL queries, tag filtering, and database schemas.  
- Prasansa : Make layouts for listings and use UI styling. 
- All : Regularly commit and update the Kanban board.

  
### Meeting Record 2 – Mid-Sprint Review 
##### Date and Time : 14 March 2026, 13:30 
##### Project Name : Study Buddies 
##### Meeting Goal : Examine Sprint 3's progress and address any obstacles. 
##### Facilitator: Usha 
##### Note taker: Niraj 
##### Attendees: Usha, Niraj, Prasansa 
##### Roundtable Updates: 
- Usha : Refined templates; finished user list and profile routes. 
- Niraj : Tag filtering is implemented and database tables are built. 
- Prasansa : Completed listing and detail templates; ongoing stylistic enhancements. 
##### Discussion points: 
- Confirmed that every dynamic page accurately retrieves data from MySQL. 
- Detected little problems with layout spacing and tag filtering. 
- Docker setup has been verified to function for local development. 
- Sprint 3 documentation has started. 
##### Actions: 
- Usha : Complete the documents and profile template. 
- Niraj : Support integration testing and address the tag filtering bug. 
- Prasansa : Ensure wireframe uniformity and enhance UI layout. 
- All : Get Kanban images and GitHub metrics ready. 


### Meeting Record 3 – Sprint 3 Wrap-Up 
##### Date and Time : 22 March 2026, 16:00 
##### Project Name : Study Buddies 
##### Meeting Goal : Complete the deliverables for Sprint 3 and get them ready for submission. 
##### Facilitator: Usha 
##### Note taker: Niraj 
##### Attendees: Usha, Niraj, Prasansa 
##### Roundtable Updates: 
- Usha : Verified all routes and templates and finished the documentation. 
- Niraj : Verified Docker functionality and database integration. 
- Prasansa : templates are in line with wireframes; final UI checks are finished.
##### Discussion points: 
- Reviewed every feature of Sprint 3:  
➢ User list 
➢ User profile 
➢ Listing 
➢ Listing detail 
➢ Tags/categories  
- Made sure every page is database-driven and dynamic. 
- Verified updates to the project board, branches, and commits on GitHub. 
- Created screenshots for the Kanban board and stats. 
##### Actions: 
- Usha : Complete and submit in the Sprint 3 PDF. 
- Niraj : Verify repository structure and push final backend updates. 
- Prasansa : Verify template coherence and upload finished user interface 
materials. 
- All : Give your final approval. 

 
 
 
 
 
 
 
 
 
 
 
 
 

