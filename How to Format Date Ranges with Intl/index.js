console.log("-- Format Range --");

{
  const fmt = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const start = new Date("2026-03-15T00:00:00Z");
  const end1 = new Date("2026-03-20T00:00:00Z"); // Same month/year
  const end2 = new Date("2026-04-10T00:00:00Z"); // Different month
  const end3 = new Date("2027-01-15T00:00:00Z"); // Different year

  console.log(fmt.formatRange(start, end1));
  console.log(fmt.formatRange(start, end2));
  console.log(fmt.formatRange(start, end3));
}