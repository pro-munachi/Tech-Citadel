const data = [
  {
    name: "Madu Stanley",
    class: "Primary 5",
    password: "12345",
    username: "madu",
    uid: 1,
    image:
      "data:image/jpeg;base64,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",
    subjects: [
      {
        name: "English Language",
        id: 1,
        exam: "60/70",
        assessment: "20/30",
        teacher: "Mrs Abimbola",
      },
      {
        name: "Maths",
        id: 2,
        exam: "52/70",
        assessment: "17/30",
        teacher: "Mr Philips",
      },
      {
        name: "Social Studies",
        id: 3,
        exam: "45/70",
        assessment: "22/30",
        teacher: "Miss Dominic",
      },
      {
        name: "Home Economics",
        id: 4,
        exam: "67/70",
        assessment: "28/30",
        teacher: "Mrs Trent",
      },
    ],
  },
];

export default data;
