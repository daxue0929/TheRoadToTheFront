require('dotenv').config();


console.log("===============start===============")
console.log(process.env)
console.log("===============end===============")

const config = {
    PORT: process.env.REACT_APP_PORT || 3000,
}

export {config};

