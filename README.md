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
- Usha Kiran Bhusal (A00027156)
- Niraj Kumar Sah (A00023606)
- Prasansa Senchuri (A00026066)

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

# Project Structure

- study-buddies
  - app
    - routes
    - views
    - public
  - docs
    - code-of-conduct.md
    - roles.md
    - personas.md
    - ethics.md
    - meeting-notes-sprint1.md
  - Dockerfile
  - docker-compose.yml
  - package.json
  - README.md
  - .gitignore

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

## Product Backlog (Sprint 1 – Initial)
To support early planning and development, the first product backlog was established.
Examples of backlog items are as follows:
- The process of creating a profile and registering a user
- Find study partners by subject
- Establish and participate in study groups
- Students messaging one another
- Basic access control and security
- Considerations for usability and accessibility

The GitHub Project Kanban board was used to prioritize and monitor these items

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

## Code of Conduct
### Purpose
To successfully and appropriately finish the Study Buddies project, we shallcollaborate as a polite and efficient team.

### Communication
- Primary means of communication: WhatsApp
- Response time: It is expected of team members to respond within 24 hours.
- Respectful communication will be maintained. No personal attacks or foullanguage.
  
### Meetings
- We'll meet once a week and send out updates in between.
- Members are required to notify the group in advance if they will be absent.
- Notes from meetings will be taken and stored in the repository.

### Contribution and Deadlines
- The team will distribute the work equitably.
- Every sprint, each member is required to make at least one significant GitHub
commit.
- The GitHub Kanban board will be used to manage tasks and provide frequent
updates.
- Members will finish assignments by the specified date or inform one another if
they require any assistance.

### Collaboration and Quality
- When required, team members will inspect one another's work.
- Upgrades and any changes must be transparent and well-documented with
appropriate commit messages and comments.

### Conflict Resolution
- All the obstacles will be handled politely and quietly.
- The team will seek advice from the module tutor if the issue remains
unresolved.

### Non-participation
- Step 1: Get a private conversation with the member.
- Step 2: Have a group discussion and if necessary, redistribute tasks.
- Step 3: Notify the module tutor about the problem if it still exists.
  
### Agreement
We declare to follow along by this Code of Conduct by participating in this
project.  
Signed:  
-Usha Kiran Bhusal  
-Niraj Kumar Sah  
-Prasansa Senchuri  

Date:26/01/2026

## Team Roles
### Scrum Master
Name: Usha
Responsibilities:
- Organize the activities for Sprint 1.
- Keep the GitHub Kanban board up to date.
- Make sure the tasks for Sprint 1 are finished on schedule.
  
### Note Taker
Name: Prasansa
Responsibilities:
- Take notes throughout meetings.
- Assist in creating the Sprint 1 pdf documentation.

### Developer / Contributor
Name: Niraj
Responsibilities:
- Support documentation and repository setup
- Help with personas and ethical issues.
- As needed, contribute code or documentation.

Note: Roles are assigned for Sprint 1, which may change in next sprints.

## Personas
**Persona 1: Alex Johnson**  
**Age:** 19  
**Course:** BSc Computer Science (Year 1)  
**Background**  
Alex is a first-year university student who just started college and is still getting used to studying on his own and living on campus.  
**Goals** 
- Look for other friends to learn together.  
- Enhance knowledge of the course content.  
- Feel less alone when studying.  
  
**Problems / Needs**  
- Has trouble approaching classmates.  
- Lots of the time, he studies alone  
- Lacks the courage to ask questions
  
**How the Study Buddies App Helps**   
Alex can locate students who are studying similar topics and set up study sessions in a friendly setting by using the Study Buddies app.  


**Persona 2: Sam Patel**   
**Age:** 23  
**Course:** BA Business Management (Final Year)  
**Background**   
Sam, a final-year student, has to manage part-time employment and schoolwork while studying for finals.  
**Goals**    
- Plan productive group revision sessions  
- Exchange notes and study advice  
- Effectively manage limited study time  
**Problems / Needs**  
- Difficult to coordinate study times  
- Limited availability due to work commitments  
- Needs motivated study partners  
**How the Study Buddies App Helps**    
Sam can easily locate students who share their academic objectives and planstudy sessions that work with their schedules thanks to the Study Buddies app.  

