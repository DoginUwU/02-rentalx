import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

interface IUploadDTO {
    upload(folder: string): {
        storage: multer.StorageEngine;
    };
}

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", "uploads", folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);
                },
            }),
        };
    },
} as IUploadDTO;
