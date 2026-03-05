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
# Sprint 2 – Requirements and 
Specifications Document 
# CMP-N204-0: Software Engineering 
# Submitted by: 
• Usha (A00027156) 
• Niraj Kumar Sah (A00023606) 
• Prasansa Senchuri (A00026066) 
# Module Leader: Lisa Haskel 
# University of Roehampton, London 
# Submission: Sprint 2- Lab Week 6 
# Project Title: Study Buddies 
# Document Contents: 
This document includes: 
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
## 1. Project Overview 
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
2. User Stories 
The needs of the students using the Study Buddies platform are discussed in user 
stories. 
Every story belongs to the format suggested by GOV.UK: As a... I must/wish to Thus, 
that  
The story's completion is determined by acceptance criteria. 
i. 
ii. 
iii. 
iv. 
User Story 1: Establish a Profile 
I must set up a Study Buddies profile with my topics and personal information 
as a university student so that other students can get to know me and 
determine whether I'd be a good study partner. 
It's completed when 
▪ When I can enter my name, course, and year, it's finished. 
▪ When I can add subjects that I can assist with, it's finished. 
▪ When I can add subjects that I require assistance with, it's finished. 
When my profile is saved and accessible in the system, it's finished.  
User Story 2: Study Buddy List View 
I need to see a list of other students who are willing to study because I am a 
student seeking assistance. 
that I can locate possible study partners as soon as possible. 
It’s completed when 
▪ When I see a list of students together with their names and subjects, it's 
finished. 
▪ When I can click on a student to see their entire profile, it's finished. 
User Story 3: Viewing a Student's Profile  
Selecting a study companion as a student to determine whether a student is a 
suitable fit for my needs, I must look at their profile. 
It’s completed when 
▪ When I can view their subjects, availability, and bio, it's finished. 
▪ When I can go back to the list after looking at a profile, it's finished. 
User Story 4- Search by Subject 
As a student in need of assistance in a particular subject 
I have to look for study partners by subject. 
in order to locate someone who can assist me with that subject. 
It’s completed when 
▪ When I can type or choose a subject, it's finished. 
▪ When the results only display pupils who fit that subject, it is 
completed. 
v. 
vi. 
vii. 
viii. 
User Story 5 – Create a Study Request Listing 
As student in need of assistance 
I have to make a list of research requests. 
so hat other students can offer to learn with me after noticing my areas of 
need. 
It’s completed when 
▪ When I am able to enter a title, subject, and description, it is finished. 
▪ When my listing shows up in the list of research requests, it's finished. 
View Study Request Details 
As students who want to assist 
I must see a study request's specifics. 
so that I can determine if I can provide assistance 
It’s completed when 
▪ When I see the complete description, the subject, and the person who 
posted it 
User Story 7 – Browse by Category/Tags 
As the student looking into possibilities 
I have to look through study requests and study companions by tags or 
categories. 
so that even if I don't have a certain person in mind, I can find sessions and 
people who are relevant. 
It’s completed when 
▪ When I can click on a category or tag, it's finished. 
▪ When I come across matching profiles or listings, I take action. 
User Story 8 – Send a message 
Setting up a study session as a student, I have to message a different student so 
that we may coordinate when and how to learn together and communicate. 
It’s completed when 
▪ When I am able to access a message interface from a student's profile 
or study request, it is finished. 
▪ When I can type and send a message, it's finished. 
▪ When the other student receives and can see the message, it is 
completed. 
▪ When I can see the messages I've already sent, it's finished. 
3. Use Case Diagram 
Based on the user stories established in part 2, this part outlines the primary players 
and use cases for the Study Buddies system. A high-level overview of how a student 
uses the system and what features it needs to have is given by the use case diagram. 
i. 
ii. 
Actors 
Student: A college student who makes use of the Study Buddies system in 
order to: 
a. Establish and maintain their profile  
b. Look for and peruse other pupils  
c. Send messages to other students to set up study sessions 
d. create and view study requests; and (optionally) 
The student is currently the top major actor considered by the system. If 
necessary, other actors (such as an administrator or moderator) might be added 
in subsequent stages. 
Use Cases 
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
iii. 
View Study Request Details 
A particular study request made by another student can be seen in its 
whole by the student. 
Send Message 
To communicate and plan a study session, the student messages another 
student. 
Use Case Relationships 
The following are the connections between the actor and use cases as well as 
between use cases: - - - 
iv. 
Since they are the system's main user, the student actor is connected to 
each of the mentioned use cases. 
View List of Study Buddies is a key use case that: 
 . Create Study Request is used by students to create study requests. 
 . The whole details of those requests are then visible to other 