**Persona 3: Mei Lin**
**Age:** 21  
**Course:** MSc Data Science  
**Background** 
Mei is adjusting to a new study environment and style as an overseas student.  
**Goals**  
- Develop confidence when studying in groups  
- Enhance knowledge through group discussion  
- Make connections with encouraging classmates  

**Problems / Needs**  
- Barriers caused by language and culture  
- Lack of confidence to speak out during lectures  
- Small academic network  
How the Study Buddies App Helps  
The Study Buddies app enables Mei to connect with supportive peers studying similar subjects and participate in inclusive study groups.


## Ethical Issues
The main ethical issues surrounding the creation and usage of the Study Buddies
app are described in this section.
### 1. Privacy and Data Protection
Personal information including names, classes, and study interests may be gathered by the application. It is the duty to safeguard this information and make sure it is managed sensibly and securely.  

Considerations:  
- Gather only essential user data  
- Prevent unauthorized access to data  
- Be transparent about how user data is used
  
### 2. User Safety and Misuse
The platform faces the risk of being used for inappropriate behaviour, spam, or harassment.  
Considerations:  
- Define acceptable behaviour clearly  
- Provide ways for users to report misuse  
- Take reasonable steps to discourage harmful behaviour  
  
### 3. Inclusivity and Accessibility  
The application should be accessible and beneficial by students from a variety of backgrounds.  
Considerations:  
- Avoid any form of discrimination  
- Make use of simple and polite language.  
- Create features that are usable by everyone.
  
### 4. Responsibility as Developers
Throughout the project, it is our duty as student developers to conduct ourselves in a professional and moral manner.  
Considerations:  
- Follow the agreed Code of Conduct  
- Respect users and team members  
- Prioritise user wellbeing in design decisions  

  
## Meeting Notes

**Meeting 1 – Project Setup**
- **Date:** 30/01/2026
- Time: 11 am
- Mode: WhatsApp
- Sprint: Sprint 1 (Project Setup and Planning)
- Attendees: All group members(Usha, Niraj, Prasansa)
**Agenda**
- Determine the members and their responsibility.
- Examine requirements for the Sprint 1 assessment.
- Decide tools and repository setup
- Explain about the tools(Kanban board, Docker, GitHub)
- Assign tasks for Sprint 1.
  
**Discussion**
The team talked about the necessary deliverables and went over the Sprint 1 evaluation brief.
After discussing several project ideas, the group decided on Study Buddies, a website that connects students with study partners.  
The group talked about using Docker for a consistent development environment, GitHub Projects for job management, and GitHub for version control.  

**Decisions**
- Confirmed project idea: Study Buddies
- GitHub repository was made and sent to every member
- The application will be run using Docker
- Planning and documentation will be the main priorities of Sprint 1
  
**Actions**
- Usha: Manage the repository and set up the Kanban board
- Prasansa: Document meeting minutes and help with personas
- Niraj: Help with documentation ethics concerns
- All members: Every participant should make sure Docker is installed on their computer and submit at least one GitHub commit.
  
**Next Meeting**
- Date: 06/02/2026
- Time: 10 am
- Agenda: Review Sprint 1 documents and compile the single PDF

  
**Meeting 2 - Sprint 1 Review and Final PDF Compilation**

**Meeting Details**
- Project Name: Study Buddies  
- Date:06/02/2026  
- Time:10 am  
- Mode: Online(WhatsApp)  
- Sprint: Sprint 1 (Proposal and Setup)  
- Meeting Goal: Review all Sprint 1 work and prepare the final single PDF for submission  
- Attendees: Usha Kiran Bhusal, Niraj Kumar Sah, Prasansa Senchuri
  
**Agenda**  
- Examine the requirements checklist for Sprint 1.  
- Verify the each and every Sprint 1 paperwork have been completed.  
- Examine the status of the Kanban board and the GitHub repository.  
- Assemble the contents for the last PDF.  
- Verify that we are prepared to submit for Sprint 1.
  
**Discussion**

The team verified that the necessary documentation had been finished and went over the Sprint 1 evaluation requirements. To make sure the README, Code of Conduct, Roles, Personas, Ethical Issues, and Meeting Notes were all current, the team looked over the GitHub repository.  
After reviewing the Kanban board, all of the items from Sprint 1 were verified as finished. The group decided on the sequence of sections to be included and talked about the final single PDF's structure.
To make sure it was clear, consistent, and in line with the evaluation brief, each
section of the paperwork was quickly examined.

