export default {
  HomePage: {
    title: 'Home dashboard',
    menuList: {
      createStoryTitle: 'Create story',
      createStoryDesc: 'Create a new story for your users.',

      showStoriesTitle: 'Show stories',
      showStoriesDesc: 'Show your created stories and check analytics.',

      personalDateTitle: 'Your personal data',
      personalDateDesc: 'Edit your personal data.',
    },
  },
  example: {
    helloUser: 'I am a fake user, my name is {{name}}',
  },

  menu: {
    login: 'login',
    home: 'home',
    dashboard: 'dashboard',
    stories: 'stories',
    logout: 'logout',
  },
  language: {
    title: 'Lang',
    pl: 'polish',
    en: 'english',
  },
  stories: {
    title: 'Title',
    type: 'Type',
    photo: 'Photo',
    description: 'Description',
    language: 'Language',
    createdAt: 'Created At',
    isFree: 'Is for Free',
    hashtags: 'Hashtags',
    availableDate: 'Available Date',
    disable: 'Disable',
  },
  storyPage: {
    title: 'Stories',
    modalVisibilityTitle: 'Select column visibility',
  },

  createStoryPage: {
    mainTitle: 'Create a story for meditations',
    title: 'Title',
    titlePlaceholder: 'Input title for story...',
    desc: 'Description',
    descPlaceholder: 'Input description for story...',
    type: {
      title: 'Story type',
      placeholder: 'Select story type...',
      SINGLE: 'Single meditation',
      DAILY_SINGLE: 'Daily meditation',
      SERIES_DAY_BY_DAY: 'Story with series of meditation',
      SERIES_SAME_TOPIC: 'Story with the same topic',
      SERIES_TIME_LAPSE: 'Story with different time',
    },
    language: 'Language',
    languagePlaceholder: 'Select language for story...',
    isFree: 'Available without premium: for free',
    availableDate: 'Available Date ',
    hashtags: 'Hashtags',
    photo: 'Background Photo of story',
    meditationsTitle: 'Create meditations',
    createMeditation: {
      title: 'Meditation number: {{sequence}}',
      audio: 'Load audio',
      delete: 'Delte',
      add: 'Add new meditation',
    },
    reset: 'Reset all fields',
    save: 'Save story',
    error: {
      title: 'Please input title',
      desc: 'Please input description',
      type: 'Please input type',
      language: 'Please input language',
      hashtags: 'Please input at least one hashtags',
      photo: 'Please input photo',
      titleMeditation: 'Please input meditation title',
      audio: 'Please input medtiation audio',
    },
  },
  modal: {
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  upload: {
    info: "Drag 'n' drop some files here, or click to select files",
    name: 'File name: ',
    duration: 'Duration: ',
    wrongType:
      'Wrong type of file, please ensure that file which you want to upload is in correct type, if yest please contact administrator',
  },
  storyType: {
    SINGLE: 'single',
    DAILY_SINGLE: 'daily single',
    SERIES_DAY_BY_DAY: 'series day by day',
    SERIES_SAME_TOPIC: 'series with the same topic',
    SERIES_TIME_LAPSE: 'series with time laps',
  },
  hashtags: {
    all: 'all',
    sleep: 'sleep',
    stress: 'stress',
    focus: 'focus',
    anxiety: 'anxiety',
    beginers: 'beginners',
    'self-care': 'self care',
    relax: 'Relax',
    work: 'Work',
    mother: 'for mums',
    development: 'Development',
    health: 'Health',
    relationship: 'Relationship',
    happiness: 'Happiness',
  },
  Calendar: {
    days: {
      day0: 'Sun',
      day1: 'Mon',
      day2: 'Tue',
      day3: 'Wed',
      day4: 'Thu',
      day5: 'Fri',
      day6: 'Sat',
    },
    daysLong: {
      day0: 'Sunday',
      day1: 'Monday',
      day2: 'Tuesday',
      day3: 'Wednesday',
      day4: 'Thursday',
      day5: 'Friday',
      day6: 'Saturday',
    },
    month: {
      January: 'Jan',
      February: 'Feb',
      March: 'Mar',
      April: 'Apr',
      May: 'May',
      June: 'Jun',
      July: 'Jul',
      August: 'Aug',
      September: 'Sep',
      October: 'Oct',
      November: 'Nov',
      December: 'Dec',
    },
    monthLong: {
      January: 'January',
      February: 'February',
      March: 'March',
      April: 'April',
      May: 'May',
      June: 'June',
      July: 'July',
      August: 'August',
      September: 'September',
      October: 'October',
      November: 'November',
      December: 'December',
    },
  },
  TimePicker: {
    save: 'SAVE',
    cancel: 'CANCEL',
  },
  LanguageSelector: {
    title: 'Select your language',
  },
}
