//Make sure that any new or updated ideas are still worth one million
const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;
    let value = numWeeks * weeklyRevenue;
    if (value >= 1000000) {
        res.send(value);
    } else {
        res.status(400).send(value);
    };
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;