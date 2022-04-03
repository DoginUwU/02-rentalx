/* eslint-disable no-empty */
import fs from "fs";
import { resolve } from "path";

const deleteFileFromUploads = async (fileName: string): Promise<void> => {
    const absoluteFilePath = resolve(
        __dirname,
        "..",
        "..",
        "uploads",
        ...fileName.split("/")
    );

    try {
        await fs.promises.stat(absoluteFilePath);
    } catch (error) {}

    await fs.promises.unlink(absoluteFilePath);
};

export { deleteFileFromUploads };
