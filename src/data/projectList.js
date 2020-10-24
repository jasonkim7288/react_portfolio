const projectList = [
  {
    title: 'OK Jason!',
    desc: '"OK Jason!" app is a voice recognition web application that can answer various questions such as weather, wikipedia, map location, covid-19 statistics, dad jokes, some decorations on the page, etc. All the questions are received with the voice recognition and the answers are spoken by TTS(Text To Speech) and also displayed.',
    techStack: 'ReactJS, Google Maps API, AWS S3 Bucket, ExpressJS, chartjs, Netlify, Heroku',
    deploy: 'https://okjason.netlify.app',
    git: 'https://github.com/jasonkim7288/react_ok_jason',
    picture: `${process.env.PUBLIC_URL + '/images/ok_jason.png'}`
  },
  {
    title: 'Get The Edge',
    desc: 'A web application designed to allow a user to see the latest skills/technologies in demand, as posted in the hundreds of job listings on any of the big name web sites. The results displayed in charts can be invaluable information because it allows you to ensure you\'re investing your time into learning the correct technologies that are currently in demand. You will also be able to see similar technologies and how they compare to the most in demand.',
    techStack: 'ExpressJS, Mongo DB, Express Handlebars, passport-google-oauto20, crawler, chartjs, Heroku',
    deploy: 'https://get-the-edge.herokuapp.com/',
    git: 'https://github.com/jasonkim7288/express_get_the_edge',
    picture: `${process.env.PUBLIC_URL + '/images/get_the_edge.png'}`
  },
  {
    title: 'Weight Prophecy',
    desc: 'Do you want to know how much you are going to weigh after 10 ~ 40 years? This is the right app for you. It will predict your future weight. This app is made by html, css, and javascript. Development has been made with Kalyani, and the whole project duration was 2.5 days.',
    techStack: 'HTML, CSS, Javascript, Tensorflow js, Chart js, Bootstrap, Netlify',
    deploy: 'https://weightprophecy.netlify.app',
    git: 'https://github.com/jasonkim7288/javascript_weightProphecy',
    picture: `${process.env.PUBLIC_URL + '/images/weight_prophecy.png'}`
  },
  {
    title: 'Tutor Booking',
    desc: 'Most aspiring web/mobile developers have very little chance to present, lecture, or discuss their own projects to the others whether it is online or offline. Finishing a project by themselves and not sharing anything with other developers will lose a good opportunity which could have empowered their development and communication skills. Sometimes even learning programming language needs to be get lectured, discussed, or helped by others.',
    techStack: 'Ruby on Rails, Google Maps API, Google Places API, Stimulus JS, Stimulus Reflex, AWS S3 Bucket, Bootstrap',
    deploy: 'https://devtutorbooking.herokuapp.com',
    git: 'https://github.com/jasonkim7288/rails_tutor_booking',
    picture: `${process.env.PUBLIC_URL + '/images/tutor_booking.png'}`
  },
  {
    title: 'JMDb',
    desc: 'JMDb app is clone app of IMDb. Whenever users search some movies, movies list as a result of OMDb api will be stored to JMDb postgreSQL database. You can rate each movie, add each movie to watchlist, and even make comments on each movie.',
    techStack: 'Ruby on Rails, Stimulus Reflex, Devise, Bootstrap, Heroku',
    deploy: 'https://jmdbjason.herokuapp.com',
    git: 'https://github.com/jasonkim7288/rails_jmdb',
    picture: `${process.env.PUBLIC_URL + '/images/JMDb.png'}`
  },
  {
    title: 'Garage Sale',
    desc: 'Garage sale app allow users to upload their garage sales information so that other users can see and find the useful information from it. Users can simply type the area they want to find, and also manage the posts created. If the close date of a post is a week overdue, it will not be displayed and can be deleted by administrator.',
    techStack: 'Ruby on Rails, OmniAuth, Google Maps API, Google Places API, StimulusJS, Bootstrap',
    deploy: 'https://garagesalejason.herokuapp.com',
    git: 'https://github.com/jasonkim7288/rails_garage_sale',
    picture: `${process.env.PUBLIC_URL + '/images/garage_sale.png'}`
  }
];

export default projectList;
