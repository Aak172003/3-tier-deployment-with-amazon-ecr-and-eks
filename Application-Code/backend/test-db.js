const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://prajapatiaakash364_db_user:8mnCL3KxRh6qVEDX@3tierdb.wk8ikhy.mongodb.net/three-tier-deployment?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected directly");
    process.exit(0);
}).catch(console.error);
