module.exports = function(eleventyConfig)
{
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDateFilter", (dateObj) => {
        if (!(dateObj instanceof Date)) {
            dateObj = new Date(dateObj);
        }

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        
        const day   = weekdays[dateObj.getDay()];
        const month = months[dateObj.getMonth()];
        const date  = dateObj.getDate();
        const year  = dateObj.getFullYear();

        return `${day} ${month} ${date < 10 ? "0" + date : date} ${year}`; // Mon Jun 14, 2021
});


    return { dir: {input: "src", output:"public" } }; 
}