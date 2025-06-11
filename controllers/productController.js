import cloudinary from "../config/cloudinary.js";
import ProductModel from "../models/ProductModel.js";
export async function createProduct(req, res) {
  try {
    const { name, price, description } = req.body;

    const variants = Array.isArray(req.body.variants)
    ? req.body.variants.map((v) => ({ ...v }))
    : []
    
  
    const uploadPromises = req.files
      .filter((file) => /^variants\[\d+]\[image]$/.test(file.fieldname))
      .map((file) => {
        const match = file.fieldname.match(/^variants\[(\d+)]\[image]$/);
        const index = parseInt(match[1]);

        return new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream({ resource_type: "auto" }, (err, result) => {
              if (err) return reject(err);

              if (!variants[index]) variants[index] = {};
              variants[index].image = result.secure_url;

              resolve();
            })
            .end(file.buffer);
        });
      });

    await Promise.all(uploadPromises);

    const response = await ProductModel.create({name,price,description,variants})

    res.status(201).json({success:true,message:"product created successfully",response})

    console.log(response);
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({success:false,message:error.message})

  }
}
