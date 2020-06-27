export class WorkExperienceRole {
  roleTitle: string;
  businessUnit: string;
  startDate: string;
  endDate: string;
  description: string[];
}


export const workExperienceList1 = [
  createWorkExperience('MANAGER SOFTWARE ENGINEERING',
    'Transformation Products',
    'APRIL 2020',
    'PRESENT',
    []),
  createWorkExperience('SENIOR MANAGER SOFTWARE ENGINEERING',
    'Internal Products & Services',
    'AUGUST 2019',
    'APRIL 2020',
    []),
  createWorkExperience('MANAGER SOFTWARE ENGINEERING',
    'Internal Products & Services',
    'SEPTEMBER 2018',
    'AUGUST 2019',
    ['Managed the engineering team in Toronto.',
      'Grew the engineering team by reviewing resumes, performing technical screenings, and conducting interviews.',
      'Mentoring of the team to ensure they’re learning new skills and growing through taking on more responsibility and new challenges.']),
  createWorkExperience('Staff Software Engineer',
    'Internal Products & Services',
    'AUGUST 2017',
    'SEPTEMBER 2018',
    ['Developed and maintained Spring and Ruby on Rails applications specifically for Pivotal internal use.',
      'Lead Engineer of the engineering team in Toronto.',
      'Worked on a distributed team which would require extended remote development sessions with coworkers in the San Francisco office.',]),
  createWorkExperience('Engineering Manager',
    'Pivotal Labs',
    'JULY 2014',
    'AUGUST 2017',
    ['Managed up to 6 software developers.',
      'Coordinated with direct reports on timesheet and expense accuracy in line with the organization\'s budget policies.',
      'Attended to the professional growth of my direct reports, both technically and personally, through consistent one-on-one reviews and actionable, constructive feedback. Many of my previous reports went on themselves to become managers or Lead Engineers within the Pivotal Labs organization.',
      'Worked closely with the office leadership to promote growth of our engineering team through technical screening, intern recruiting and the conducting of interviews.',
      'Developed several applications for clients on mobile and backend web.',
      'Was involved in extracurricular activities around the office including running the morning stand up and hosting office talent shows.',
    ]),
  createWorkExperience('Agile Engineer',
    'Pivotal Labs',
    'FEBRUARY 2011',
    'JULY 2014',
    ['Developed several mobile applications for clients on various platforms including Android, iOS, BlackBerry and Windows Phone.',
      'Used Agile and Extreme Programming methodologies including Pair Programming, Test Driven Development, and Scrums.',
    ]),


];

export const workExperienceList2 = [
  createWorkExperience('Programmer Analyst',
    '',
    'JUNE 2008',
    'FEBRUARY 2011',
    ['Designed, developed and supported various reporting and database processes using UNIX batch scripting on Oracle Databases.',
      'Re-wrote several legacy applications using modern tools such as webMethods and GWT.',
      'Wrote several pieces of support documentation for various processes using UML and standard design practices.',
      'Successfully migrated legacy processes from Oracle 8i database to Oracle 10g database.',
      'Wrote several applications in C# to help improve personal productivity.',
      'Wrote several monitoring services to detect system and application failures'])];

function createWorkExperience(roleTitle: string,
                              businessUnit: string,
                              startDate: string,
                              endDate: string,
                              description: string[]
): WorkExperienceRole {
  const workExperience = new WorkExperienceRole();

  workExperience.roleTitle = roleTitle;
  workExperience.businessUnit = businessUnit;
  workExperience.startDate = startDate;
  workExperience.endDate = endDate;
  workExperience.description = description;

  return workExperience;

}


