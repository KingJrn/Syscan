// Import the axios module
import axios from "axios";
//Base Url
const BaseUrl = "https://dc99-197-210-84-20.ngrok-free.app";

// Endpoints
const CREATE_NODE_PATH = () => "/nodes";
export default {
  createNode: function (NodeData, callback) {
    axios.post(BaseUrl + CREATE_NODE_PATH(), NodeData, {
      headers: {
        Authorization: 'Bearer d8a2ad21f135022924ec0b84ae03ad8b'
      }
    }
    )
      .then((response) => {
        callback(response.data);
      })
      .catch((err) => {
        callback(err.response);
      });
  },
}