students by using View Study Request Details. 
Send message can be started from: 
 . After looking at another student's profile, the student chooses to get 
in touch with them. 
 .  The student makes the decision to get in touch with the person 
who created the study request. 
System Boundary 
The "Study Buddies System" border includes all of the aforementioned use 
cases. Through the specified use cases, the Student actor, who is external to 
the system, communicates with it. 
In the use case diagram: - 
The "Study Buddies System" rectangle serves as a representation of the 
system border.  - - 
v. 
Every use case (oval) is illustrated within this rectangle.  
The student actor (stick figure) is shown outside the rectangle, and associa
tion lines are used to link it to the appropriate use cases. 
Use Case Diagram 
Figure 1: Use case diagram for the Study Buddies System. 

4. Sprint 2 Specification 
The Study Buddies platform's system requirements were gathered and improved dur
ing Sprint 2. Before development started in Sprint 3, the goal of this sprint was to 
make sure that all functional expectations, user requirements, and system behaviours 
were well defined. The core documentation needed for planning, modelling, and inter
face design was created during this sprint. 
• Objectives of Sprint 2 
Sprint 2 aimed to : - Improve the Study Buddies project concept in context of Sprint 1 
input. - Use organized user stories to determine and record user needs. - Using a use case diagram, specify the functional scope of the 
system. - Determine the main actor and system boundary. - Create first wireframes to illustrate the system's main pages. - Start using activity diagrams to model the behaviour of the 
system. - Make sure every specification is prepared for development in 
Sprint 3. 
The implementation work scheduled for Sprint 3 is built upon these 
deliverables. 
4.2 Wireframes 
A simple visual depiction of the Study Buddies system's primary pages is offered by 
wireframes. They prioritize usefulness and layout over aesthetics. The use cases and 
user stories described in previous sections served as the foundation for the 
wireframes. 
The following key pages are represented: 
• Home/Landing Page 
The Study Buddies system is introduced on the home page, which also of
fers easy access to its key features. 
Key Elements: - - - - 
Header with logo and site name (“Study Buddies”) 
Navigation links (e.g. Home, Study Buddies, Study Requests, 
Login/Profile) 
Introductory text explaining the purpose of the platform 
Call to action buttons(e.g. “View Study Buddies”, “View Study Requests”) 
- 
Footer with basic information (e.g. contact, copyright) 
Figure: Wireframe- Home Page Wireframe 
• Users List Page (Study Buddies List) 
This page shows a list of students who are available to study or offer help.  
Key elements: - Page title (e.g. “Find a Study Buddy”)  - Search bar to search by subject or keyword  - Filter options or tags (e.g. subject, year, course)  - List of student cards, each showing:  - Student name  - Course / year  - Key subjects  - “View Profile” button or link -  Pagination or “Load more” if needed  
Figure : Wireframe – Users list page  
• Student Profile Page  
This page shows detailed information about a specific student. 
Key elements: - Student name and basic details (course, year)  - Short bio or description  - Subjects they can help with  - Subjects they need help with  - Availability information (e.g. evenings, weekends)  - Button or link to “Send Message” (optional, for future sprint)  - Back link to return to the Users List page  
Figure : Wireframe – Student profile page  
• Study Request List Page  
This page shows a list of study requests created by students.  
Key elements: - Page title (e.g. “Study Requests”)  - Button to “Create Study Request”  - Filter or tag options (e.g. subject, level)  - List of request cards, each showing:  
▪ Request title 
▪ Subject - Short description or snippet  
▪ Name of the student who created it  
▪ “View Details” button or link  
Figure : Wireframe – Study request list page 
• Study Request Detail Page  
This page shows the full details of a specific study request.  
Key elements: - Request title  - Subject and tags  - Full description of the help needed  - Name and basic details of the student who created the request  - Optional: “Send Message” button to contact the student  - Back link to return to the Study Request List page  
Figure : Wireframe – Study request detail page 
4.4  Activity Diagrams 
Activity diagrams show how important user interactions proceed. These schematics 
aid in describing system behaviour and directing Sprint 3 implementation. 
• Activity Diagram – Search for Study Buddies 
Steps: - - - - - - - 
Student opens the Study Buddies List page 
Student enters a subject or selects a tag 
System retrieves matching profiles 
System filters results 
System displays filtered list 
Student selects a profile 
System loads the profile page. 
Figure : Activity Diagram – Search for Study Buddies 
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
