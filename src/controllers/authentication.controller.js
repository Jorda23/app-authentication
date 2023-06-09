import { userModel } from "../models/user.model.js"; 
import { permissionModel } from "../models/permission.model.js";
import jwt from "jsonwebtoken";

export const privateArea = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Obtener el token de autorización del encabezado

    if (!token) {
      return res
        .status(401)
        .json({ message: "Missing authorization token" })
        .end();
    }

    const decodedToken = jwt.verify(token, "676964955656985689"); // Verificar y decodificar el token

    const user = await userModel.findOne({
      where: { userName: decodedToken.userName },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" }).end();
    }

    const permission = await permissionModel.findOne({
      where: { permissionName: "private" }, // Cambiar "private" por el nombre del permiso privado deseado
    });

    if (!permission) {
      return res.status(401).json({ message: "Permission not found" }).end();
    }

    if (user.idPermission !== permission.idPermission) {
      return res
        .status(401)
        .json({ message: "User does not have permission for private area" })
        .end();
    }

    res.send(
      "<h1>Great, your credentials are correct, you were able to access the private area</h1>"
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const authToken = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await userModel.findOne({
      where: { userName, password },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid userName or password" })
        .end();
    }

    const payload = {
      userName: user.userName,
      password: user.password,
    };

    const accessToken = jwt.sign(payload, "676964955656985689", {
      expiresIn: "40m",
    });

    res
      .json({
        access_token: accessToken,
        token_type: "Bearer",
        expires_in: "40m",
      })
      .end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
