let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Sleep', 7],
    ['Play Game', 2],
    ['Study', 3],
    ['Traveling', 2]
]
// console.table(activities);

activities.forEach(activitie => {
    let percentage = ((activitie[1] / 24) *100).toFixed();
    activitie[2] = percentage + '%'
})
// console.table(activities);

// Removing item

activities.forEach((activity)=>{
    activity.pop(1);
})
console.table(activities)

/// inner data
activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});