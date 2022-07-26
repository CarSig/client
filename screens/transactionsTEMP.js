export const dummyTransactions = [{ key: 1, date: "2020-01-01", amount: 100, category: "food", description: "Food" },
{ key: 2, date: "2020-01-03", amount: 1210, category: "bar", description: "Protocol" },
{ key: 3, date: "2021-01-01", amount: -100, category: "pet", description: "Pet food" },
{ key: 1231231, date: "2022-01-01", amount: 1210, category: "bar", description: "Protocol" },
{ key: 2131231, date: "2022-11-01", amount: -101, category: "pet", description: "Pet food" },
{ key: 51, date: "2020-01-06", amount: -140, category: "travel", description: "Georgia" },
{ key: 22, date: "2020-01-03", amount: -210, category: "bar", description: "Protocol" },
{ key: 31, date: "2021-01-01", amount: -100, category: "pet", description: "Pet food" },
{ key: 511, date: "2020-01-06", amount: -140, category: "travel", description: "Georgia" },
{ key: 221, date: "2020-01-03", amount: -210, category: "bar", description: "Protocol" },
{ key: 321, date: "2021-01-01", amount: -100, category: "pet", description: "Pet food" },

{ key: 77, date: "2020-01-06", amount: 100, category: "travel", description: "Georgia" },
{ key: 1321, date: "2021-01-01", amount: 600, category: "pet", description: "Pet food" },

{ key: 177, date: "2020-01-06", amount: 200, category: "travel", description: "Georgia" }]


const categoryColors = {
    food: "red",
    bar: "blue",
    pet: "green",
    travel: "yellow"
}


// create array of objects from dummyTransactions of  unique categories, each has a category and color, array of transactions and total amount
export const uniqueCategories = dummyTransactions.reduce((acc, curr) => {
    if (!acc.some(item => item.category === curr.category)) {
        acc.push({
            category: curr.category,
            color: categoryColors[curr.category],
            transactions: [],
            totalAmount: 0
        })
    }
    // push transaction to transactions array of category objectđ
    acc.forEach(item => {
        if (item.category === curr.category) {
            item.transactions.push(curr)
            item.totalAmount += curr.amount
        }
    }
    )
    return acc
}
    , [])

console.log(uniqueCategories)


