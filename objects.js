// Practice: Represent your Pet --------------

let pet = {
  name: "Grits",
  species: "cat",
  nicknames: ["Gritsy Boy", "Bubba", "Kitten"],
  age: 6
}

console.log(pet);

// Practice: Accessing Property Values --------------

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
}

// Output the following:
// Paul McCartney was in the Beatles from 1960 to 1970. 
// He was born in 1942. 
// He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.  
He was born in ${beatles.members[1].birth}.
He contributed heavily to the ${beatles.albums[3]} Album.`)

// Challenge: Political Campaign--------------------------------

const elizabethSanger = {
  district: 5,
  platform: [
    { subject: "taxes", stance: "Close tax loopholes" },
    { subject: "jobs", stance: "yes" },
    { subject: "infrastructure", stance: "grow" },
    { subject: "healthCare", stance: "audit" },
    { subject: "crime", stance: "fight" }
  ],
  donationUrl: "www.google.com",
  events: [
    { date: "10/9/2018", title: "Register to Vote" },
    { date: "11/1/2018", title: "Rally" },
    { date: "11/6/2018", title: "Voting Day" }
  ],
  volunteerInformation: [
    {
      volName: "Joe Blow",
      volAddress: "123 main st.",
      volEmail: "joeblow@email.com",
      volAvail: "24/7",
      volActivities: "phones, door-to-door, donations"
    },
    {
      volName: "Jane Smith",
      volAddress: "555 park ave.",
      volEmail: "janesmith@email.com",
      volAvail: "mornings",
      volActivities: "email blasts"
    }
  ],
  biography: "I'm ready to drain the swamp",
  imageGallery: [
    {
      imageUrl: "https://static1.squarespace.com/static/594516cd2cba5e0fcda7a240/5ab103088a922d6ee3c49ace/5ab1048daa4a991774b45132/1521550514277/Amy+McGrath+photo.jpg?format=300w",
      type: "headshot"
    },
    {
      imageUrl: "https://static1.squarespace.com/static/594516cd2cba5e0fcda7a240/5ab103088a922d6ee3c49ace/5ab1036b562fa7fcbcbf28fe/1521550347098/IMG_0374+copy.JPG?format=300w",
      type: "family"
    },
    {
      imageUrl: "https://static1.squarespace.com/static/594516cd2cba5e0fcda7a240/59ece74cf43b554d80bca83b/5a70e2d724a69497aaf7d167/1517347552789/19575317_178915706060311_2251861723794326346_o.jpg?format=2500w",
      type: "constituents"
    }
  ],
  missionStatement: "I've been everywhere man, I've been everywhere",
  voterRegUrl: "www.google.com"
};

// display the values in console--------------------------

console.log(elizabethSanger);

// Advanced Challenge: write functions to modify values of each object---

// district

const updateDistrict = (newDistrict) => {
  elizabethSanger.district = newDistrict;
}
updateDistrict(6);

// platform

const updatePlatform = () => {
  let newPlatform = elizabethSanger.platform.push({subject:"Sexual Harassment", stance: "Don't believe bullies and overlook the truth."});
}
updatePlatform();

// donationUrl

const updateDonationUrl = (newDonationUrl) => {
  elizabethSanger.donationUrl = newDonationUrl;
}
updateDonationUrl();

// events

const updateEvents = () => {
  let newEvent = elizabethSanger.events.push({date: "10/31/2018", title:"Halloween Party"});
}
updateEvents();

// volunteer data

const updateVolInfo = () => {
  let newVol = elizabethSanger.volunteerInformation.push({volName: "Mr. Jones", volAddress: "456 Hall St.", volEmail: "mrjones@gmail.com", volAvail: "nights", volActivities: "coding"});
}
updateVolInfo();

// bio

const updateBio = (newBio) => {
  elizabethSanger.biography = newBio;
}
updateBio("I grew up in the south and I know what it's like to be from a small town.");

// images

const updateImages = () => {
  let newImages = elizabethSanger.imageGallery.push({imageUrl:"data:image/jpeg;base64,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", type:"a picture of a cat"});
}
updateImages();

// mission statement

const updateMission = (newMission) => {
  elizabethSanger.missionStatement = newMission;
}
updateMission("No new taxes!!");

// voting URL

const updateVoteUrl = (newVoteUrl) => {
  elizabethSanger.voterRegUrl = newVoteUrl;
}
updateVoteUrl();