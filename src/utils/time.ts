export type Time = `${number}:${number}`;

export const subtractTime = (from: Time, to: Time) => {
  const [fromHours, fromMinutes] = from.split(":").map(Number);
  const [toHours, toMinutes] = to.split(":").map(Number);

  const totalFromMinutes = fromHours * 60 + fromMinutes;
  const totalToMinutes = toHours * 60 + toMinutes;

  if (totalToMinutes - totalFromMinutes < 0) {
    console.error(
      `Can't subtract later time (${to}) from earlier time (${from})`
    );
  }
  return totalToMinutes - totalFromMinutes;
};
