export default function errorHandler(err, req, res, next) {

    console.error("❌", err);

    // PostgreSQL Unique Constraint
    if (err.code === "23505") {
        return res.status(409).json({
            success: false,
            error: {
                code: "DUPLICATE_RECORD",
                message: "A record with this value already exists."
            }
        });
    }

    // PostgreSQL Foreign Key
    if (err.code === "23503") {
        return res.status(400).json({
            success: false,
            error: {
                code: "FOREIGN_KEY_ERROR",
                message: "Related record does not exist."
            }
        });
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: {
            code: err.code || "INTERNAL_SERVER_ERROR",
            message: err.message || "Something went wrong."
        }
    });

}