let _singleton = Symbol();
const LESSON_MODULE_COURSE_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_ID_API_URL = 'http://localhost:8080/api/lesson/LID';
//for find all modules
const LESSON_API_URL = 'http://localhost:8080/api/lesson';

export default class LessonService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new LessonService(_singleton);
    return this[_singleton];
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(
        LESSON_MODULE_COURSE_API_URL
        .replace('CID', courseId).replace('MID', moduleId))
      .then(function(response) {
        return response.json();
      });
  }

  createLesson(courseId, moduleId, lesson) {
    return fetch(LESSON_MODULE_COURSE_API_URL.replace('CID', courseId)
    .replace('MID', moduleId), {
      body: JSON.stringify(lesson),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function(response) {
      return response.json();
    });
  }

  deleteModule(lessonId) {
    return fetch(LESSON_ID_API_URL.replace('LID', lessonId), {
      method: 'delete'
    });
  }
}