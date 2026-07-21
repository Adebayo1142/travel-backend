import pool from "../config/database.js";

export const saveApplication = async (applicationData) => {

  const query = `
    INSERT INTO travel_applications (
      full_name,
      email,
      phone,
      destination,
      travel_date,
      travelers,
      budget,
      notes,
      term_months,
      monthly_payment,
      interest_rate
    )
    VALUES (
      $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
    )
    RETURNING *;
  `;

  const values = [
    applicationData.full_name,
    applicationData.email,
    applicationData.phone,
    applicationData.destination,
    applicationData.travel_date,
    applicationData.travelers,
    applicationData.budget,
    applicationData.notes,
    applicationData.term_months,
    applicationData.monthly_payment,
    applicationData.interest_rate
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};