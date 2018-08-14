module.exports = function(mongoose) {
    var QuoteSchema = new mongoose.Schema({
        name: {type: String, required: true},
        quote: {type: String, required: true}
    }, {timestamps: true});
    mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
}