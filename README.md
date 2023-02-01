POSTS FOR JESUS
===

​
Introduction
---
This project was inteded to be used when the user sees jesus in his everyday life. The user will be able to login and create a post and where they witness a sighting of the good lord. They will also be able to view other peoples lists of jesus they have seen as well.  
​

​
**DB Schema and Model**
```
const postSchema = mongoose.Schema({
  title: String,
  description: String,
});

​
**Express Controller Method**
```
const saveUpdatedPost = () => {
    console.log(updatedPost);

    axios
      .put(`/update/${updatedPost.id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

​
**React Modal Component**
```
return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Posts page</h1>
      <Button
        variant="outline-dark"
        style={{ width: "100%", marginBottom: "1rem" }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="title"
            name="title"
            value={updatedPost.title ? updatedPost.title : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={updatedPost.description ? updatedPost.description : ""}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
                style={{
                  marginBottom: "1rem",
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                }}
                key={post._id}
              >
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    padding: "1rem",
                  }}
```
​
**Client-side Routing**
```
 <Button
        onClick={() => navigate("posts")}
        variant="outline-success"
        style={{ width: "100%" }}
      >
        ALL POSTS
      </Button>     
```
---
​
Author & Contributor List
---
ariel
jesus
---
​
Technologies Used
---
Technologies:
VSCode, MongoDB, HTML5, CSS3, Javascript
​
Libraries:
React.js, Mongoose ODM
​
Framework:
Bootstrap, Node.js, Express.js
​
APIs:
Axios, CORS
​
---
​
Getting Started
--- 
The project was planned on a [Trello Board]
---
​
Unsolved Problems
---
getting the posts to create and show up as an itemized list for the client to edit and work on
​
---
​
Future Enhancements
---
1. allowing user to pin their location per post
2. authentication login for reals this time
​