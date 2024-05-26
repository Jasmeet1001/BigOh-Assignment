import db from "./db.js";
import { Form, FormData } from "./models/models.js";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { validateEmail, validatePhoneNumber } from "./utils/validators.js";

export const createForm = async (req, res) => {
  try {
    const { title, name, email, phoneNumber, isGraduate } = req.body;
    const uniqueId = uuidv4();
    const form = await db
      .insert(Form)
      .values({
        uniqueId: uniqueId,
        title,
        name,
        email,
        phoneNumber,
        isGraduate,
      })
      .returning();

    return res.status(201).json(form);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const fillData = async (req, res) => {
  try {
    const { form_title } = req.query;
    const { name, email, phoneNumber, isGraduate } = req.body;

    const formExists = await db
      .select()
      .from(Form)
      .where(eq(Form.title, form_title));
    if (formExists.length === 0) {
      return res.status(404).json({ error: "Form not found" });
    }

    if (
      typeof name === "string" &&
      typeof email === "string" &&
      typeof phoneNumber === "number" &&
      typeof isGraduate === "boolean"
    ) {
      if (validatePhoneNumber(phoneNumber) || !validateEmail(email)) {
        return res.status(400).json({ error: "Invalid Email or Phone Number" });
      } 
    
      const uniqueId = uuidv4();
      const formData = await db
        .insert(FormData)
        .values({
          uniqueId: uniqueId,
          formTitle: form_title,
          name,
          email,
          phoneNumber,
          isGraduate,
        })
        .returning();

      return res.status(201).json(formData);
      
    } else {
      return res.status(400).json({ error: "Invalid data types in request body" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllData = async (req, res) => {
  try {
    const { form_title } = req.query;
    const formData = await db
      .select()
      .from(FormData)
      .where(eq(FormData.formTitle, form_title));
    return res.status(200).json(formData);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