**Decisions Made**  
- Every condition for Sprint 1 has been fulfilled.  
- Submission of the GitHub repository is now possible.  
- The progress of Sprint 1 is correctly reflected on the Kanban board.  
- All necessary Sprint 1 portions will be included in the final single PDF.  
- The group is ready to submit Sprint 1.
  
**Planned Work for Sprint 2**
Requirements analysis, database design, user stories, and a initial installation of essential features like study group management and user profiles will be the main topics of Sprint 2.


---

# Sprint2 - Requirements and Specifications Document 

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
## 1. Project Overview 
A web-based tool called Study Buddies was created to assist college students in locating compatible classmates for group projects. Students can explore available study requests, post their own requests for academic support, build personalized profiles, and look for study partners based on subjects or categories. The platform seeks to enhance academic engagement, foster peer-to-peer learning, and provide a welcoming learning environment. 

A newly developed full-stack architecture comprising Node.js, Express, MySQL, Pug templates, and Docker for containerization will be used to construct the system. GitHub will be utilized for project management, collaboration, and version control. The development method adheres to agile delivery principles, which include user centred design, iterative development, and ongoing improvement based on feedback. System requirements are analysed and system behaviour is defined using UML modelling approaches. 

---

## 2. User Stories 
The needs of the students using the Study Buddies platform are discussed in user stories. 
Every story belongs to the format suggested by GOV.UK: As a... I must/wish to Thus, 
that  
The story's completion is determined by acceptance criteria. 

### i. User Story 1: Establish a Profile
I must set up a Study Buddies profile with my topics and personal information as a university student so that other students can get to know me and determine whether I'd be a good study partner. 
It's completed when 
- When I can enter my name, course, and year, it's finished. 
- When I can add subjects that I can assist with, it's finished. 
- When I can add subjects that I require assistance with, it's finished. 
- When my profile is saved and accessible in the system, it's finished.

### ii. User Story 2: Study Buddy List View
I need to see a list of other students who are willing to study because I am a student seeking assistance. 
that I can locate possible study partners as soon as possible. 
It’s completed when 
- When I see a list of students together with their names and subjects, it's finished. 
- When I can click on a student to see their entire profile, it's finished.

### iii. User Story 3: Viewing a Student's Profile  
Selecting a study companion as a student to determine whether a student is a suitable fit for my needs, I must look at their profile. 
It’s completed when 
- When I can view their subjects, availability, and bio, it's finished. 
- When I can go back to the list after looking at a profile, it's finished.

### iv. User Story 4- Search by Subject
As a student in need of assistance in a particular subject ,I have to look for study partners by subject in order to locate someone who can assist me with that subject. 
It’s completed when 
- When I can type or choose a subject, it's finished. 
- When the results only display pupils who fit that subject, it is completed. 

### v. User Story 5 – Create a Study Request Listing
As student in need of assistance ,I have to make a list of research requests. 
So that other students can offer to learn with me after noticing my areas of need. 
It’s completed when 
- When I am able to enter a title, subject, and description, it is finished. 
- When my listing shows up in the list of research requests, it's finished. 

### vi. View Study Request Details
As students who want to assist I must see a study request's specifics. So that I can determine if I can provide assistance .
It’s completed when 
- When I see the complete description, the subject, and the person who posted it 

### vii. User Story 7 – Browse by Category/Tags
As the student looking into possibilities 
I have to look through study requests and study companions by tags or categories. 
so that even if I don't have a certain person in mind, I can find sessions and people who are relevant. 
It’s completed when 
- When I can click on a category or tag, it's finished. 
- When I come across matching profiles or listings, I take action.

### viii. User Story 8 – Send a message
Setting up a study session as a student, I have to message a different student so 
that we may coordinate when and how to learn together and communicate. 
It’s completed when 
- When I am able to access a message interface from a student's profile or study request, it is finished. 
- When I can type and send a message, it's finished. 
- When the other student receives and can see the message, it is completed. 
- When I can see the messages I've already sent, it's finished.


## 3. Use Case Diagram 
Based on the user stories established in part 2, this part outlines the primary players and use cases for the Study Buddies system. A high-level overview of how a student uses the system and what features it needs to have is given by the use case diagram.

