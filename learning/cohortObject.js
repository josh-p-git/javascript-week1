const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Jim', 'Bob', 'Sue']
};

const message = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
  };

console.log(message(cohort));
