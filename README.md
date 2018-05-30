# React-Redux-Blog
This is a Single-Page Application (SPA) using the MERN stack (MongoDB, Express, React, Node). The front end is built with HTML, CSS and JavaScript while also using the React.js and Redux libraries. The SPA navigation is set up using the react-router-dom package. The application's back end functionality is provided by an API that uses Node, Express, and MongoDB. With the app a user can use an API Key to access thier own personal blog where they can view posts, create new posts, and delete an old post. This is done by using the axios package to make requests to the API routes. The App also uses the MaterializeCSS library for some extra front end styling.

---

- When the user first navigates to the application they will be directed to the home page. Here there are info cards for each of the posts on the blog with the title displayed as well as a few preview characters of the post. From this page the user can either click on one of the cards to be redirected to the specific post page, or they can click on the round button on the bottom right corner of the page to open up a form to create a new post.
![HOME PAGE](/read_me/1-home.png)

- If the user clicks on the create a new post button they will be redirected to a form to enter thier form inputs. On the top is the title of the post, then the categories or tags they would like to assign the post, and finally a textarea where they can enter their post content. Hitting the Cancel button will bring the user back to the home page with thier form data not saved. Hitting the Submit button with send the new post to the database and redirect the user back to the home page once the request is complete, witht thier newly added post info card displaying on the home page.
![CREATE POST](/read_me/2-new-post.png)

- THREE