### i. Actors 
**Student**: A college student who makes use of the Study Buddies system in 
order to: 
- a. Establish and maintain their profile  
- b. Look for and peruse other pupils  
- c. Send messages to other students to set up study sessions 
- d. create and view study requests; and (optionally) 
The student is currently the top major actor considered by the system. If necessary, other actors (such as an administrator or moderator) might be added in subsequent stages. 

## Use Cases 
The Study Buddies system's primary use cases are: 

**Create Profile:** The student makes a personal profile that includes their name, course, year, and any subjects they need or can help with.

**View List of Study Buddies:** A list of other students who are willing to study or provide assistance is displayed to the student. 

**View Student Profile:** The student looks at another student's complete profile, which includes 
their availability and subjects. 

**Search by Subject:** The student looks for study partners based on a certain topic or discipline. 

**Browse by Category/ Tags:** Through the use of categories or tags, such as "Maths," "Programming," or "First year," the student looks through study partners or requests. 

**Create Study Requests:** The student makes a list of study requests, outlining the topic and areas in which they require assistance. 
 
**View Study Request Details:** A particular study request made by another student can be seen in its whole by the student. 

**Send Message:** To communicate and plan a study session, the student messages another student. 

### iii. Use Case Relationships 
The following are the connections between the actor and use cases as well as between use cases:

- Since they are the system's main user, the student actor is connected to each of the mentioned use cases. 
- View List of Study Buddies is a key use case that: 
 - Create Study Request is used by students to create study requests. 
 - The whole details of those requests are then visible to other students by using View Study Request Details. 
-Send message can be started from: 
 - After looking at another student's profile, the student chooses to get in touch with them. 
 - The student makes the decision to get in touch with the person who created the study request.

## iv. System Boundary 
The "Study Buddies System" border includes all of the aforementioned use cases. Through the specified use cases, the Student actor, who is external to the system, communicates with it.

In the use case diagram:  
- The "Study Buddies System" rectangle serves as a representation of the system border.  
- Every use case (oval) is illustrated within this rectangle.  
- The student actor (stick figure) is shown outside the rectangle, and association lines are used to link it to the appropriate use cases. 

## v. Use Case Diagram 
**Figure 1: Use case diagram for the Study Buddies System.** 
![images/USECASE (1).drawio.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/USECASE%20(1).drawio.png)


## 4. Sprint 2 Specification 
The Study Buddies platform's system requirements were gathered and improved dur
ing Sprint 2. Before development started in Sprint 3, the goal of this sprint was to 
make sure that all functional expectations, user requirements, and system behaviours 
were well defined. The core documentation needed for planning, modelling, and inter
face design was created during this sprint. 

### • Objectives of Sprint 2 
Sprint 2 aimed to :
   - Improve the Study Buddies project concept in context of Sprint 1 input.
   - Use organized user stories to determine and record user needs.
   - Using a use case diagram, specify the functional scope of the system.
   - Determine the main actor and system boundary.
   - Create first wireframes to illustrate the system's main pages.
   - Start using activity diagrams to model the behaviour of the system.
   - Make sure every specification is prepared for development in Sprint 3. 
   - The implementation work scheduled for Sprint 3 is built upon these deliverables.

## 4.2 Wireframes 
A simple visual depiction of the Study Buddies system's primary pages is offered by 
wireframes. They prioritize usefulness and layout over aesthetics. The use cases and 
user stories described in previous sections served as the foundation for the 
wireframes. 
The following key pages are represented: 

**• Home/Landing Page**
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

![images/Wireframe1.drawio.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Wireframe1.drawio.png)

**• Users List Page (Study Buddies List)** 
This page shows a list of students who are available to study or offer help. 
Key elements:
- Page title (e.g. “Find a Study Buddy”)
- Search bar to search by subject or keyword
- Filter options or tags (e.g. subject, year, course)  
-  List of student cards, each showing:
  -- Student name  
  --  Course / year
  --  Key subjects
  --  “View Profile” button or link
  --   Pagination or “Load more” if needed

**Figure: Wireframe - User List Page**

![images/Wireframe2.drawio.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Wireframe2.drawio.png)  
    
       
**• Student Profile Page**  
This page shows detailed information about a specific student. 
Key elements: 
- Student name and basic details (course, year)
- Short bio or description
- Subjects they can help with
- Subjects they need help with
- Availability information (e.g. evenings, weekends)  - Button or link to “Send Message” (optional, for future sprint)
- Back link to return to the Users List page
 
