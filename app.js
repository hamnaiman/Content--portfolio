// script.js
let type= new Typed ('#changing-text' ,{
    strings  : ['Front-end Developer' , 'Geologist' , 'Tutor'],
    typeSpeed :50,
    backSpeed : 50,
    loop : true

});
 document.getElementById("downloadCvBtn").addEventListener("click", function() {
        // Create an invisible anchor element
        var link = document.createElement('a');
        
        // Set the download attribute with the path to your CV file
        link.href = 'Content Wrting Hamna.cv.pdf';  // Path to your CV file
        link.download = 'Hamna_Iman_CV.pdf';  // Name the downloaded file
        
        // Append the link to the body
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Remove the link from the document after downloading
        document.body.removeChild(link);
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Get all download buttons
        const downloadButtons = document.querySelectorAll(".project-link");
    
        // Define document paths for each sample
        const documents = {
            "Blog Writing": "Tea making ways(Hamna Iman).pdf", // Change to your actual file path
            "Poem": "moonlight.poem.jpg" // Change to your actual file path
        };
    
        // Add event listeners to each button
        downloadButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default anchor behavior
    
                const projectTitle = this.parentElement.querySelector("h3").innerText; // Get the project title
                const fileUrl = documents[projectTitle]; // Get the corresponding file path
    
                if (fileUrl) {
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = fileUrl.split("/").pop(); // Extract filename from path
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert("File not found!"); // Error handling if the file path is incorrect
                }
            });
        });
    });
    
