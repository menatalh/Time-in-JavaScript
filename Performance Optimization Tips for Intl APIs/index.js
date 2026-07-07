// Practical Usage
const userLocales = navigator.languages;
console.log(userLocales)

const appLocales= ['de-DE','en-US'];

const negotiated = Intl.DateTimeFormat.supportedLocalesOf(userLocales, {
    localeMatcher: 'best fit',
})

console.log(negotiated)

// CORRECT: Create formatter once, reuse many times
const dateFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: "medium",
});

function formatDateGood(date) {
    return dateFormatter.format(date); // Fast!
}

// PATTERN
const formatterCache = new Map();

function getFormatter(locale, options) {
    const key = `${locale}::${JSON.stringify(options)}`;

    if(!formatterCache.has(key)) {
        formatterCache.set(key, new Intl.DateTimeFormat(locale, options));
    }

    return formatterCache.get(key);
}

function formatDate(date, locale, options) {
    return getFormatter(locale, options).format(date);
}