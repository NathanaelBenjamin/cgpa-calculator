export function createLimits(scale){

    let grades;
    scale === 4 ? grades = [{grade: "F" ,l: 0, u: 44}, {grade: "D" ,l: 45, u: 49}, {grade: "C" ,l: 50, u: 59}, {grade: "B" ,l: 60, u: 69}, {grade: "A" ,l: 70, u: 100}] : grades = [{grade: "F" ,l: 0, u: 39}, {grade: "E" ,l: 40, u: 44}, {grade: "D" ,l: 45, u: 49}, {grade: "C" ,l: 50, u: 59}, {grade: "B" ,l: 60, u: 69}, {grade: "A" ,l: 70, u: 100}]; 

    let categories;
    scale === 4 ? categories = [
        { class: "First Class Honours",upperLimit: 4.00,lowerLimit: 3.50},
        {class: "Second Class Upper Division",upperLimit: 3.49,lowerLimit: 3.00},
        { class: "Second Class Lower Division",upperLimit: 2.99,lowerLimit: 2.50},
        {class: "Third Class",upperLimit: 2.49,lowerLimit: 2.00},
        {class: "Pass",upperLimit: 1.99,lowerLimit: 1.50},
        {class: "Fail",upperLimit: 1.49,lowerLimit: 0}
    ] : categories = [
        { class: "First Class Honours",upperLimit: 5.00,lowerLimit: 4.50},
        {class: "Second Class Upper Division",upperLimit: 4.49,lowerLimit: 3.50},
        { class: "Second Class Lower Division",upperLimit: 3.49,lowerLimit: 2.40},
        {class: "Third Class",upperLimit: 2.39,lowerLimit: 1.50},
        {class: "Pass",upperLimit: 1.49,lowerLimit: 1.00},
        {class: "Fail",upperLimit: 0.99,lowerLimit: 0}
    ]

    return { grades, categories};
}