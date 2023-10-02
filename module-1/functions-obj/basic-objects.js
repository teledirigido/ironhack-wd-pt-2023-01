let olympicRecords = {
  aFunctionAsValue: function(name) {
    console.log(`Hi ${name}`);
  },
  planets: ['earth','mars','venus'],
  anotherValue: 2,
  isValid: true,
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powel',
  swimming200Men: 'Michael Phelps'
};

olympicRecords.aFunctionAsValue('everyone');

console.log(olympicRecords.planets[1]);
console.log(olympicRecords['planets'][1]);