export const uploadPost = (req: any, res: any) => {
    res.status(201).json({
        message: "File uploaded successfully!",
        file: req.file
    });
};