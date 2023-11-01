function meetings(inputMeetings) {
  const meetings = {};
  const scheduleMeetings = [];

  for (const meeting of inputMeetings) {
    const [weekDay, name] = meeting.split(" ");

    if (meetings[weekDay]) {
      console.log(`Conflict on ${weekDay}!`);
    } else {
      console.log(`Scheduled for ${weekDay}`);
      meetings[weekDay] = name;
    }
  }

  for (const weekDay in meetings) {
    scheduleMeetings.push(`${weekDay} -> ${meetings[weekDay]}`);
  }
  console.log(scheduleMeetings.join("\n"));
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