**Figure : Wireframe – Student profile page**
![images/Wireframe3.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Wireframe3.png)

**• Study Request List Page**  
This page shows a list of study requests created by students.  
Key elements:   
- Page title (e.g. “Study Requests”)  
- Button to “Create Study Request”  
- Filter or tag options (e.g. subject, level)  
- List of request cards, each showing:  
 - Request title  
 - Subject - Short description or snippet    
 - Name of the student who created it  
 - “View Details” button or link  

  **Figure : Wireframe – Study request list page**
![images/Wireframe4.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Wireframe4.png)
  
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
![images/Wireframe5.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Wireframe5.png)

##  4.4  Activity Diagrams 
Activity diagrams show how important user interactions proceed. These schematics aid in describing system behaviour and directing Sprint 3 implementation.

**• Activity Diagram – Search for Study Buddies**  
Steps:    
- Student opens the Study Buddies List page
- Student enters a subject or selects a tag
- System retrieves matching profiles
- System filters results
- System displays filtered list
- Student selects a profile
- System loads the profile page.
 
**Figure : Activity Diagram – Search for Study Buddies**
 
 ![images/Activity1.drawio.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Activity1.drawio.png)

**• Activity Diagram – Create Study Request**  
Steps: 
- Student opens the Create Study Request page 
- Student enters title, subject, and description 
- Student submits the form 
- System validates input  
- If invalid → show errors 
- If valid → save to database 
-  System confirms creation 
- Updated list of study requests is displayed
   

**Figure : Activity Diagram – Create Study Request**
![images/activity2.drawio.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/activity2.drawio.png)
  
**• Activity Diagram – View Study Request Details**  
Steps: 
- Student opens Study Request list page 
- Student selects a request 
- System retrieves request details 
- System retrieves creator details 
- System displays full request information
 
**Figure : Activity Diagram – View Study Request Details**
![images/Activity3.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/Activity3.png)

### 4.5 Optional Artefacts 
The Sprint 3 definition is strengthened and deeper planning is demonstrated by op
tional artefacts.  
**• Entity Relationships Diagram (ERD)**   
Entities: 
- Student : represents every system user. 
- Subject : Classes like programming, math, etc. 
- Student_Subject : connection table that connects subjects and students. 
- Study_Request : a request made by a student seeking assistance. 
- Message (future sprint) : Student to student communication (future sprint).
  
**• Relationships:** 
- Student ↔ Subject = Many-to-Many   
Implemented using Student_Subject  
- Student → Study_Request = One-to-Many     
A student can create many study requests.  
- Student ↔ Student (via message) = Many-to-Many   
Implemented using Message table( sender_id, receiver_id) 
- Student → Study_Request = Optional   
Stored as text .  


**ERD diagram**

![images/erd1.drawio.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/9fe71d439b687efb873f3df1ed57d0e50c95d3f7/images/erd1.drawio.png)

**Sequence Diagram – View Student Profile** 
Flow: 
- Student selects profile 
- System retrieves student data 
- System retrieves subjects 
- System renders Pug template 
- Profile page displays

**Sequence diagram – View Student Profile**
 

**Sequence Diagram – Create Study Request**

Flow: 
- Student opens form 
- Student submits details 
- System validates 
- System saves to database 
- System confirms creation 

**Sequence diagram – Create Study Request**


