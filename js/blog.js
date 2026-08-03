document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    fetch("data/posts.json")
        .then(response => response.json())
        .then(posts => {

            // Sort posts from newest to oldest using the date property
            posts.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });

            posts.forEach(function (post, index) {

                const postElement = document.createElement("div");
                postElement.classList.add("post-card");

                // Format the publication date
                const formattedDate = new Date(post.date).toLocaleDateString(
                    "en-US",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );

                // Add the post content
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.summary}</p>
                    <p class="post-meta">${formattedDate} | ${post.category}</p>
                    <button class="read-more">Read More</button>
                    <p class="post-content" style="display: none;">
                        ${post.content}
                    </p>
                `;

                // Add a "Latest Post" badge beside the most recent post
                if (index === 0) {
                    const heading = postElement.querySelector("h2");
                    heading.innerHTML += ' <span class="latest-badge">Latest Post</span>';
                }

                // Read More button 
                const button = postElement.querySelector(".read-more");
                const content = postElement.querySelector(".post-content");

                button.addEventListener("click", function () {
                    if (content.style.display === "none") {
                        content.style.display = "block";
                        button.textContent = "Read Less";
                    } else {
                        content.style.display = "none";
                        button.textContent = "Read More";
                    }
                });

                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});