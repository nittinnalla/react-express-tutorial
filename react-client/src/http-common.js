import axios from "axios";

export default axios.create({
  baseURL: "https://react-express-tutorial-1.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});