import { Request, Response } from "express";
import { getCollections, getCollection } from "../utils/querys";

export const getAdminCollections = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(404).send({ error: "admin id is required" });
    }
    const collections = await getCollections(Number(id));

    res.status(200).send({ status: "success", data: collections });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

export const getAdminCollection = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { adminId, collectionId } = req.params;
  try {
    if (!adminId || !collectionId) {
      res
        .status(404)
        .send({ error: "admin id and collection id are required" });
    }
    const collection = await getCollection(
      Number(adminId),
      Number(collectionId)
    );

    res.status(200).send({ status: "success", data: collection });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};
