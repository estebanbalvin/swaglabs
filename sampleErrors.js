const input = "alert('Hello, world!')";
eval(input); // Executes the input as code


const user = {
  username: "johndoe",
  password: "password123",
};


const userInput = "<script>alert('Hello, world!');</script>";
document.write(userInput); // Writes the input directly to the document


const key = "mySecretKey";
const encryptedData1 = encryptData(data1, key);
const encryptedData2 = encryptData(data2, key);


const token = "my-auth-token";
localStorage.setItem("authToken", token);


document.cookie = "username=johndoe";

const username = req.body.username;
const password = req.body.password;

const user = db.getUserByUsername(username);

if (user && user.password === password) {
  res.send("Login successful");
} else {
  res.send("Login failed");
}
