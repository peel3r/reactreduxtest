import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const painRecords = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (painRecord) => {
  return replaceAll(painRecord.title, ' ', '-');
};

class PainRecordApi {
  static getAllPainRecords() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], painRecords));
      }, delay);
    });
  }

  static savePainRecord(painRecord) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPainRecordTitleLength = 1;
        if (painRecord.title.length < minPainRecordTitleLength) {
          reject(`Title must be at least ${minPainRecordTitleLength} characters.`);
        }

        if (painRecord.id) {
          const existingPainRecordIndex = painRecords.findIndex(a => a.id == painRecord.id);
          painRecords.splice(existingPainRecordIndex, 1, painRecord);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          painRecord.id = generateId(painRecord);
          painRecord.watchHref = `http://www.pluralsight.com/courses/${painRecord.id}`;
          painRecords.push(painRecord);
        }

        resolve(Object.assign({}, painRecord));
      }, delay);
    });
  }

  static deletePainRecord(painRecordId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfPainRecordToDelete = painRecords.findIndex(painRecord => {
          painRecord.painRecordId == painRecordId;
        });
        painRecords.splice(indexOfPainRecordToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PainRecordApi;