## 5. Kanban Board Screenshot   
Tasks for Sprints 2 is managed using the GitHub Project Kanban board. The board includes the following columns: 
- Backlog – all tasks not yet started 
- Ready – Tasks chosen for Sprint 2 are prepared and ready to start. 
- In progress - things that are being worked on right now 
- In Review - Completed tasks are awaiting review. 
- Done - Completed and approved task   
[Task Board Link:](https://github.com/users/kiranbhusalusha-bit/projects/4)

**Screenshot of Kanboard Board** 



## 6. GitHub Repository Link
GitHub is used by the Study Buddies project for project management, version control, and teamwork.

[GitHub Repository link:](https://github.com/kiranbhusalusha-bit/study-buddies)  
The repository includes:
- Scaffolding files
- README customised for the project
- Contributions from all team members
- Link to the GitHub Project Kanban board used to manage Sprint 2 tasks
- Upload diagrams(wireframes, activity diagrams, sequence diagrams, ERD)

[Repository Link](https://github.com/kiranbhusalusha-bit/study-buddies) 



## 7. Meeting Records
Meeting records document team collaboration and progress throughout the sprint.


### Meeting 1 – Sprint 2 Planning  
**Date:** 12 Feb 2026  
**Project Name:** Study Buddies   
**Meeting Goal:** Plan Sprint 2 and allocate documentation tasks     
**Facilitator:** Usha  
**Note taker:** Prasansa  
**Attendees:** Usha, Niraj, Prasansa  

#### Roundtable Updates
- Usha : reviewed the feedback from Sprint 1 identifying any lacking documentation. 
- Niraj  : Verified preparation to enable backend-related planning and ERD. 
- Prasansa : Ready to help with UI-related artifacts and wireframes.

#### Discussion
- Clarified Sprint 2 deliverables with lecturer comments. 
- Verified the configuration of the Kanban board and GitHub repository. 
- Talked about the platform's personalities and ethical issues. 
- User stories, use case diagrams, wireframes, activity diagrams, and sequence diagrams were all agreed upon as documentation tasks. 
- Made plans for the final Sprint 2 submission.

#### Actions
- Usha: Create sequence diagrams, acceptance criteria, and user stories.  
- Niraj: Assist with database-related planning and ERD construction. 
- Prasansa: Make and improve wireframes. 
- All: Update Kanban board with assigned tasks.

### Meeting 2 – Mid Sprint Review  
**Date:** 19 Feb 2026  
**Project Name:** Study Buddies  
**Meeting Goal:**  Examine the status and make sure the Sprint 2 artifacts are on schedule.   
**Facilitator:** Usha  
**Note taker:** Niraj    
**Attendees:** Usha, Niraj    

#### Roundtable Updates
- Usha: User stories and acceptance criteria have been finished, and activity and sequence diagrams are being worked on.   
- Niraj: ERD draft finished; entities and relationships verified.   

#### Discussion
- Examine Sprint 1 professor input to make sure the necessary adjustments were made. 
- Figure numbering, captions, and document formatting were determined to constitute extra responsibilities. 
- The features (messaging, search, and profile editing) that will be prioritized . 
- assigned accountability for the leftover artifacts from Sprint 2. 
- The group decided how and when to review the diagrams before submitting them. 

#### Actions
- Usha: Complete the sequence and activity diagrams. 
- Niraj: Complete the ERD and verify the schema.
- Prasansa(absent but assigned): Verify UI consistency and enhance wireframes.  
- All : Examine GitHub artifacts prior to final submission.

### Meeting 3 – Sprint 2 Wrap-Up  
**Date:** 26 Feb 2026  
**Project Name:** Study Buddies  
**Meeting Goal:** Finalize Sprint 2 deliverables and get ready to submit  
**Facilitator:** Usha   
**Note taker:** Prasansa  
**Attendees:** Usha.Niraj,Prasansa 
#### Roundtable Updates
- Usha: Diagrams and documentation are finished, and the final report may be assembled.  
- Niraj: Backend planning tasks have been added to the backlog after ERD validation.
- Prasansa: Wireframes were enhanced and matched user stories. 

#### Discussion
- examined every artifact from Sprint 2, including use case diagrams, 
wireframes, activity diagrams, sequence diagrams, ERD, and user stories.
- verified that the documentation and diagrams were consistent. 
- Ensured that all files are updated in the GitHub repository. 
- Verified that the Kanban board is prepared for a screenshot. 
- Next actions for Sprint 3 implementation were discussed. 

#### Actions
- Usha:  Create the final Sprint 2 document and submit it to GitHub.
- Niraj:  Add Sprint 3's backend tasks to the Kanban board.
- Prasansa: Wireframes and UI components are finalized. 
- All: Confirm final submission approval
  
All team members are up to date with Sprint 2 work and ready to begin development in Sprint 3. 

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

 
 # Sprint 4 – Final Submission Document  
## Study Buddies – Sprint 4  

**Module:** Software Engineering (CMP-N204-0)  
**Group Name:** Study Buddies  

### Team Members
| Name | Student ID |
|---|---|
| Usha Kiran Bhusal | A00027156 |
| Niraj Kumar Sah | A00023606 |
| Prasansa Senchuri | A00026066 |

### Project Links
- GitHub Repository:  
  https://github.com/kiranbhusalusha-bit/study-buddies

- Kanban Board:  
  https://github.com/users/kiranbhusalusha-bit/projects/6

---


# Sprint 4- Final Submission Document

**1. Application Idea Summary** 

## Project Title: Study Buddies

Study Buddies is a dynamic full-stack web application designed to facilitate student cooperation and peer learning. In an organized and user-friendly setting, the system lets users identify study companions, exchange knowledge, and ask for academic assistance.

Students can use the app to make study requests, look for study partners, browse other students, and establish profiles. In order to make well-informed judgments regarding collaboration, users can access comprehensive information about other students and study requests.

---

# 2. Sprint 4 Objectives

The objectives of Sprint 4 were to produce a Minimum Viable Product (MVP) by:

- Implementing advanced user features
- Improving user interface and usability
- Enabling user interaction (messaging and requests)
- Integrating DevOps practices such as CI/CD

---

# 3. Features Implemented in Sprint 4

## I. User Authentication (Login System)  
- Users can register and log in  
- Session-based authentication is used  
- Logout feature implemented  

### User Story Link  
> "I want to create and access my profile as a student so that I can communicate with other users."

### Importance
Secure access and a customized user experience are made possible by this feature.

---

## II. Create Study Request
- New study requests can be made by users.
- Include a description and title.
- MySQL stores the data, which is dynamically displayed.


### User Story Link
> "I want to make a study request as a student so that others can assist me."

### Importance
Enables students to actively seek academic assistance.

---

## III. Messaging System  
- Messages can be sent between users  
- Messages are stored in the database  
- Supports communication between study partners  

### User Story Link
> "I want to send messages as a student in order to communicate and set up study sessions."

### Importance: Facilitates user connection and collaboration.

---

## IV. Matching and Filtering System

- Listings can be filtered by tags and categories
- Helps users locate suitable study partners

### User Story Link
> "As a student, I want to search for relevant study sessions by browsing tags."

### Importance
Enhances usability and facilitates consumers' efficient search for appropriate matches.  

---

## V. User Interface Enhancements
- Navigation bar implemented
- Improved layout and consistency
- Better user experience across pages

---

## VI. User Ratings System

After connecting with other study partners, users can score them on a
scale of 1 to 5. The average rating is shown on the user profile page, and
the ratings are kept in the database. This aids users in selecting study
partners with knowledge. The recommendation algorithm matches users
based on their average rating and common subjects using a
straightforward grading method. The relevancy of recommended study
partners is increased by giving priority to users with more subject
matches and higher ratings.


### User Story Link
> "As a student, I want to rate other users so that I can provide feedback on their collaboration."

### Importance
Enhances trust and assists users in finding reliable study companions.

---

## VII. Advanced Matching / Recommendation System

Based on user evaluations and shared subjects, the algorithm suggests study
partners. Users with comparable subjects and higher ratings are prioritized and
shown first using a straightforward matching mechanism.

### User Story Link
> "As a student, I want to find the best study partners based on my interests and ratings."

### Importance
Improves user experience by helping users quickly find high-quality matches.

---

# 4. System Architecture and Technical Overview

The program uses an MVC-based full-stack architecture:

- Frontend: Dynamic rendering with pug templates
- Backend: Node.js with Express.js managing logic and routes
- Database: MySOL storing Users, listings, tags, and messages
- Session Management: Express-session for authentication


## System Workflow

1. User sends request from browser  
2. Express route processes request  
3. Data retrieved/stored in MySQL  
4. Pug template renders dynamic page  
5. Response returned to user

This Scalability and focus separation are guaranteed by this framework.
The project aligns with the theme of “Sharing, exchange and building community” by
providing a platform where students can support each other academically without
financial exchange.
By giving students, a forum to encourage one another academically without
exchanging money, the project is in line with the subject of "Sharing, exchange, and
building community." In order to preserve data integrity and relationships, the
database's relevant tables—such as Users, StudyRequests, Messages, and Ratings—
are connected via foreign keys. 

---

# 5. DevOps and CI/CD Implementation

The routine verifies that the application builds correctly and installs project dependencies. This guarantees early error detection and upholds code quality throughout the
team.

## Docker

### Features
- Docker containers are used to run the application.
- guarantees a uniform atmosphere for every team member.
- makes deployment and setup easier

---

## GitHub Actions (CI/CD)

- GitHub Actions was used to develop the CI workflow.
- Operates automatically upon code push
- Confirms the project's successful construction.
  

This illustrates the application of contemporary DevOps techniques.

---

# 6. Agile Development and Team Collaboration

The team used a GitHub Kanban board and an Agile Scrum methodology.

## Board Columns
- Backlog
- Ready
- In Progress
- In Review
- Done

To monitor progress and guarantee responsibility, tasks were updated on a frequent basis.

Tasks were updated regularly to:
- Monitor progress
- Improve accountability
- Support collaboration

---



# 7. Team Contribution

**Usha**
-Implemented authentication system
- Managed GitHub repository and workflow
- Added GitHub Actions
- Backend Development
  
**Niraj**
-Database updates for messaging
- Backend logic for filtering and messaging
- Debugging and integration support
  
**Prasansa**
- UI design and layout improvements
- Created Forms(study request, messaging)
- Improved user experience

---

# 8. Screenshots of Application

## Included Screenshots

I. Home Page  

![images/home_page.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/home_page.png)

II. Register Page 
![images/register_page.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/register_page.png)

III. Login Page  
![images/login_page.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/login_page.png)

IV. User List / Study Buddies Page  
![images/userlist.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/userlist.png)

V. User Profile Page
![images/user_profile_page.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/user_profile_page.png)

VI. Study Requests / Listing Page 
![images/study_request_listing_page.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/study_request_listing_page.png)

7. Create Study Request Page  
![images/create_study_request.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/create_study_request.png)

9. Messaging Page  
![images/send_message.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/send_message.png)

11. View Messages  
![images/view_messages.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/view_messages.png)

13. Give Rating to Another User  
![images/rating.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/rating.png)

15. View and Edit Own Profile Page  
![images/profile_page .png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/profile_page%20.png)

![images/student_profile.png](https://github.com/kiranbhusalusha-bit/study-buddies/blob/3a8a3c6b96a964b9c81611390f575adb2e698f80/images/student_profile.png)

The following screenshots are organized to show the application's main
features and user journey.

---

# 9. Ethical Considerations

The following ethical considerations were taken into account:

**Privacy**  
Only essential user information is stored and protected.

**User Safety**  
The platform is designed to reduce misuse and inappropriate behavior.

**Inclusivity**  
The system is accessible to students from diverse backgrounds.

---

# 10. Future Improvements

- Instant messaging platform
- Advanced recommendation algorithm
- Message notifications
- Better mobile responsiveness
- Password encryption and increased security

The application is functional, scalable, and ready for future enhancement.

---

# 11. Conclusion

In Sprint 4, A functional MVP of the Study Buddies platform was successfully delivered. User login, the ability to create study requests, messaging, and filtering are now
features of the system.
The project illustrates:
- Full-stack web development
- Agile cooperation and teamwork
- Utilizing contemporary tools (GitHub, Docker, CI/CD)
- Application of actual user requirements  
The program is scalable, operational, and prepared for additional improvement.

---

# 12. References

1. Node.js Documentation. Available at: https://nodejs.org/en/docs/  
2. Express.js Documentation. Available at: https://expressjs.com/  
3. MySQL Documentation. Available at: https://dev.mysql.com/doc/  
4. Pug Template Engine Documentation. Available at: https://pugjs.org/api/getting-started.html  
5. Docker Documentation. Available at: https://docs.docker.com/  
6. GitHub Actions Documentation. Available at: https://docs.github.com/en/actions  
7. Atlassian Agile Guide. Available at: https://www.atlassian.com/agile  
8. K. Schwaber and J. Sutherland, *The Scrum Guide*, 2020. Available at: https://scrumguides.org/  
9. Mozilla Developer Network, “Model View Controller (MVC).” Available at: https://developer.mozilla.org/en-US/docs/Glossary/MVC  
10. OWASP Authentication Cheat Sheet. Available at: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html  
11. Express.js Middleware Guide. Available at: https://expressjs.com/en/guide/using-middleware.html  
12. MySQL JOIN Syntax. Available at: https://dev.mysql.com/doc/refman/8.0/en/join.html  
13. Git Documentation. Available at: https://git-scm.com/docs  
14. WebSockets API Documentation. Available at: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API  
15. REST API Architectural Style. Available at: https://restfulapi.net/  

 
 
 
 
 
 
 
 
 
 
 

