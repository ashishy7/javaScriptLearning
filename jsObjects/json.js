
//object destructuring---{}
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


//api call data set json object-js object notation
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }