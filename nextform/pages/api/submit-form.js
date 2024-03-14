// pages/api/submit-form.js
import fs from 'fs/promises'; // Import the promises version of the fs module

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body; // Get the form data from the request body
    // Log the form data for debugging purposes
    console.log('Received form data:', formData);
    try {
      // Create a timestamp to use in the filename (optional)
      const timestamp = new Date().toISOString().replace(/:/g, '-');
      // Construct the filename
      const filename = `form-data-${timestamp}.txt`;
      // Convert the form data to a JSON string
      const formDataString = JSON.stringify(formData, null, 2);
      // Write the form data to a text file
      await fs.writeFile(`./form-data/${filename}`, formDataString);
      // Respond with a success message
      res.status(200).json({ message: 'Form data received and saved successfully' });
    } catch (error) {
      console.error('Error saving form data:', error);
      // Respond with an error message
      res.status(500).json({ message: 'Error saving form data' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
