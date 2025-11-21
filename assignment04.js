// Function that simulates data fetching using setTimeout
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success response
            resolve("Data fetched successfully");

            // To simulate an error, uncomment the line below:
            // reject("Error: Unable to fetch data");
        }, 2000); // 2 seconds delay
    });
}

// Async function using async/await
async function getData() {
    try {
        console.log("Fetching data...");

        // Wait until the promise resolves
        const result = await fetchData();

        // Display success message
        console.log(result);

    } catch (error) {
        // Handle any errors
        console.error(error);
    }
}

// Call the async function
getData();
