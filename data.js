export const startDate = new Date(2011, 1, 1);

export const contacts = {
  1: {
    id: 1,
    name: "Skype",
    value: "jante1989"
  },
  3: {
    id: 3,
    name: "Email",
    value: "jante@ya.ru"
  },
  2: {
    id: 2,
    name: "Location",
    value: "Saint-Petersburg, Russian Federation"
  }
};

export const categories = {
  1: {
    id: 1,
    name: "front-end"
  },
  2: {
    id: 2,
    name: "back-end"
  }
};

export const education = {
  1: {
    name: 'ITMO University',
    dateStart: new Date(2006, 8, 1),
    dateEnd: new Date(2015, 6, 6)
  }
}

export const skills = {
  1: {
    id: 1,
    name: "HTML5",
    category: 1
  },
  2: {
    id: 2,
    name: "CSS3",
    category: 2
  },
  3: {
    id: 3,
    name: "ES6",
    category: 2
  },
  4: {
    id: 4,
    name: "React",
    category: 2
  },
  5: {
    id: 5,
    name: "Redux",
    category: 2
  }
};

export const workExperience = {
  1: {
    dateStart: new Date(2018, 8, 14),
    name: "SEMrush",
    location: "Saint-Petersburg, Russia",
    website: "https://www.semrush.com",
    achievements: [
      {
        description: `SEMrush Affiliate Program new UI development (currently WIP)`,
        skills: [1, 2]
      },
      {
        description: `created interactive webpages (with product demo)`,
        skills: [1, 2]
      }
    ]
  },
  2: {
    dateEnd: new Date(2018, 8, 14),
    dateStart: new Date(2014, 4, 14),
    name: "Wrike",
    location: "Saint-Petersburg, Russia",
    website: "https://www.wrike.com",
    description: "Wrike is a project management software, with headquarters in San Jose, CA.",
    achievements: [
      {
        description: `Developed WYSIWYG Email Builder, which allows the Marketing Operations team to create, proofread, automatically translate emails via the Translation Management System (Crowdin) and sync them with CRM (Marketo). This project started as an initiative of mine. (Angular, node.js, MongoDB)`,
        skills: [1, 2]
      },
      {
        description: `Created custom landing pages with animation and games`,
        skills: [1, 2]
      },
      {
        description: `Created email layouts compatible with all major email clients (interactive as well)`,
        skills: [1, 2]
      },
      {
        description: `Took part in wrike.com website development `,
        skills: [1, 2]
      },
    ]
  },

  3: {
    dateEnd: new Date(2014, 4, 14),
    dateStart: new Date(2011, 11, 14),
    name: "Veeam",
    location: "Saint-Petersburg, Russia",
    website: "https://www.wrike.com",
    achievements: [
      {
        description: `Created layouts for numerous Landing pages and emails.`,
        skills: [1, 2]
      },
      {
        description: `Created some web applications for internal needs:`,
        skills: [1, 2]
      },
      {
        description: `WYSIWYG newsletter emails editor (javascript <-REST-> PHP+MySQL)`,
        skills: [1, 2]
      },
      {
        description: `Several email automation apps (JS, PHP, cURL)`,
        skills: [1, 2]
      },
      {
        description: `Those applications were developed on my own initiative`,
        skills: [1, 2]
      },
      {
        description: `Maintained and created new modules for veeam.com website`,
        skills: [1, 2]
      },
      {
        description: `Created and updating company wordpress portal/blog.`,
        skills: [1, 2]
      }
    ]
  },
  4: {
    dateEnd: new Date(2014, 4, 14),
    dateStart: new Date(2011, 11, 14),
    name: "ENDY lab",
    location: "Saint-Petersburg, Russia",
    website: "https://www.wrike.com",
    achievements: [
      {
        description: `Websites, UI layouts.`,
        skills: [1, 2]
      }
    ]
  }
};
