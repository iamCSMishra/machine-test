import dbconfig from "../config/db.config.js";
import user from "../model/user.model.js";

export const save = (request, response, next) => {
  user
    .create(request.body)
    .then(() => {
      return response.status(200).json({ message: "data inserted" });
    })
    .catch((error) => {
      console.log(error);
      return response.status(500).json({ error: "something went wrong" });
    });
};

export const get = (request, response, next) => {
  user
    .find({ name: request.body.name })
    .then((users) => {
      response.json(users);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({ error: "something went wrong" });
    });
};
