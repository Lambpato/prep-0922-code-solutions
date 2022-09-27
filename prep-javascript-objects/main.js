var person = {
  firstName: 'Lamberto',
  lastName: 'Martinez',
  hobby: 'I love to Sew when I have time'
};

console.log(person);

var fullName = (person.firstName + ' ' + person.lastName);

console.log('The name of the person is:', fullName);

person.job = 'none';

console.log("This person's current job is:", person.job, '(he is jobless)');

person.previousJob = 'overnight stocker at Walmart';

console.log('This persons previous job was:', person.previousJob);

console.log(person);
