const { log } = console;
log("JS INTL API Session");

// -- INTL: Constructor --
// Signature
// new Intl.DateTimeFormat(locales?, options?)
log("-- Constructor --")
{
  const formater = new Intl.DateTimeFormat();
  log(formater.format(new Date("2026-03-15")))
  log(formater.format(new Date.now()))
  log(formater.format(17420406000000))
  log(formater.format());

  // With Locales

  const usFmt = new Intl.DateTimeFormat("en-US");
  const ukFmt = new Intl.DateTimeFormat("en-UK");
  const deFmt = new Intl.DateTimeFormat("de-DE");
  const jpFmt = new Intl.DateTimeFormat("ja-JP");

  const date = new Date.now();
  log(usFmt.format(date))
}

// -- INTL: Formate Date & Time with Options --
log("-- Formate Date & Time with Options --")
{
  const date = new Date.now();
  const dtFmt = new Intl.DateTimeFormat("en-US", {dateStyle: "short"}); // full, long, medium, short
  log(dtFmt.format(date))
}

{
  const date = new Date.now();
  const tmFmt = new Intl.DateTimeFormat("en-US", {timeStyle: "short"}); // full, long, medium, short
  log(tmFmt.format(date))
}

{
  const date = new Date.now();
  const fmt = new Intl.DateTimeFormat("en-US", {dateStyle: "full", timeStyle: "full"}); // full, long, medium, short
  log(fmt.format(date))
}

{
  const date = new Date.now();
  const fmt = (locale, opts) => new Intl.DateTimeFormat(locale, opts).format(date)
  log(fmt.format(date))
  log(fmt("en-US", {month: "long", day: "numeric", year: "numeric"}));
  log(fmt("en-US", {weekday: "long"}));
  log(fmt("en-US", {hour: "2-digit", minute: "2-digit", hour12: false}));
} 

// Full Time for logs
log(
  fmt("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, 
  })
)